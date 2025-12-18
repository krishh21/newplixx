import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fetch from "node-fetch";
import FormData from "form-data";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3001;

// Serve static files from React build in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../build')));
}

app.post("/generate", async (req, res) => {
  const { prompt, model = "stable-diffusion-xl-v1", count = 1, aspect = "1:1" } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: "Prompt is required" });
  }

  try {
    const formData = new FormData();
    formData.append("prompt", prompt);
    formData.append("model", model);
    formData.append("output_format", "png");
    
    // Convert aspect ratio to width and height
    const [width, height] = aspect.split(':').map(Number);
    formData.append("width", width * 256);
    formData.append("height", height * 256);

    const response = await fetch(
      "https://api.stability.ai/v2beta/stable-image/generate/core",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.STABILITY_API_KEY}`,
          Accept: "application/json",
          ...formData.getHeaders(),
        },
        body: formData,
      }
    );

    const data = await response.json();

    if (data?.image) {
      // For single image response
      res.json({ images: [`data:image/png;base64,${data.image}`] });
    } else if (data?.images) {
      // For multiple images response
      res.json({ images: data.images });
    } else {
      res.status(500).json({ error: "Failed to generate image", data });
    }
  } catch (err) {
    console.error("Server error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// Serve React app for all other routes in production
if (process.env.NODE_ENV === 'production') {
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`🚀 NewPlix server running at http://localhost:${PORT}`);
});
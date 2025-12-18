import React, { useState } from 'react';
import { Wand2, Download, Share2, Sparkles, Zap, RefreshCw } from 'lucide-react';

const AIGenerator = () => {
  const [prompt, setPrompt] = useState('');
  const [model, setModel] = useState('');
  const [count, setCount] = useState('');
  const [aspect, setAspect] = useState('');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!prompt || !model || !count || !aspect) {
      alert('Please fill out all fields.');
      return;
    }

    setLoading(true);
    setImages([]);

    // Simulate API call
    setTimeout(() => {
      const mockImages = Array.from({ length: parseInt(count) }, (_, i) => 
        `https://picsum.photos/400/400?random=${i}`
      );
      setImages(mockImages);
      setLoading(false);
    }, 3000);
  };

  const downloadImage = (imageUrl, index) => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = `newplix-image-${index + 1}.png`;
    link.click();
  };

  const samplePrompts = [
    "A majestic dragon flying over a cyberpunk city at sunset",
    "A serene landscape with floating islands and waterfalls",
    "An astronaut exploring an alien jungle with bioluminescent plants",
    "A steampunk laboratory with intricate brass machinery"
  ];

  return (
    <div className="pt-20 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4" />
            <span className="font-semibold">AI Image Generator</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Create <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Magic</span> with AI
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Transform your imagination into stunning visual masterpieces with our cutting-edge AI technology
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Generator Form */}
          <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg rounded-3xl p-8 mb-12 shadow-2xl border border-gray-200 dark:border-gray-600">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Prompt Input */}
              <div>
                <label className="block text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Describe Your Vision
                </label>
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="A majestic dragon flying over a cyberpunk city at sunset, highly detailed, digital art..."
                  className="w-full h-32 px-6 py-4 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-2xl resize-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  required
                />
                
                {/* Sample Prompts */}
                <div className="mt-4">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Try these prompts:</p>
                  <div className="flex flex-wrap gap-2">
                    {samplePrompts.map((sample, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => setPrompt(sample)}
                        className="text-xs bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full border border-gray-200 dark:border-gray-600 transition-all duration-300 hover:scale-105"
                      >
                        {sample}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Options Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    AI Model
                  </label>
                  <select
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white"
                    required
                  >
                    <option value="">Select Model</option>
                    <option value="stable-diffusion-xl">Stable Diffusion XL</option>
                    <option value="flux-dev">FLUX.1 Dev</option>
                    <option value="dall-e-3">DALL-E 3</option>
                    <option value="midjourney">Midjourney V6</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Image Count
                  </label>
                  <select
                    value={count}
                    onChange={(e) => setCount(e.target.value)}
                    className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white"
                    required
                  >
                    <option value="">Select Count</option>
                    <option value="1">1 Image</option>
                    <option value="2">2 Images</option>
                    <option value="4">4 Images</option>
                    <option value="8">8 Images</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Aspect Ratio
                  </label>
                  <select
                    value={aspect}
                    onChange={(e) => setAspect(e.target.value)}
                    className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white"
                    required
                  >
                    <option value="">Select Ratio</option>
                    <option value="1:1">Square (1:1)</option>
                    <option value="16:9">Landscape (16:9)</option>
                    <option value="9:16">Portrait (9:16)</option>
                    <option value="4:3">Classic (4:3)</option>
                  </select>
                </div>
              </div>

              {/* Generate Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 disabled:from-gray-400 disabled:to-gray-500 text-white py-4 px-8 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-2xl flex items-center justify-center space-x-3"
              >
                {loading ? (
                  <>
                    <RefreshCw className="w-5 h-5 animate-spin" />
                    <span>Generating Magic...</span>
                  </>
                ) : (
                  <>
                    <Wand2 className="w-5 h-5" />
                    <span>Generate Images</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Results */}
          <div className="space-y-8">
            {loading && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {Array.from({ length: parseInt(count) }, (_, index) => (
                  <div
                    key={index}
                    className="aspect-square bg-gradient-to-br from-purple-100 to-pink-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl animate-pulse flex items-center justify-center"
                  >
                    <div className="text-center">
                      <Zap className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                      <p className="text-purple-600 dark:text-purple-400 font-semibold">Creating...</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {images.length > 0 && !loading && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Your Generated Images
                  </h3>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {images.length} image{images.length > 1 ? 's' : ''} generated
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {images.map((image, index) => (
                    <div
                      key={index}
                      className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transition-all duration-500"
                    >
                      <img
                        src={image}
                        alt={`Generated ${index + 1}`}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      
                      {/* Overlay Actions */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                        <button
                          onClick={() => downloadImage(image, index)}
                          className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-110"
                        >
                          <Download className="w-5 h-5" />
                        </button>
                        <button className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-110">
                          <Share2 className="w-5 h-5" />
                        </button>
                      </div>

                      {/* Image Number */}
                      <div className="absolute top-4 left-4 bg-black/50 text-white px-2 py-1 rounded-full text-sm">
                        #{index + 1}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIGenerator;
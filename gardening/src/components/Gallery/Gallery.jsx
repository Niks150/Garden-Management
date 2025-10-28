"use client";
import { useState } from "react";
import { Grid, List, X } from "lucide-react";

export default function Gallery() {
  const [viewMode, setViewMode] = useState("grid"); // "grid" or "list"
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      id: 1,
      src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ff5f946f-8a80-4648-83d3-8bf0f993d189.png",
      title: "Modern Landscape Design",
      description: "Contemporary garden with native plants and sustainable features",
      category: "Landscaping"
    },
    {
      id: 2,
      src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/33b367ca-30f5-4c51-a9f4-5bb9602c7c61.png",
      title: "Lush Green Lawn",
      description: "Professionally maintained lawn with vibrant grass",
      category: "Lawn Care"
    },
    {
      id: 3,
      src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d5898733-cc97-439c-95f5-6b305c25d185.png",
      title: "Colorful Flower Garden",
      description: "Beautiful seasonal flowers and perennial arrangements",
      category: "Planting"
    },
    {
      id: 4,
      src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6abc0f02-cfa2-4358-836b-3a6965687bb5.png",
      title: "Vertical Garden Wall",
      description: "Living wall installation with tropical plants",
      category: "Vertical Walls"
    },
    {
      id: 5,
      src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d469b411-80f5-4aa2-9f94-281b80d1700d.png",
      title: "Garden Pathway",
      description: "Stone pathway surrounded by lush greenery",
      category: "Landscaping"
    },
    {
      id: 6,
      src: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6c95feb4-551d-4697-9e9a-43ab9d7a92f9.png",
      title: "Water Feature Garden",
      description: "Peaceful garden with integrated water elements",
      category: "Specialized"
    }
  ];

  return (
    <main className="min-h-screen bg-white pt-20">
      {/* Header Section */}
      <section className="py-16 bg-gradient-to-br from-emerald-50 via-green-50 to-lime-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
              Our <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">Gallery</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-green-500 mx-auto mb-6" />
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our collection of beautiful gardens and landscapes we've created for our clients
            </p>
          </div>

          {/* View Toggle */}
          <div className="flex justify-center gap-2 mt-8">
            <button
              onClick={() => setViewMode("grid")}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                viewMode === "grid"
                  ? "bg-gradient-to-r from-emerald-600 to-green-600 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-50"
              }`}
            >
              <Grid className="h-5 w-5" />
              Grid View
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                viewMode === "list"
                  ? "bg-gradient-to-r from-emerald-600 to-green-600 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-50"
              }`}
            >
              <List className="h-5 w-5" />
              List View
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Grid View */}
          {viewMode === "grid" && (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {galleryImages.map((image) => (
                <div
                  key={image.id}
                  onClick={() => setSelectedImage(image)}
                  className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-72 object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <span className="inline-block px-3 py-1 bg-emerald-600 rounded-full text-xs font-semibold mb-2">
                        {image.category}
                      </span>
                      <h3 className="font-bold text-xl mb-2">{image.title}</h3>
                      <p className="text-sm opacity-90">{image.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* List View */}
          {viewMode === "list" && (
            <div className="space-y-6">
              {galleryImages.map((image) => (
                <div
                  key={image.id}
                  onClick={() => setSelectedImage(image)}
                  className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl cursor-pointer"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative overflow-hidden h-64 md:h-auto">
                      <img
                        src={image.src}
                        alt={image.title}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-8 flex flex-col justify-center">
                      <span className="inline-block px-4 py-1 bg-gradient-to-r from-emerald-50 to-green-50 text-emerald-700 rounded-full text-sm font-semibold mb-4 w-fit">
                        {image.category}
                      </span>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors">
                        {image.title}
                      </h3>
                      <p className="text-gray-600 text-lg leading-relaxed mb-4">
                        {image.description}
                      </p>
                      <button className="text-emerald-600 font-semibold hover:text-emerald-700 flex items-center gap-2 group-hover:gap-3 transition-all">
                        View Details
                        <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all duration-300 z-10"
          >
            <X className="h-6 w-6" />
          </button>
          <div
            className="max-w-5xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full h-auto max-h-[70vh] object-contain bg-gray-100"
            />
            <div className="p-8">
              <span className="inline-block px-4 py-1 bg-gradient-to-r from-emerald-50 to-green-50 text-emerald-700 rounded-full text-sm font-semibold mb-4">
                {selectedImage.category}
              </span>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">{selectedImage.title}</h3>
              <p className="text-gray-600 text-lg leading-relaxed">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
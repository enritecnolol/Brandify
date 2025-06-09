"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Play, Instagram, Youtube } from "lucide-react";

const portfolioItems = [
  {
    id: 1,
    type: "image",
    category: "social",
    imageUrl:
      "https://images.unsplash.com/photo-1594122230689-45899d9e6f69?q=80&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Social Media Campaign",
    platform: "Instagram",
  },
  {
    id: 2,
    type: "video",
    category: "video",
    imageUrl:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Brand Video",
    platform: "Youtube",
  },
  {
    id: 3,
    type: "image",
    category: "social",
    imageUrl:
      "https://images.unsplash.com/photo-1505275350441-83dcda8eeef5?q=80&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Product Launch",
    platform: "Instagram",
  },
  {
    id: 4,
    type: "image",
    category: "branding",
    imageUrl:
      "https://images.unsplash.com/photo-1618249807726-2f381c277de1?q=80&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Brand Identity",
    platform: "Instagram",
  },
];

const categories = [
  { id: "all", label: "All Work" },
  { id: "social", label: "Social Media" },
  { id: "video", label: "Videos" },
  { id: "branding", label: "Branding" },
];

export default function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredItems = portfolioItems.filter(
    (item) => selectedCategory === "all" || item.category === selectedCategory
  );

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">Our Portfolio</h2>
          <p className="text-gray-600">Check out our latest work</p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category.id
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <motion.div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <AnimatePresence mode="wait">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative group aspect-square rounded-lg overflow-hidden bg-white shadow-md"
              >
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      {item.platform === "Instagram" ? (
                        <Instagram className="w-4 h-4 text-white" />
                      ) : (
                        <Youtube className="w-4 h-4 text-white" />
                      )}
                      <span className="text-white text-sm">
                        {item.platform}
                      </span>
                    </div>
                    <h3 className="text-white font-medium">{item.title}</h3>
                  </div>

                  {/* Play button for videos */}
                  {item.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <Play className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More Button */}
        <div className="text-center mt-8">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
            View More
          </button>
        </div>
      </div>
    </section>
  );
}

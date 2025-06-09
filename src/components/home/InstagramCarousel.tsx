"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Heart, MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";

const instagramPosts = [
  {
    id: 1,
    imageUrl:
      "https://images.unsplash.com/photo-1502998070258-dc1338445ac2?q=80&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    likes: 1234,
    caption: "Creating engaging content that resonates! 🚀",
    username: "brandifymco",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  },
  {
    id: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1576829824883-bf9e6b522252?q=80&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    likes: 982,
    caption: "Building strong social media presence 💪",
    username: "brandifymco",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  },
  {
    id: 3,
    imageUrl:
      "https://images.unsplash.com/photo-1597188446702-9b16067ad718?q=80&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    likes: 1567,
    caption: "Strategy that drives results 📈",
    username: "brandifymco",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  },
];

export default function InstagramCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [likedPosts, setLikedPosts] = useState<number[]>([]);
  const [isPaused, setIsPaused] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);

  const handleLike = (postId: number) => {
    setUserInteracted(true);
    if (likedPosts.includes(postId)) {
      setLikedPosts(likedPosts.filter((id) => id !== postId));
    } else {
      setLikedPosts([...likedPosts, postId]);
    }
  };

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === instagramPosts.length - 1 ? 0 : prev + 1
    );
  }, []);

  const prevSlide = () => {
    setUserInteracted(true);
    setCurrentIndex((prev) =>
      prev === 0 ? instagramPosts.length - 1 : prev - 1
    );
  };

  const goToSlide = (index: number) => {
    setUserInteracted(true);
    setCurrentIndex(index);
  };

  // Auto-slide functionality
  useEffect(() => {
    let slideInterval: NodeJS.Timeout;

    const startSlideTimer = () => {
      slideInterval = setInterval(() => {
        if (!isPaused && !userInteracted) {
          nextSlide();
        }
      }, 2500);
    };

    startSlideTimer();

    // Cleanup
    return () => {
      if (slideInterval) {
        clearInterval(slideInterval);
      }
    };
  }, [isPaused, userInteracted, nextSlide]);

  // Reset user interaction after some time
  useEffect(() => {
    let interactionTimeout: NodeJS.Timeout;

    if (userInteracted) {
      interactionTimeout = setTimeout(() => {
        setUserInteracted(false);
      }, 5000); // Reset after 5 seconds of no interaction
    }

    return () => {
      if (interactionTimeout) {
        clearTimeout(interactionTimeout);
      }
    };
  }, [userInteracted]);

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center">Latest Updates</h2>

        <div
          className="relative max-w-3xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-8 bg-white rounded-full p-2 shadow-lg z-10 hover:bg-gray-100 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => {
              setUserInteracted(true);
              nextSlide();
            }}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-8 bg-white rounded-full p-2 shadow-lg z-10 hover:bg-gray-100 transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Carousel Container */}
          <div className="overflow-hidden rounded-xl">
            <motion.div
              className="flex"
              animate={{
                x: `-${currentIndex * 100}%`,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {instagramPosts.map((post) => (
                <motion.div key={post.id} className="w-full flex-shrink-0 px-2">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-sm mx-auto">
                    {/* Post Header */}
                    <div className="p-3 flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-full overflow-hidden">
                        <Image
                          src={post.avatar}
                          alt={post.username}
                          width={32}
                          height={32}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="text-sm font-medium">
                        {post.username}
                      </span>
                    </div>

                    {/* Post Image */}
                    <div className="relative aspect-square">
                      <Image
                        src={post.imageUrl}
                        alt="Instagram Post"
                        fill
                        className="object-cover"
                      />
                      <AnimatePresence>
                        {likedPosts.includes(post.id) && (
                          <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            className="absolute inset-0 flex items-center justify-center"
                          >
                            <Heart
                              className="w-16 h-16 text-white filter drop-shadow-lg"
                              fill="white"
                            />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Post Actions and Caption */}
                    <div className="p-3">
                      <div className="flex items-center space-x-4 mb-2">
                        <button
                          onClick={() => handleLike(post.id)}
                          className="focus:outline-none"
                        >
                          <Heart
                            className={`w-5 h-5 ${
                              likedPosts.includes(post.id)
                                ? "text-red-500 fill-red-500"
                                : "text-gray-600"
                            } transition-colors`}
                          />
                        </button>
                        <MessageCircle className="w-5 h-5 text-gray-600" />
                      </div>
                      <p className="text-sm">
                        <span className="font-medium mr-2">
                          {post.username}
                        </span>
                        {post.caption}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center space-x-2 mt-4">
            {instagramPosts.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  currentIndex === index ? "bg-blue-600 w-3" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Heart, MessageCircle, Bookmark, Share2 } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block"
            >
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-md">
                <span className="text-xl">😊</span>
                <span className="text-purple-600 font-medium">
                  Empowering your journey
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight"
            >
              Fuel your online success with{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">
                social media
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-600 max-w-xl"
            >
              Welcome to Brandify MCO, where we specialize in crafting
              compelling social media strategies that ignite engagement, fuel
              growth, and amplify your brand&apos;s online presence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90 text-white px-8 py-6 text-lg"
              >
                Let&apos;s do this!
              </Button>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center space-x-6 pt-4"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((_, index) => (
                  <div
                    key={index}
                    className="w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-lg"
                  >
                    <Image
                      src={`https://i.pravatar.cc/150?img=${index + 2}`}
                      alt={`User ${index + 1}`}
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="text-gray-600">
                <span className="font-semibold">1,000+</span> satisfied clients
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Social Media Posts */}
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Main Post */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Social Media Marketing"
                  width={800}
                  height={600}
                  className="w-full h-48 sm:h-60 md:h-72 object-cover"
                />
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent" />
                {/* Like Button */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg"
                >
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" />
                </motion.div>
              </div>

              <div className="p-4 sm:p-6">
                <div className="flex items-center space-x-3 sm:space-x-4 mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 p-0.5 hover:from-purple-600 hover:to-blue-600 transition-all duration-300">
                    <div className="w-full h-full rounded-full overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
                        alt="Profile"
                        width={48}
                        height={48}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm sm:text-base">
                      Sarah Mitchell
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500">
                      Digital Marketing Expert
                    </p>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-gray-600 mb-4">
                  Creating engaging content that resonates with your audience 🚀
                  #SocialMediaMarketing #DigitalStrategy
                </p>

                <div className="flex justify-between items-center border-t pt-4">
                  <div className="flex space-x-4 sm:space-x-6">
                    <button className="flex items-center space-x-1 sm:space-x-2 text-gray-600 hover:text-red-500 transition-colors">
                      <Heart className="w-5 h-5 sm:w-6 sm:h-6" />
                      <span className="text-xs sm:text-sm font-medium">
                        2.4k
                      </span>
                    </button>
                    <button className="flex items-center space-x-1 sm:space-x-2 text-gray-600 hover:text-blue-500 transition-colors">
                      <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                      <span className="text-xs sm:text-sm font-medium">
                        482
                      </span>
                    </button>
                    <button className="hidden sm:flex items-center space-x-2 text-gray-600 hover:text-green-500 transition-colors">
                      <Share2 className="w-6 h-6" />
                      <span className="text-sm font-medium">Share</span>
                    </button>
                  </div>
                  <button className="text-gray-600 hover:text-purple-500 transition-colors">
                    <Bookmark className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Floating Posts - Hidden on mobile, shown on larger screens */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="hidden md:block absolute top-1/4 -right-[5%] transform translate-x-1/4"
            >
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 w-56 lg:w-72">
                <Image
                  src="https://images.unsplash.com/photo-1472393365320-db77a5abbecc?q=80&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Social Post"
                  width={400}
                  height={300}
                  className="w-full h-32 lg:h-40 object-cover rounded-t-xl"
                />
                <div className="p-3 lg:p-4">
                  <div className="flex items-center space-x-2 lg:space-x-3">
                    <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop"
                        alt="Profile"
                        width={32}
                        height={32}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-xs lg:text-sm font-medium text-gray-700">
                      Content Strategy
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="hidden md:block absolute -top-[5%] -left-[5%] transform -translate-x-1/4"
            >
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 w-56 lg:w-72">
                <Image
                  src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Social Post"
                  width={400}
                  height={300}
                  className="w-full h-32 lg:h-40 object-cover rounded-t-xl"
                />
                <div className="p-3 lg:p-4">
                  <div className="flex items-center space-x-2 lg:space-x-3">
                    <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop"
                        alt="Profile"
                        width={32}
                        height={32}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-xs lg:text-sm font-medium text-gray-700">
                      Campaign Results
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

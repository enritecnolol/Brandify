"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { TrendingUp, Award, Users } from "lucide-react";

const features = [
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Data-Driven Approach",
    description: "We make decisions based on real-time data and analytics",
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Industry Expertise",
    description: "Years of experience across various industries",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Dedicated Team",
    description: "Your personal social media success squad",
  },
];

const stats = [
  { value: "98%", label: "Client Retention" },
  { value: "250+", label: "Projects Done" },
  { value: "15+", label: "Team Members" },
];

export default function WhyChooseUs() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 order-2 lg:order-1"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center lg:text-left">
              Why Choose Brandify MCO?
            </h2>
            <div className="space-y-6 sm:space-y-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left space-y-4 sm:space-y-0 sm:space-x-4"
                >
                  <div className="w-16 h-16 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 max-w-lg mx-auto sm:mx-0">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative order-1 lg:order-2 mb-12 lg:mb-0"
          >
            <div className="aspect-video bg-white rounded-2xl shadow-2xl overflow-hidden">
              <Image
                src={
                  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=500&fit=crop"
                }
                alt="Team Working"
                width={800}
                height={500}
                className="w-full h-full object-cover"
                priority
              />
            </div>

            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="absolute -bottom-8 left-[10%] transform -translate-x-1/2 w-[90%] sm:w-5/6"
            >
              <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
                <div className="grid grid-cols-3 gap-3 sm:gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-purple-600">
                        {stat.value}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

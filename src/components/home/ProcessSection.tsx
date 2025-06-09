"use client";

import { motion } from "framer-motion";

const processes = [
  {
    step: "01",
    title: "Strategy",
    description: "Define goals and create a tailored social media strategy",
  },
  {
    step: "02",
    title: "Create",
    description: "Develop engaging content that resonates with your audience",
  },
  {
    step: "03",
    title: "Engage",
    description: "Build and nurture your community through active engagement",
  },
  {
    step: "04",
    title: "Analyze",
    description: "Track performance and optimize for better results",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">How We Work</h2>
          <p className="text-xl text-gray-600">
            Our proven process for social media success
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-10">
          {processes.map((process, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>

              {/* Arrow connecting to next step */}
              {index < processes.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                  <div className="w-8 h-8 border-t-2 border-r-2 border-purple-300 transform rotate-45"></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

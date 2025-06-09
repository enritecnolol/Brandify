"use client";

import { motion } from "framer-motion";
import {
  PenTool,
  Camera,
  BarChart,
  Users,
  Target,
  MessageCircle,
} from "lucide-react";

const services = [
  {
    icon: <PenTool className="w-8 h-8" />,
    title: "Strategy Development",
    description:
      "Custom social media strategies aligned with your business goals",
  },
  {
    icon: <Camera className="w-8 h-8" />,
    title: "Content Creation",
    description: "Eye-catching visuals and engaging content that resonates",
  },
  {
    icon: <BarChart className="w-8 h-8" />,
    title: "Analytics & Reporting",
    description: "Data-driven insights to optimize your social presence",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Community Management",
    description: "Active engagement and community building with your audience",
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Paid Advertising",
    description: "Strategic ad campaigns that drive results",
  },
  {
    icon: <MessageCircle className="w-8 h-8" />,
    title: "Social Listening",
    description: "Monitor and analyze social conversations about your brand",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">
            Comprehensive social media solutions for your brand
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

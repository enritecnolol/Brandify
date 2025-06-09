"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  Heart,
  MessageCircle,
  Users,
} from "lucide-react";

// Counter component for animated numbers
const Counter = ({
  value,
  duration = 1,
}: {
  value: number;
  duration: number;
}) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, value, { duration });
    return animation.stop;
  }, [count, value, duration]);

  return <motion.span>{rounded}</motion.span>;
};

// Stats data
const stats = [
  { icon: Heart, value: 283, color: "white" },
  { icon: MessageCircle, value: 99, color: "white" },
  { icon: Users, value: 3, color: "white" },
];

// Services data remains the same
const services = [
  {
    icon: <Facebook className="w-12 h-12 text-[#4267B2]" />,
    name: "Facebook marketing",
    bgColor: "bg-[#E7F0FF]",
  },
  {
    icon: <Instagram className="w-12 h-12 text-[#E4405F]" />,
    name: "Instagram marketing",
    bgColor: "bg-[#FFE7EF]",
  },
  {
    icon: <Linkedin className="w-12 h-12 text-[#0077B5]" />,
    name: "LinkedIn marketing",
    bgColor: "bg-[#E7F3FF]",
  },
  {
    icon: <Twitter className="w-12 h-12 text-[#1DA1F2]" />,
    name: "Twitter marketing",
    bgColor: "bg-[#E7F7FF]",
  },
  {
    icon: <Youtube className="w-12 h-12 text-[#FF0000]" />,
    name: "YouTube marketing",
    bgColor: "bg-[#FFE7E7]",
  },
];

export default function SocialServicesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Profile */}
          <div className="relative">
            <div className="relative w-[380px] h-[380px] mx-auto">
              {/* Main Container with Circle Mask and Border */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-lg">
                {/* Profile Image */}
                <Image
                  src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?q=80&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Social Media Marketing"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating Stats - Top */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute -top-3 left-10 bg-[#ff4d4d] rounded-lg px-6 py-1.5 flex items-center gap-2 shadow-lg"
              >
                {stats.map((stat, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <stat.icon className="w-4 h-4 text-white" fill="white" />
                    <span className="text-white font-medium">
                      <Counter value={stat.value} duration={2} />
                    </span>
                  </div>
                ))}
              </motion.div>

              {/* Purple notification */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute -top-4 right-10 bg-purple-500 rounded-lg p-2"
              >
                <span className="text-white text-lg">🔔</span>
              </motion.div>

              {/* Like Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute bottom-5 right-5 bg-[#4267B2] rounded-full p-4 shadow-lg cursor-pointer hover:scale-110 transition-transform"
              >
                <div className="w-8 h-8 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                    <path d="M14 9h3l-4-4-4 4h3v7h2V9z" />
                    <path d="M5 20v2h14v-2H5z" />
                  </svg>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Side - Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`${service.bgColor} p-6 rounded-2xl hover:shadow-lg transition-shadow duration-300`}
              >
                <div className="flex flex-col items-center text-center">
                  {service.icon}
                  <h3 className="mt-4 font-medium text-gray-800">
                    {service.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

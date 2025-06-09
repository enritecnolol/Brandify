"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function CtaSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-purple-600 to-blue-600 text-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Social Media Presence?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Let&apos;s create a social media strategy that drives real results
            for your business. Start your journey to social media success today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-purple-600 hover:bg-white/90 px-8 py-6 text-lg"
            >
              Schedule a Free Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg"
            >
              View Our Portfolio
            </Button>
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-12 grid sm:grid-cols-3 gap-8"
          >
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">24/7</div>
              <div className="text-white/80">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">Free</div>
              <div className="text-white/80">Strategy Session</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">100%</div>
              <div className="text-white/80">Satisfaction Guaranteed</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Settings, TrendingUp, ShieldCheck } from 'lucide-react';
import Header from '@/components/Header';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Philosophy Section
const PhilosophySection = () => {
  const cards = [
    {
      icon: Settings,
      title: "Clarity",
      description: "We simplify complex operations into intuitive workflows that anyone can master. Our systems are designed to eliminate confusion and bring crystal-clear understanding to your business processes."
    },
    {
      icon: TrendingUp,
      title: "Growth", 
      description: "Our systems scale with your ambition, enabling sustainable business expansion. Every solution we build is designed to grow with you, supporting your journey from startup to enterprise."
    },
    {
      icon: ShieldCheck,
      title: "Harmony",
      description: "Experience the peace of mind that comes from perfectly ordered systems. When everything works in harmony, your business flows like a well-orchestrated symphony."
    }
  ];

  return (
    <div className="min-h-screen bg-sandstone">
      <Header />
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <h1 className="font-serif text-4xl lg:text-6xl font-bold text-indigo-900 mb-6">
              System Sahi. Sab Sahi.
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our philosophy is simple: when your systems are in harmony, everything else follows. 
              We believe in creating order from chaos, bringing &apos;Ritam&apos; (cosmic harmony) to your business operations.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8 mb-16"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            {cards.map((card, index) => (
              <motion.div 
                key={index}
                className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl border border-gray-200/50 hover:shadow-xl transition-all duration-300"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-amber-600/10 rounded-2xl flex items-center justify-center mb-6">
                  <card.icon className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-indigo-900 mb-4">
                  {card.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Philosophy Content */}
          <motion.div 
            className="bg-gradient-to-br from-indigo-50/30 to-amber-50/30 rounded-3xl p-12 text-center"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.4 }}
          >
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-indigo-900 mb-6">
              The Ritam Way
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              In ancient Indian philosophy, &apos;Ritam&apos; represents the principle of natural order which regulates both the cosmic and moral spheres. 
              We apply this timeless wisdom to modern business challenges, creating systems that don&apos;t just workthey flow naturally, 
              bringing order to the chaos of daily operations and enabling businesses to achieve their highest potential.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div>
                <h4 className="font-serif text-xl font-semibold text-indigo-900 mb-3">Simplicity</h4>
                <p className="text-gray-600">Complex problems deserve elegant solutions. We strip away the unnecessary to reveal the essential.</p>
              </div>
              <div>
                <h4 className="font-serif text-xl font-semibold text-indigo-900 mb-3">Sustainability</h4>
                <p className="text-gray-600">Our systems are built to last, evolving with your business needs while maintaining their core strength.</p>
              </div>
              <div>
                <h4 className="font-serif text-xl font-semibold text-indigo-900 mb-3">Empowerment</h4>
                <p className="text-gray-600">Technology should empower people, not replace them. We create tools that enhance human capability.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PhilosophySection;

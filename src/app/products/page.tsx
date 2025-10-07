'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Users, CreditCard, BarChart3, Smartphone, Globe } from 'lucide-react';
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

// Product Showcase Section
const ProductsPage = () => {
  const features = [
    {
      icon: Calendar,
      title: "Smart Booking Management",
      description: "Intuitive booking system with real-time availability, automated confirmations, and guest preferences."
    },
    {
      icon: Users,
      title: "Guest Experience Hub",
      description: "Complete guest journey management from check-in to check-out with personalized service tracking."
    },
    {
      icon: CreditCard,
      title: "Integrated Payment System",
      description: "Seamless payment processing with multiple payment gateways, invoicing, and financial reporting."
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description: "Real-time dashboards with occupancy rates, revenue analytics, and performance metrics."
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Fully responsive interface that works perfectly on all devices, with dedicated mobile apps."
    },
    {
      icon: Globe,
      title: "Multi-Property Support",
      description: "Manage multiple properties from a single dashboard with centralized reporting and control."
    }
  ];

  return (
    <div className="min-h-screen bg-sandstone">
      <Header />
      
      {/* Hero Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div 
              className="space-y-8"
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              <motion.h1 
                className="font-serif text-4xl lg:text-6xl font-bold text-indigo-900"
                variants={fadeInUp}
              >
                Ritam for Hotels
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-600 leading-relaxed"
                variants={fadeInUp}
              >
                A comprehensive hotel management system that brings order to every aspect 
                of your hospitality business - from bookings to billing, from staff to guests.
              </motion.p>
              
              <motion.div 
                className="space-y-4"
                variants={fadeInUp}
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  <span className="text-gray-700 font-medium">Complete hotel operations management</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  <span className="text-gray-700 font-medium">Real-time analytics and reporting</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  <span className="text-gray-700 font-medium">Seamless guest experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  <span className="text-gray-700 font-medium">Multi-device accessibility</span>
                </div>
              </motion.div>
              
              <motion.button 
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 transition-colors"
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Request Demo
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gradient-to-br from-indigo-900 to-indigo-700 rounded-2xl p-8 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="bg-white rounded-lg p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="font-semibold text-indigo-900">Hotel Dashboard</div>
                    <div className="text-sm text-gray-500">Today • Oct 8, 2025</div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-amber-50 p-3 rounded-lg">
                      <div className="text-2xl font-bold text-amber-600">24</div>
                      <div className="text-sm text-gray-600">Check-ins</div>
                    </div>
                    <div className="bg-indigo-50 p-3 rounded-lg">
                      <div className="text-2xl font-bold text-indigo-600">18</div>
                      <div className="text-sm text-gray-600">Check-outs</div>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">92%</div>
                      <div className="text-sm text-gray-600">Occupancy</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Revenue Today</span>
                      <span className="font-semibold">₹1,24,500</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-amber-600 h-2 rounded-full w-3/4"></div>
                    </div>
                  </div>
                  <div className="pt-2 border-t border-gray-100">
                    <div className="text-xs text-gray-500 mb-2">Recent Bookings</div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Room 204 - Sharma</span>
                        <span className="text-green-600">Confirmed</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Room 108 - Patel</span>
                        <span className="text-blue-600">Check-in</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Features Grid */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            animate="visible"
            variants={stagger}
            transition={{ delay: 0.4 }}
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-gray-200/50 hover:shadow-xl transition-all duration-300"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-amber-600/10 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-indigo-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div 
            className="mt-20 bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-900 rounded-3xl p-12 text-center text-white"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.6 }}
          >
            <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-6">
              Ready to Transform Your Hotel Operations?
            </h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              Join hundreds of hotels across India who have already embraced the Ritam way of hospitality management.
            </p>
            <motion.button 
              className="bg-amber-600 hover:bg-amber-700 text-white px-10 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 mx-auto transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule a Demo
              <ArrowRight className="w-6 h-6" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;

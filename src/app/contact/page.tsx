'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone, MapPin, Calendar } from 'lucide-react';
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

// Contact Page
const ContactPage = () => {
  return (
    <div className="min-h-screen bg-sandstone">
      <Header />
      
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <h1 className="font-serif text-4xl lg:text-6xl font-bold text-indigo-900 mb-6">
              Ready to bring &apos;Ritam&apos; to your business?
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Transform your business operations from chaos to clarity. Let&apos;s build something extraordinary together.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div 
              className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl border border-gray-200/50"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <h2 className="font-serif text-3xl font-bold text-indigo-900 mb-6">
                Request a Demo
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we&apos;ll get back to you within 24 hours to schedule your personalized demo.
              </p>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Business Email *
                  </label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                    placeholder="your@business.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                    placeholder="+91 98765 43210"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Business Name *
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                    placeholder="Your hotel/business name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Business Type
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-600 focus:border-transparent">
                    <option>Select your business type</option>
                    <option>Hotel/Resort</option>
                    <option>Guest House</option>
                    <option>Restaurant</option>
                    <option>Other Hospitality</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tell us about your needs
                  </label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                    placeholder="What challenges are you facing? What features are most important to you?"
                  ></textarea>
                </div>
                
                <motion.button 
                  type="submit"
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Request Demo
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div 
              className="space-y-8"
              initial="hidden"
              animate="visible"
              variants={stagger}
              transition={{ delay: 0.2 }}
            >
              <motion.div 
                className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-900 rounded-2xl p-8 text-white"
                variants={fadeInUp}
              >
                <h3 className="font-serif text-2xl font-bold mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium">Email Us</p>
                      <p className="text-indigo-200">office@ritambharat.software</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium">Call Us</p>
                      <p className="text-indigo-200">+91 9936105256</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium">Visit Us</p>
                      <p className="text-indigo-200">Kanpur, UP, India</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium">Business Hours</p>
                      <p className="text-indigo-200">Mon-Fri: 9 AM - 6 PM IST</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl border border-gray-200/50"
                variants={fadeInUp}
              >
                <h3 className="font-serif text-2xl font-bold text-indigo-900 mb-4">
                  Why Choose Ritam Bharat?
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mt-2"></div>
                    <span>Trusted by 500+ businesses across India</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mt-2"></div>
                    <span>24/7 customer support in English and Hindi</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mt-2"></div>
                    <span>Free onboarding and training included</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mt-2"></div>
                    <span>No setup fees, no hidden costs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mt-2"></div>
                    <span>30-day money-back guarantee</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div 
                className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-8 border border-amber-200"
                variants={fadeInUp}
              >
                <h3 className="font-serif text-xl font-bold text-indigo-900 mb-4">
                  💡 Quick Tip
                </h3>
                <p className="text-gray-700">
                  Not sure if Ritam is right for your business? Book a free 15-minute consultation 
                  where we&apos;ll assess your current processes and show you exactly how Ritam can help.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Calendar } from 'lucide-react';
import Header from '@/components/Header';
import ContactForm from '@/components/ContactForm';

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
              <ContactForm />
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
                      <p className="text-indigo-200">+91 9936105305</p>
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
                  💡 Customer Consultation
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

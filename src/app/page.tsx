'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Users, Building, Award, CheckCircle, Play, TrendingUp, Heart, Zap } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import RitamAnimation from '@/components/RitamAnimation';
import VideoEmbed from '@/components/VideoEmbed';
import VideoModal from '@/components/VideoModal';

// Animation variants for consistent animations throughout the page
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

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 }
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 }
};

// Hero Section
const HeroSection = ({ onOpenVideo }: { onOpenVideo: () => void }) => {
  return (
    <section className="min-h-screen flex items-center px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-8"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.h1 
              className="font-serif text-5xl lg:text-7xl font-bold text-indigo-900 leading-tight"
              variants={fadeInUp}
            >
              Bringing Order to Ambition.
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 leading-relaxed max-w-lg"
              variants={fadeInUp}
            >
                    We build elegant software systems for India&apos;s small and medium businesses, 
              turning their daily chaos into clarity and growth.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              variants={fadeInUp}
            >
              <Link href="/contact">
                <motion.button 
                  className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Request a Demo
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              
              <motion.button
                onClick={onOpenVideo}
                className="border-2 border-indigo-900 text-indigo-900 hover:bg-indigo-900 hover:text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Play className="w-5 h-5" />
                Watch Demo
              </motion.button>
            </motion.div>
            
            {/* Trust Indicators */}
            <motion.div 
              className="flex flex-wrap items-center gap-6 pt-8 border-t border-gray-200"
              variants={fadeInUp}
            >
              <div className="flex items-center gap-2 text-gray-600">
                <Star className="w-5 h-5 text-amber-500 fill-current" />
                <span className="font-medium">4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Users className="w-5 h-5 text-indigo-600" />
                <span className="font-medium">500+ Happy Customers</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Award className="w-5 h-5 text-amber-500" />
                <span className="font-medium">Industry Leader</span>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <RitamAnimation />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Stats Section
const StatsSection = () => {
  const stats = [
    { number: "500+", label: "Businesses Served", icon: Building },
    { number: "99.9%", label: "Uptime Guarantee", icon: Zap },
    { number: "24/7", label: "Support Available", icon: Heart },
    { number: "50%", label: "Time Saved Daily", icon: TrendingUp }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-indigo-50/30 to-amber-50/30">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-indigo-900 mb-4">
            Trusted by Businesses Across India
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join hundreds of successful businesses who have transformed their operations with Ritam
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="text-center"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-16 h-16 bg-white/60 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 border border-gray-200/50">
                <stat.icon className="w-8 h-8 text-amber-600" />
              </div>
              <div className="font-serif text-3xl lg:text-4xl font-bold text-indigo-900 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// (removed broken CustomVideoPlayer component - using embedded iframe in VideoDemoSection)

// Video Demo Section
const VideoDemoSection = ({ onOpenVideo }: { onOpenVideo: () => void }) => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-indigo-900 mb-6">
            See Ritam in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Watch how our elegant solutions transform complex business operations into smooth, 
            efficient workflows. See real results from real businesses.
          </p>
        </motion.div>

        <motion.div 
          className="relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          transition={{ delay: 0.2 }}
        >
          <div className="relative bg-gradient-to-br from-indigo-900 to-indigo-700 rounded-3xl p-8 shadow-2xl">
            {/* Video Container */}
            <div className="relative aspect-video bg-black rounded-2xl overflow-hidden">
              {/* Use client VideoEmbed component to lazy-load iframe and show thumbnail */}
              {/* ...existing code... */}
              <VideoEmbed videoId="CAP6csjY-Rw" title="Ritam Bharat - Product Demo & Success Stories" />
            </div>
            
            {/* Video Info */}
            <div className="mt-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-bold mb-2">Product Demo & Customer Stories</h3>
                  <p className="text-indigo-200">
                    Discover how Ritam transforms businesses across India
                  </p>
                </div>
                <motion.button
                  onClick={onOpenVideo}
                  className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play className="w-5 h-5" />
                  Watch Demo
                </motion.button>
              </div>
            </div>
          </div>

          {/* Video Stats */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
            variants={stagger}
            transition={{ delay: 0.4 }}
          >
            <motion.div 
              className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-gray-200/50 text-center"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <div className="text-3xl mb-2">🎯</div>
              <div className="font-serif text-xl font-bold text-indigo-900 mb-2">Real Results</div>
              <p className="text-gray-600 text-sm">See actual improvements in business efficiency</p>
            </motion.div>
            
            <motion.div 
              className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-gray-200/50 text-center"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <div className="text-3xl mb-2">👥</div>
              <div className="font-serif text-xl font-bold text-indigo-900 mb-2">Customer Stories</div>
              <p className="text-gray-600 text-sm">Hear from successful business owners</p>
            </motion.div>
            
            <motion.div 
              className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-gray-200/50 text-center"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <div className="text-3xl mb-2">💡</div>
              <div className="font-serif text-xl font-bold text-indigo-900 mb-2">Live Demo</div>
              <p className="text-gray-600 text-sm">Step-by-step product walkthrough</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Quick Preview Section
const QuickPreviewSection = () => {
  const features = [
    {
      title: "Smart Dashboard",
      description: "Get real-time insights into your business operations",
      image: "📊"
    },
    {
      title: "Mobile Ready",
      description: "Access your data anywhere, anytime on any device",
      image: "📱"
    },
    {
      title: "Automated Reports",
      description: "Generate detailed reports with just one click",
      image: "📈"
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInLeft}
          >
            <div>
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-indigo-900 mb-6">
                See Ritam in Action
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Experience how our elegant solutions transform complex business operations 
                into smooth, efficient workflows that save time and reduce stress.
              </p>
            </div>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start gap-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200/50 hover:shadow-lg transition-all duration-300"
                  variants={fadeInUp}
                  whileHover={{ x: 5 }}
                >
                  <div className="text-3xl">{feature.image}</div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-indigo-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex gap-4">
              <Link href="/products">
                <motion.button 
                  className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Explore Features
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
              <Link href="/technology">
                <motion.button 
                  className="text-indigo-900 hover:text-indigo-700 px-6 py-3 font-semibold flex items-center gap-2 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
            </div>
          </motion.div>

          <motion.div 
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInRight}
          >
            <div className="bg-gradient-to-br from-indigo-900 to-indigo-700 rounded-3xl p-8 shadow-2xl">
              <div className="bg-white rounded-2xl p-6 space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-indigo-900 text-lg">Business Overview</h3>
                  <div className="text-sm text-gray-500">Live Dashboard</div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-xl">
                    <div className="text-2xl font-bold text-green-600">₹2.4L</div>
                    <div className="text-sm text-gray-600">Today&apos;s Revenue</div>
                    <div className="text-xs text-green-600 flex items-center gap-1 mt-1">
                      <TrendingUp className="w-3 h-3" />
                      +12% from yesterday
                    </div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-xl">
                    <div className="text-2xl font-bold text-blue-600">42</div>
                    <div className="text-sm text-gray-600">Active Bookings</div>
                    <div className="text-xs text-blue-600">6 new today</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-700">Recent Activity</span>
                    <span className="text-xs text-gray-500">Real-time</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm">New booking: Room 204</span>
                      <span className="text-xs text-gray-500 ml-auto">2m ago</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm">Payment received: ₹15,000</span>
                      <span className="text-xs text-gray-500 ml-auto">5m ago</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                      <span className="text-sm">Guest checked out: Room 108</span>
                      <span className="text-xs text-gray-500 ml-auto">12m ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Testimonials Section
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Rajesh Sharma",
      business: "Hotel Raj Palace, Jaipur",
      text: "Ritam has completely transformed how we manage our hotel. What used to take hours now takes minutes. Our staff loves how easy it is to use!",
      rating: 5
    },
    {
      name: "Priya Patel",
      business: "Seaside Resort, Goa",
      text: "The real-time analytics have been a game-changer. We can make decisions instantly and our revenue has increased by 30% since using Ritam.",
      rating: 5
    },
    {
      name: "Amit Singh",
      business: "Mountain View Lodge, Manali",
      text: "Best investment we've made for our business. The support team is fantastic and the system never goes down. Highly recommended!",
      rating: 5
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-indigo-50/30 to-amber-50/30">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-indigo-900 mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Don&apos;t just take our word for it. Here&apos;s what business owners across India say about Ritam.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl border border-gray-200/50 hover:shadow-xl transition-all duration-300"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-6 leading-relaxed">
            {testimonial.text}
              </p>
              <div>
                <div className="font-semibold text-indigo-900">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.business}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// CTA Section
const CTASection = ({ onOpenVideo }: { onOpenVideo: () => void }) => {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-900">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          <motion.h2 
            className="font-serif text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            variants={fadeInUp}
          >
                  Ready to Experience &apos;Ritam&apos;?
          </motion.h2>
          
          <motion.p 
            className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Join hundreds of successful businesses who have already transformed their operations. 
            Start your free trial today – no credit card required.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={fadeInUp}
          >
            <Link href="/contact">
              <motion.button 
                className="bg-amber-600 hover:bg-amber-700 text-white px-10 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Free Trial
                <ArrowRight className="w-6 h-6" />
              </motion.button>
            </Link>
            <motion.button
              onClick={onOpenVideo}
              className="border-2 border-white text-white hover:bg-white hover:text-indigo-900 px-10 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play className="w-6 h-6" />
              Watch Demo
            </motion.button>
          </motion.div>

          <motion.div 
            className="mt-8 flex flex-wrap justify-center items-center gap-6 text-indigo-200"
            variants={fadeInUp}
          >
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Free 14-day trial</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>No setup fees</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Cancel anytime</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Main Homepage Component  
export default function HomePage() {
  const [videoOpen, setVideoOpen] = useState(false);
  const openVideo = () => setVideoOpen(true);
  const closeVideo = () => setVideoOpen(false);

  return (
    <main className="overflow-hidden">
      <Header />
      <HeroSection onOpenVideo={openVideo} />
      <StatsSection />
      <VideoDemoSection onOpenVideo={openVideo} />
      <QuickPreviewSection />
      <TestimonialsSection />
      <CTASection onOpenVideo={openVideo} />
      <VideoModal open={videoOpen} onClose={closeVideo} videoId="CAP6csjY-Rw" title="Ritam Bharat - Product Demo & Success Stories" />
    </main>
  );
}

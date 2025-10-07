'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Layers, Cloud, Lock, Smartphone } from 'lucide-react';
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

// Technology Section
const TechnologyPage = () => {
  const technologies = [
    { name: "Next.js", category: "Frontend Framework", color: "bg-gray-900" },
    { name: "React", category: "UI Library", color: "bg-blue-600" },
    { name: "TypeScript", category: "Programming Language", color: "bg-blue-500" },
    { name: "Tailwind CSS", category: "Styling Framework", color: "bg-cyan-500" },
    { name: "Appwrite", category: "Backend as a Service", color: "bg-pink-600" },
    { name: "Vercel", category: "Deployment Platform", color: "bg-black" },
    { name: "Node.js", category: "Runtime Environment", color: "bg-green-600" },
    { name: "PostgreSQL", category: "Database", color: "bg-blue-700" }
  ];

  const principles = [
    {
      icon: Shield,
      title: "Security First",
      description: "End-to-end encryption, secure authentication, and compliance with industry standards ensure your data is always protected."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized performance with edge computing, intelligent caching, and minimal loading times for the best user experience."
    },
    {
      icon: Layers,
      title: "Scalable Architecture",
      description: "Built on modern cloud infrastructure that scales automatically with your business growth and demand."
    },
    {
      icon: Cloud,
      title: "Cloud Native",
      description: "Fully cloud-based solutions with automatic backups, disaster recovery, and 99.9% uptime guarantee."
    },
    {
      icon: Lock,
      title: "Data Privacy",
      description: "GDPR compliant with local data residency options, ensuring your business data stays secure and private."
    },
    {
      icon: Smartphone,
      title: "Mobile First",
      description: "Responsive design that works seamlessly across all devices, with dedicated mobile applications available."
    }
  ];

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
              Built on a Foundation of Trust & Technology
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              We use cutting-edge technologies to build systems that are reliable, scalable, and secure. 
              Our tech stack is carefully chosen to deliver the best performance and user experience.
            </p>
          </motion.div>
          
          {/* Technology Stack */}
          <motion.div 
            className="mb-20"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-indigo-900 text-center mb-12">
              Our Technology Stack
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {technologies.map((tech, index) => (
                <motion.div 
                  key={index}
                  className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-gray-200/50 hover:shadow-xl transition-all duration-300 text-center"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className={`w-12 h-12 ${tech.color} rounded-xl mx-auto mb-4 flex items-center justify-center`}>
                    <span className="text-white font-bold text-lg">{tech.name.charAt(0)}</span>
                  </div>
                  <h3 className="font-semibold text-indigo-900 mb-2">{tech.name}</h3>
                  <p className="text-sm text-gray-600">{tech.category}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Principles Grid */}
          <motion.div 
            className="mb-20"
            initial="hidden"
            animate="visible"
            variants={stagger}
            transition={{ delay: 0.2 }}
          >
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-indigo-900 text-center mb-12">
              Our Technical Principles
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {principles.map((principle, index) => (
                <motion.div 
                  key={index}
                  className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl border border-gray-200/50 hover:shadow-xl transition-all duration-300"
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-16 h-16 bg-amber-600/10 rounded-2xl flex items-center justify-center mb-6">
                    <principle.icon className="w-8 h-8 text-amber-600" />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-indigo-900 mb-4">
                    {principle.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {principle.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Architecture Overview */}
          <motion.div 
            className="bg-gradient-to-br from-indigo-50/30 to-amber-50/30 rounded-3xl p-12"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.4 }}
          >
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-indigo-900 mb-6">
                Modern Architecture for Modern Businesses
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our applications are built using modern microservices architecture, ensuring high availability, 
                fault tolerance, and seamless scalability as your business grows.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Layers className="w-10 h-10 text-white" />
                </div>
                <h4 className="font-serif text-xl font-semibold text-indigo-900 mb-3">Frontend Layer</h4>
                <p className="text-gray-600">
                  Modern React/Next.js applications with server-side rendering for optimal performance and SEO.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <h4 className="font-serif text-xl font-semibold text-indigo-900 mb-3">API Layer</h4>
                <p className="text-gray-600">
                  RESTful APIs and GraphQL endpoints built with Node.js, ensuring fast and reliable data exchange.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Cloud className="w-10 h-10 text-white" />
                </div>
                <h4 className="font-serif text-xl font-semibold text-indigo-900 mb-3">Data Layer</h4>
                <p className="text-gray-600">
                  Robust database solutions with automated backups, replication, and real-time synchronization.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TechnologyPage;

"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
// Static import of logo file located at project root
import logo from '../../logo.png';

const Header: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <motion.header
      className="sticky top-0 z-50 backdrop-blur-md bg-sandstone/80 border-b border-gray-200/50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={logo}
              alt="Ritam Bharat logo"
              width={40}
              height={40}
              priority
              className="rounded-md shadow-sm"
            />
            <span className="font-serif text-2xl font-bold text-indigo-900 hover:text-indigo-700 transition-colors">
              Ritam Bharat
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/philosophy" className="text-gray-700 hover:text-indigo-900 transition-colors">Philosophy</Link>
            <Link href="/products" className="text-gray-700 hover:text-indigo-900 transition-colors">Products</Link>
            <Link href="/technology" className="text-gray-700 hover:text-indigo-900 transition-colors">Technology</Link>
            <Link href="/contact" className="text-gray-700 hover:text-indigo-900 transition-colors">Contact</Link>
            <motion.button
              className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Request a Demo
            </motion.button>
          </nav>

          <button
            className="md:hidden p-2"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen(prev => !prev)}
          >
            {!open ? (
              <Menu className="w-6 h-6 text-gray-700" />
            ) : (
              <X className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-40"
        >
          <nav className="flex flex-col py-4 px-6 space-y-3">
            <Link 
              href="/philosophy" 
              onClick={() => setOpen(false)} 
              className="text-gray-800 hover:text-indigo-900 font-medium py-2 border-b border-gray-100 transition-colors"
            >
              Philosophy
            </Link>
            <Link 
              href="/products" 
              onClick={() => setOpen(false)} 
              className="text-gray-800 hover:text-indigo-900 font-medium py-2 border-b border-gray-100 transition-colors"
            >
              Products
            </Link>
            <Link 
              href="/technology" 
              onClick={() => setOpen(false)} 
              className="text-gray-800 hover:text-indigo-900 font-medium py-2 border-b border-gray-100 transition-colors"
            >
              Technology
            </Link>
            <Link 
              href="/contact" 
              onClick={() => setOpen(false)} 
              className="text-gray-800 hover:text-indigo-900 font-medium py-2 border-b border-gray-100 transition-colors"
            >
              Contact
            </Link>
            <motion.button
              onClick={() => { setOpen(false); }}
              className="mt-3 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-medium transition-colors self-start"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Request a Demo
            </motion.button>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;


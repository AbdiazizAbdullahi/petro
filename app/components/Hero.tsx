"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1516199423456-1f1e91b06f25?q=80&w=849&auto=format&fit=crop"
          alt="Petroleum Nozzle"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-slate-900/50 bg-gradient-to-t from-slate-900/80 via-slate-900/50 to-slate-900/30" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-sm font-semibold tracking-wide uppercase mb-6 backdrop-blur-sm">
            Leading Petroleum Engineering Solutions
          </span>
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-7xl mb-6">
            <span className="block mb-2">Fueling Progress with</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white pb-2">
              Reliable Solutions
            </span>
          </h1>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 max-w-2xl mx-auto text-lg text-slate-300 md:text-xl leading-relaxed"
        >
          DIATOME ACE LIMITED is your trusted partner for premium petroleum products, industrial lubricants, LPG solutions, and expert engineering services across East Africa.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="#services"
            className="flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-full text-white bg-diatome-red hover:bg-red-700 transition-all shadow-lg hover:shadow-red-600/30 transform hover:-translate-y-1"
          >
            Explore Services
          </Link>
          <Link
            href="#contact"
            className="flex items-center justify-center px-8 py-4 border border-white/20 text-base font-bold rounded-full text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all shadow-lg transform hover:-translate-y-1"
          >
            Contact Us <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;

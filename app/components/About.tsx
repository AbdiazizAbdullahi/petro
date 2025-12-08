"use client";

import { Target, Eye, Shield, Award, Users, Lightbulb, Zap } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-diatome-blue/10 rounded-2xl transform -rotate-3" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1000&auto=format&fit=crop"
                  alt="Petroleum Engineers at work"
                  width={800}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <h2 className="text-blue-600 font-semibold tracking-wide uppercase mb-3">About Us</h2>
            <h3 className="text-3xl font-extrabold text-slate-900 sm:text-4xl mb-6">
              Empowering Industries with Reliable Energy
            </h3>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Diatome Ace Limited is a dynamic and fast-growing company that supplies petroleum products and provides engineering services across the petroleum, oils, and gas industry.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We pride ourselves on professionalism, safety, and customer satisfaction, delivering end-to-end solutions from bulk fuel supply to complex station engineering works.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Bulk fuel supply",
                "Lubricants & industrial oils",
                "LPG systems",
                "Petroleum equipment supply",
                "Fuel station works",
                "Fuel system installation",
              ].map((item, index) => (
                <div key={index} className="flex items-center text-slate-700 font-medium">
                  <div className="h-2 w-2 bg-diatome-red rounded-full mr-3 shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-slate-50 rounded-2xl p-8 border border-slate-100 flex items-start gap-6"
          >
            <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-diatome-blue text-white shrink-0 shadow-lg shadow-blue-900/20">
              <Target className="h-8 w-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                To deliver safe, reliable, and efficient petroleum supply and engineering solutions that empower businesses while maintaining industry-leading standards in quality, compliance, and customer service.
              </p>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-slate-50 rounded-2xl p-8 border border-slate-100 flex items-start gap-6"
          >
            <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-diatome-red text-white shrink-0 shadow-lg shadow-red-900/20">
              <Eye className="h-8 w-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                To become one of East Africa’s leading petroleum supply and engineering companies, known for excellence, integrity, and innovative solutions.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-slate-900">Core Values</h3>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Shield, title: "Integrity", desc: "We conduct business ethically and transparently." },
            { icon: Award, title: "Quality", desc: "Premium-grade products and high standards." },
            { icon: Shield, title: "Safety", desc: "Stringent safety and environmental measures." },
            { icon: Lightbulb, title: "Innovation", desc: "Modern technologies and best practices." },
            { icon: Users, title: "Customer Focus", desc: "Solutions tailored to client needs." },
            { icon: Zap, title: "Reliability", desc: "Consistent, on-time delivery." },
            { icon: Users, title: "Teamwork", desc: "Collaboration for optimal results." },
          ].map((value, index) => (
            <motion.div 
              key={index} 
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all border border-slate-100 group"
            >
              <div className="mb-4 inline-block p-3 rounded-lg bg-blue-50 text-diatome-blue group-hover:bg-diatome-blue group-hover:text-white transition-colors">
                <value.icon className="h-6 w-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">{value.title}</h4>
              <p className="text-slate-600 text-sm leading-relaxed">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

"use client";

import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Industry Expertise",
      description: "Deep understanding of petroleum operations, safety, and compliance.",
    },
    {
      title: "Quality Guaranteed",
      description: "Premium fuels, oils, and equipment sourced from trusted suppliers.",
    },
    {
      title: "Safety First",
      description: "EPRA, NEMA & KEBS-compliant processes.",
    },
    {
      title: "Experienced Technical Team",
      description: "Qualified engineers and technicians handling installations and works.",
    },
    {
      title: "Reliable Delivery",
      description: "Efficient transportation and timely supply.",
    },
    {
      title: "End-to-End Solutions",
      description: "From supply to installation, maintenance, and technical support.",
    },
    {
      title: "Customer-Centered Approach",
      description: "We build long-term partnerships through dependable service.",
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-red-50 rounded-full blur-3xl opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl mb-4">
              Why Choose Diatome Ace?
            </h2>
            <p className="max-w-2xl mx-auto text-xl text-slate-500">
              We are committed to excellence in every drop and every project.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="flex flex-col items-start p-8 rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all border border-slate-100 hover:border-diatome-blue/20 group"
            >
              <div className="mb-6 p-3 rounded-xl bg-red-50 group-hover:bg-diatome-red transition-colors">
                <CheckCircle className="h-8 w-8 text-diatome-red group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{reason.title}</h3>
              <p className="text-slate-600 leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

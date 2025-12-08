"use client";

import { Droplet, Wrench, Settings, Truck, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      title: "Petroleum Products Supply",
      icon: Droplet,
      image: "https://images.unsplash.com/photo-1631985455894-65311148a768?q=80&w=870&auto=format&fit=crop",
      description: "We supply high-quality petroleum products to fuel stations, industries, and commercial clients.",
      items: [
        "Diesel (AGO) & Petrol (PMS)",
        "Industrial Lubricants & Oils",
        "LPG (Bulk & Cylinders)",
        "Heavy Fuel Oils & Marine Oils",
      ],
    },
    {
      title: "Petroleum Engineering",
      icon: Wrench,
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop",
      description: "Comprehensive construction and maintenance services for fuel stations and handling systems.",
      items: [
        "Tank Installation (Under/Above Ground)",
        "Fuel Pump & Dispenser Installation",
        "Piping, Welding & Civil Works",
        "Canopy Installation & Branding",
      ],
    },
    {
      title: "Equipment Supply",
      icon: Settings,
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop",
      description: "Supply and installation of certified petroleum equipment and automation systems.",
      items: [
        "Fuel Pumps & Dispensers",
        "Flow Meters & Gauges",
        "Fuel Management Systems",
        "Fire Safety Equipment",
      ],
    },
    {
      title: "Transport & Logistics",
      icon: Truck,
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=800&auto=format&fit=crop",
      description: "Safe and compliant fuel delivery across Kenya with our specialized fleet.",
      items: [
        "Safe & Compliant Delivery",
        "Scheduled & Emergency Supply",
        "Fleet Fueling Solutions",
        "Nationwide Distribution",
      ],
    },
  ];

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-blue-600 font-semibold tracking-wide uppercase mb-3">Our Expertise</h2>
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-5xl">
              Comprehensive Petroleum Solutions
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-500">
              End-to-end services tailored to meet the energy needs of modern businesses.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group border border-slate-100"
            >
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-diatome-red text-white shadow-lg">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <p className="text-slate-600 mb-6 text-lg">{service.description}</p>
                <div className="space-y-3 mb-8">
                  {service.items.map((item, idx) => (
                    <div key={idx} className="flex items-center text-slate-700 font-medium">
                      <div className="h-2 w-2 bg-diatome-blue rounded-full mr-3 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
                <Link 
                  href="#contact"
                  className="inline-flex items-center text-diatome-blue font-bold hover:text-diatome-red transition-colors group/link"
                >
                  Learn more <ArrowRight className="ml-2 h-5 w-5 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

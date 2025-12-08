import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">DIATOME ACE LIMITED</h3>
            <p className="text-slate-300 mb-4">
              Trusted supplier of petroleum oils, industrial lubricants, LPG solutions, and fuel-handling equipment.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-slate-300 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link href="#about" className="text-slate-300 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="#services" className="text-slate-300 hover:text-white transition-colors">Services</Link>
              </li>
              <li>
                <Link href="#contact" className="text-slate-300 hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-diatome-red mr-3 mt-1" />
                <span className="text-slate-300">Safi House, Eastleigh, Nairobi</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-diatome-red mr-3" />
                <span className="text-slate-300">+254 701 856 764</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-diatome-red mr-3" />
                <span className="text-slate-300">info@diatomeace.co.ke</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Diatome Ace Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

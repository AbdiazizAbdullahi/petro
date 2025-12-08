import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-400">
            Have questions or need a quote? Contact our team today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-slate-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-diatome-red mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-medium text-white">Our Location</h4>
                  <p className="text-slate-300">Safi House, Eastleigh, Nairobi</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-diatome-red mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-medium text-white">Phone Number</h4>
                  <p className="text-slate-300">+254 701 856 764</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-diatome-red mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-medium text-white">Email Address</h4>
                  <p className="text-slate-300">info@diatomeace.co.ke</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800 rounded-2xl p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md bg-slate-700 border-slate-600 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 px-4"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md bg-slate-700 border-slate-600 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 px-4"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md bg-slate-700 border-slate-600 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 px-4"
                  placeholder="How can we help you?"
                />
              </div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-diatome-red hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

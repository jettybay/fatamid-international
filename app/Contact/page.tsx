"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  X,
} from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white text-gray-900 overflow-hidden">
        {/* CONTENT */}
        <section className="pt-32 pb-16">
          <div className="max-w-6xl mx-auto px-6">
            {/* CONTACT DETAILS */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center text-center"
            >
              <h2 className="text-4xl font-bold mb-3 text-green-800">
                Get in Touch
              </h2>

              <p className="text-lg max-w-2xl pb-8 text-green-700">
                Reach out for agro-commodity enquiries, partnerships, sourcing, 
                export assistance, or any other questions.
              </p>

              <div className="space-y-8">
                <ContactItem
                  icon={<MapPin className="w-7 h-7" />}
                  title="Office Address"
                  text="No 1, Omorinde Street, Parafa, Ikorodu, Lagos State, Nigeria."
                />

                <ContactItem
                  icon={<Phone className="w-7 h-7" />}
                  title="Phone / WhatsApp"
                  text="+2348035510234"
                />

                <ContactItem
                  icon={<Mail className="w-7 h-7" />}
                  title="Email"
                  text="fatamidint@gmail.com"
                />
              </div>

              {/* SOCIAL MEDIA */}
              <div className="mt-12 flex flex-col items-center">
                <h3 className="text-lg font-semibold mb-5 text-gray-700">
                  Connect with us
                </h3>

                <div className="flex gap-6">
                  <SocialIcon
                    icon={<Facebook className="w-6 h-6" />}
                    link="#"
                  />
                  <SocialIcon
                    icon={<Instagram className="w-6 h-6" />}
                    link="#"
                  />
                  <SocialIcon
                    icon={<X className="w-6 h-6" />}
                    link="#"
                  />
                  <SocialIcon
                    icon={<Linkedin className="w-6 h-6" />}
                    link="#"
                  />
                  <SocialIcon
                    icon={<FaTiktok className="w-6 h-6" />}
                    link="#"
                  />
                </div>
              </div>
            </motion.div>

            {/* CONTACT FORM (uncomment when you're ready to add backend) */}
            {/* 
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-16 bg-gray-50 rounded-3xl p-10 shadow-sm max-w-2xl mx-auto"
            >
              <h2 className="text-2xl font-bold mb-6 text-center">Send Us a Message</h2>
              <form className="space-y-6">
                <input type="text" placeholder="Your Name" required className="w-full border border-gray-300 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-green-600" />
                <input type="email" placeholder="Email Address" required className="w-full border border-gray-300 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-green-600" />
                <textarea placeholder="Your Message" rows={6} required className="w-full border border-gray-300 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-green-600" />
                <button type="submit" className="w-full bg-green-700 hover:bg-green-800 text-white py-4 rounded-2xl font-semibold transition text-lg">
                  Send Message
                </button>
              </form>
            </motion.div>
            */}
          </div>
        </section>

      </main>
      {/* <Footer /> */}
    </>
  );
}

/* ---------- COMPONENTS ---------- */

function ContactItem({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center text-center max-w-xs"
    >
      <div className="text-green-700 mb-3">{icon}</div>
      <div>
        <h4 className="font-semibold text-lg text-gray-900">{title}</h4>
        <p className="text-gray-600 mt-1 leading-relaxed">{text}</p>
      </div>
    </motion.div>
  );
}

function SocialIcon({
  icon,
  link,
}: {
  icon: React.ReactNode;
  link: string;
}) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.15, rotate: 8 }}
      whileTap={{ scale: 0.95 }}
      className="w-12 h-12 flex items-center justify-center rounded-2xl border border-gray-300 hover:bg-green-700 hover:text-white hover:border-green-700 transition-all"
    >
      {icon}
    </motion.a>
  );
}
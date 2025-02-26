import { motion } from 'framer-motion';
import React from "react";

export default function NewsletterSection() {
  return (
    <section className="py-12 sm:py-16 bg-white text-center">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Titolo Newsletter */}
          <h3 className="text-red-600 uppercase text-xs sm:text-sm mb-2">
            Newsletter
          </h3>

          {/* Testo di descrizione */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-4 sm:mb-6 leading-tight">
            Rimani sempre aggiornato su <br className="hidden sm:block" /> notizie ed eventi
          </h2>

          {/* Pulsante Iscrizione */}
          <a
            href="#"
            className="bg-red-600 text-white py-2 sm:py-3 px-6 sm:px-8 rounded-none uppercase text-xs sm:text-sm font-semibold hover:bg-red-700 transition duration-300"
          >
            Iscriviti alla Newsletter
          </a>
        </motion.div>
      </div>
    </section>
  );
}

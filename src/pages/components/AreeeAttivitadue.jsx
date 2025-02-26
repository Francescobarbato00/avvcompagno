import { motion } from 'framer-motion';
import React from "react";

export default function AreeAttivitadue() {
  return (
    <section className="relative py-12 sm:py-16 bg-white overflow-hidden">
      {/* Testo Scorrevole in Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 z-0">
        <div className="animate-scroll">
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-serif font-bold whitespace-nowrap tracking-widest mr-12">
            I NOSTRI SERVIZI
          </h1>
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-serif font-bold whitespace-nowrap tracking-widest mr-12">
            I NOSTRI SERVIZI
          </h1>
        </div>
      </div>

      {/* Contenuto Principale */}
      <motion.div
        className="relative container mx-auto px-4 sm:px-6 z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          I NOSTRI SERVIZI
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <motion.div
            className="bg-gray-100 p-4 sm:p-6 md:p-8 relative hover:shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.0 }}
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-serif mb-4">
              Impresa: tassazione reddito
            </h3>
            <a href="#" className="text-gray-800 flex items-center hover:text-red-600">
              Scopri di più <span className="ml-2">&rsaquo;</span>
            </a>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-red-600"></div>
          </motion.div>

          <motion.div
            className="bg-gray-100 p-4 sm:p-6 md:p-8 relative hover:shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-serif mb-4">
              Impresa: operazioni straordinarie
            </h3>
            <a href="#" className="text-gray-800 flex items-center hover:text-red-600">
              Scopri di più <span className="ml-2">&rsaquo;</span>
            </a>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-red-600"></div>
          </motion.div>

          <motion.div
            className="bg-gray-100 p-4 sm:p-6 md:p-8 relative hover:shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-serif mb-4">
              Crediti di imposta
            </h3>
            <a href="#" className="text-gray-800 flex items-center hover:text-red-600">
              Scopri di più <span className="ml-2">&rsaquo;</span>
            </a>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-red-600"></div>
          </motion.div>

          <motion.div
            className="bg-gray-100 p-4 sm:p-6 md:p-8 relative hover:shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-serif mb-4">
              Crisi di impresa e tassazione
            </h3>
            <a href="#" className="text-gray-800 flex items-center hover:text-red-600">
              Scopri di più <span className="ml-2">&rsaquo;</span>
            </a>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-red-600"></div>
          </motion.div>

          <motion.div
            className="bg-gray-100 p-4 sm:p-6 md:p-8 relative hover:shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-serif mb-4">
              Persone fisiche: tassazione reddito
            </h3>
            <a href="#" className="text-gray-800 flex items-center hover:text-red-600">
              Scopri di più <span className="ml-2">&rsaquo;</span>
            </a>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-red-600"></div>
          </motion.div>
          {/* Aggiungi altre card in modo simile se necessario */}
        </div>
      </motion.div>
    </section>
  );
}

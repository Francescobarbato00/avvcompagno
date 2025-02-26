import { motion } from 'framer-motion';
import React from "react";

export default function ContactSection() {
  return (
    <section className="py-8 md:py-16">
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-4xl md:text-6xl font-serif font-light text-gray-900 mb-8 md:mb-12 text-center md:text-left"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          Contattaci per una consulenza
        </motion.h1>

        {/* Sezione con Informazioni e Form */}
        <div className="flex flex-col md:flex-row justify-between">
          {/* Colonna Sinistra - Informazioni */}
          <motion.div
            className="md:w-1/3 mb-8 md:mb-0"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-red-600 uppercase text-sm mb-2 tracking-wider">Sede</h3>
            <p className="text-base font-light text-gray-800 mb-6">
              Via Taranto, 95 LT. D - 00195 ROMA - LAZIO
            </p>

            <h3 className="text-red-600 uppercase text-sm mb-2 tracking-wider">Contatti</h3>
            <p className="text-base font-light text-gray-800 mb-4">
              Tel: <a href="tel:+0677204459" className="text-red-600 underline">+0677204459</a>
            </p>
            <p className="text-base font-light text-gray-800 mb-4">
              E-mail: <a href="mailto:avvocatodanielacompagno@gmail.com" className="text-red-600 underline">avvocatodanielacompagno@gmail.com</a>
            </p>
          </motion.div>

          {/* Colonna Destra - Form */}
          <motion.div
            className="md:w-2/3"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form className="space-y-4 md:space-y-6">
              <div>
                <label className="block text-sm text-gray-800 uppercase mb-2" htmlFor="name">
                  Nome e Cognome
                </label>
                <input
                  className="w-full px-4 py-2 border-b border-gray-300 focus:outline-none focus:border-red-600"
                  type="text"
                  id="name"
                  name="name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-gray-800 uppercase mb-2" htmlFor="email">
                  E-mail
                </label>
                <input
                  className="w-full px-4 py-2 border-b border-gray-300 focus:outline-none focus:border-red-600"
                  type="email"
                  id="email"
                  name="email"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-gray-800 uppercase mb-2" htmlFor="message">
                  Messaggio
                </label>
                <textarea
                  className="w-full px-4 py-2 border-b border-gray-300 focus:outline-none focus:border-red-600"
                  id="message"
                  name="message"
                  rows="6"
                  required
                ></textarea>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="privacy"
                  name="privacy"
                  className="mr-2"
                  required
                />
                <label htmlFor="privacy" className="text-sm text-gray-800">
                  Dichiaro di aver letto e compreso la <a href="#" className="text-red-600">Privacy Policy</a>
                </label>
              </div>

              <button
                type="submit"
                className="bg-red-600 text-white py-3 px-8 text-sm uppercase font-light hover:bg-red-700 transition-colors w-full md:w-auto"
              >
                Invia
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

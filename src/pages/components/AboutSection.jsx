import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section className="py-12 sm:py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Colonna Sinistra - Testo */}
        <div className="md:w-1/2 p-4 sm:p-6">
          <motion.h2
            className="text-red-600 uppercase mb-4 text-xs sm:text-sm"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            Chi siamo
          </motion.h2>
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-4 sm:mb-6 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          >
            A Roma da <br /> oltre 30 anni
          </motion.h1>
          <motion.p
            className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4 md:mb-6 text-justify"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          >
            Stefano Berardi, avvocato notarile, da oltre 30 anni presente a Roma,
            assiste i propri clienti in ogni ambito relativo al diritto notarile.
            È uno studio composto da professionisti indipendenti, accomunati dalla
            condivisione di valori e competenze.
          </motion.p>
          <motion.p
            className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4 md:mb-6 text-justify"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: 'easeOut' }}
          >
            Fondato nel 1990, lo studio legale di Stefano Berardi si è affermato
            come punto di riferimento per il settore notarile, con un'attenzione
            particolare alla qualità del servizio e all'efficienza operativa.
          </motion.p>
          <motion.p
            className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4 md:mb-6 text-justify"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease: 'easeOut' }}
          >
            Lo studio ha ricevuto numerosi riconoscimenti, tra cui il premio
            "Studio Legale dell'Anno 2023" per il settore notarile, nell'ambito
            della ricerca realizzata da "Il Sole24Ore".
          </motion.p>
          <motion.a
            href="#"
            className="bg-red-600 text-white text-xs sm:text-sm uppercase font-light py-2 px-4 sm:py-3 sm:px-6 rounded-none hover:bg-red-700 transition duration-300 inline-block"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5, ease: 'easeOut' }}
          >
            La nostra storia
          </motion.a>
        </div>

        {/* Colonna Destra - Immagine */}
        <div className="md:w-1/2 p-4 sm:p-6 mt-6 md:mt-0">
          <div className="relative">
            <img src="/2.jpg" alt="Chi Siamo" className="w-full h-auto object-cover" />
            <img
              src="logo2.png"
              alt="Logo"
              className="absolute bottom-0 right-0 h-16 sm:h-20 md:h-24 lg:h-32 w-auto opacity-90"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

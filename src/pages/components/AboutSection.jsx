import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Colonna Sinistra - Testo */}
        <div className="md:w-1/2 p-4 sm:p-6">
          <motion.h2
            className="text-red-600 uppercase mb-4 text-xs sm:text-sm"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            Chi siamo
          </motion.h2>
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          >
            Daniela Compagno <br /> Avvocato a Roma da oltre 25 anni
          </motion.h1>
          <motion.p
            className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 sm:mb-6 text-justify"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          >
            Daniela Compagno, avvocato di Roma, si occupa di molteplici ambiti del diritto, dalla consulenza civile e penale, alle controversie amministrative e familiari. Con un approccio attento e personalizzato, offre soluzioni su misura per ogni esigenza legale.
          </motion.p>
          <motion.p
            className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 sm:mb-6 text-justify"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.9, ease: 'easeOut' }}
          >
            Fondato nel 1998, lo studio di Daniela Compagno si è affermato nel tempo come punto di riferimento a Roma, grazie all'impegno costante e alla collaborazione con un team di professionisti esperti, che lavorano in sinergia per garantire un servizio legale di eccellenza.
          </motion.p>
          <motion.p
            className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 sm:mb-6 text-justify"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 1.2, ease: 'easeOut' }}
          >
            Lo studio ha ricevuto numerosi riconoscimenti per la qualità del servizio e l'efficacia delle soluzioni legali, consolidando una reputazione solida e affidabile nel panorama giuridico romano.
          </motion.p>
          <motion.a
            href="#"
            className="bg-red-600 text-white text-xs sm:text-sm uppercase font-light py-3 px-4 sm:px-6 rounded-none hover:bg-red-700 transition duration-300 inline-block"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 1.5, ease: 'easeOut' }}
          >
            La nostra storia
          </motion.a>
        </div>

        {/* Colonna Destra - Immagine */}
        <div className="md:w-1/2 p-4 sm:p-6 mt-8 md:mt-0">
          <div className="relative">
            <img src="/2.jpg" alt="Chi Siamo" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}

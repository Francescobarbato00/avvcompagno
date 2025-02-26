import { motion } from 'framer-motion';

export default function ProfileSection() {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.h2
          className="text-red-600 uppercase mb-2 sm:mb-4 text-xs sm:text-sm text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Profilo Studio
        </motion.h2>
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-8 sm:mb-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        >
          Una storia di eccellenza e innovazione <br /> che dura da oltre 60 anni
        </motion.h1>

        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-12">
          <motion.div
            className="md:w-1/2 text-gray-700 text-sm sm:text-base leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          >
            <p className="mb-4">
              Lo studio legale Compagno, situato nel cuore di Roma, si distingue per la sua profonda esperienza e la capacità di adattarsi alle esigenze in continua evoluzione del diritto moderno.
            </p>
            <p className="mb-4">
              Con un approccio innovativo e una solida tradizione, offriamo consulenze personalizzate in ambito civile, penale, amministrativo e commerciale, garantendo soluzioni legali efficaci e mirate.
            </p>
            <p className="mb-4">
              La nostra missione è fornire supporto strategico e operativo a privati e aziende, contribuendo a risolvere le sfide legali con competenza e professionalità.
            </p>
          </motion.div>

          <motion.div
            className="md:w-1/2 text-gray-700 text-sm sm:text-base leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.9, ease: 'easeOut' }}
          >
            <p className="mb-4">
              Il nostro team di avvocati è composto da professionisti di altissimo livello, ciascuno specializzato in un settore specifico del diritto. La sinergia tra esperienza e modernità ci permette di affrontare con successo ogni sfida.
            </p>
            <p className="mb-4">
              Puntiamo all'eccellenza attraverso l'uso di tecnologie avanzate e metodologie innovative, garantendo un'assistenza rapida e precisa per ogni cliente.
            </p>
            <p className="mb-4">
              Grazie al nostro impegno costante, lo studio legale Compagno è diventato un punto di riferimento per la comunità legale italiana, consolidando una reputazione di affidabilità e integrità.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

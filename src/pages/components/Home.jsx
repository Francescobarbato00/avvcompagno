import { motion } from 'framer-motion';

export default function Home() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/video.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay per il testo */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Contenuto testuale */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-4">
        <motion.h2
          className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light mb-4 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Professionalità e competenza
        </motion.h2>
        <motion.h3
          className="text-white text-xl sm:text-2xl md:text-3xl font-serif mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        >
          dal 1990
        </motion.h3>
        <motion.a
          href="contact"
          className="bg-red-600 text-white text-sm sm:text-lg uppercase font-light py-3 px-6 sm:px-8 rounded-none transition-all duration-300 ease-in-out transform hover:translate-y-[-5px] hover:shadow-lg hover:bg-red-700"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
        >
          Contattaci per una consulenza
        </motion.a>
      </div>
    </section>
  );
}

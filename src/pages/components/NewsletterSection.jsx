export default function NewsletterSection() {
    return (
      <section className="py-16 bg-white text-center">
        <div className="container mx-auto">
          {/* Titolo Newsletter */}
          <h3 className="text-red-600 uppercase text-sm mb-2">Newsletter</h3>
  
          {/* Testo di descrizione */}
          <h2 className="text-3xl font-serif mb-6">
            Rimani sempre aggiornato su <br /> notizie ed eventi
          </h2>
  
          {/* Pulsante Iscrizione */}
          <a
            href="#"
            className="bg-red-600 text-white py-3 px-8 rounded-none uppercase text-sm font-semibold hover:bg-red-700 transition duration-300"
          >
            Iscriviti alla Newsletter
          </a>
        </div>
      </section>
    );
  }
  
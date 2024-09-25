import Link from 'next/link';

export default function NewsSection() {
    return (
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row">
          {/* Colonna Sinistra - Fissa con effetto scroll */}
          <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0"> {/* Impila su mobile */}
            <div className="md:sticky md:top-20 flex flex-col items-start">
              <h2 className="text-2xl sm:text-3xl font-serif mb-6 sm:mb-8">Ultime notizie</h2>
              <Link href="/blog" passHref>
                <a className="bg-red-600 text-white py-2 px-6 rounded-none uppercase text-xs sm:text-sm font-semibold hover:bg-red-700 transition duration-300">
                  Vai al Blog
                </a>
              </Link>
            </div>
          </div>

          {/* Colonna Destra - Articoli */}
          <div className="md:w-1/2 space-y-8 sm:space-y-12"> {/* Impila su mobile */}
            {/* Primo articolo */}
            <div>
              <p className="text-red-600 uppercase text-xs mb-2">Articoli</p>
              <h3 className="text-xl sm:text-2xl font-serif mb-2">
                Titolo del terzo articolo qui
              </h3>
              <p className="text-sm text-gray-500 mb-4">13 Settembre 2024</p>
              <p className="text-gray-700">
                Descrizione del terzo articolo. Puoi inserire il testo in base all'articolo che vuoi pubblicare qui...
              </p>
            </div>

            {/* Secondo articolo */}
            <div>
              <p className="text-red-600 uppercase text-xs mb-2">Articoli</p>
              <h3 className="text-xl sm:text-2xl font-serif mb-2">
                Titolo del secondo articolo qui
              </h3>
              <p className="text-sm text-gray-500 mb-4">13 Settembre 2024</p>
              <p className="text-gray-700">
                Descrizione del secondo articolo. Puoi inserire il testo in base all'articolo che vuoi pubblicare qui...
              </p>
            </div>

            {/* Terzo articolo */}
            <div>
              <p className="text-red-600 uppercase text-xs mb-2">Articoli</p>
              <h3 className="text-xl sm:text-2xl font-serif mb-2">
                Titolo del primo articolo qui
              </h3>
              <p className="text-sm text-gray-500 mb-4">13 Settembre 2024</p>
              <p className="text-gray-700">
                Descrizione del primo articolo. Puoi inserire il testo in base all'articolo che vuoi pubblicare qui...
              </p>
            </div>
          </div>
        </div>
      </section>
    );
}

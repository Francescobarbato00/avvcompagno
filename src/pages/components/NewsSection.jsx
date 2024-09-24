export default function NewsSection() {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto flex">
          {/* Colonna Sinistra - Fissa con effetto scroll */}
          <div className="w-1/2 pr-8"> {/* 50% per la colonna sinistra */}
            <div className="sticky top-20 flex flex-col items-start">
              <h2 className="text-3xl font-serif mb-8">Ultime notizie</h2>
              <a
                href="#"
                className="bg-red-600 text-white py-2 px-6 rounded-none uppercase text-sm font-semibold hover:bg-red-700 transition duration-300"
              >
                Vai al Blog
              </a>
            </div>
          </div>
  
          {/* Colonna Destra - Articoli */}
          <div className="w-1/2 ml-auto space-y-12"> {/* 50% per la colonna destra */}
            {/* Primo articolo */}
            <div>
              <p className="text-red-600 uppercase text-xs">Articoli</p>
              <h3 className="text-2xl font-serif mb-2">
              Titolo del terzo articolo qui
              </h3>
              <p className="text-sm text-gray-500">13 Settembre 2024</p>
              <p className="text-gray-700">
              Descrizione del terzo articolo. Puoi inserire il testo in base all'articolo che vuoi pubblicare qui...
              </p>
            </div>
  
            {/* Secondo articolo */}
            <div>
              <p className="text-red-600 uppercase text-xs">Articoli</p>
              <h3 className="text-2xl font-serif mb-2">
              Titolo del terzo articolo qui
              </h3>
              <p className="text-sm text-gray-500">13 Settembre 2024</p>
              <p className="text-gray-700">
              Descrizione del terzo articolo. Puoi inserire il testo in base all'articolo che vuoi pubblicare qui...
              </p>
            </div>
  
            {/* Terzo articolo */}
            <div>
              <p className="text-red-600 uppercase text-xs">Articoli</p>
              <h3 className="text-2xl font-serif mb-2">
                Titolo del terzo articolo qui
              </h3>
              <p className="text-sm text-gray-500">13 Settembre 2024</p>
              <p className="text-gray-700">
                Descrizione del terzo articolo. Puoi inserire il testo in base all'articolo che vuoi pubblicare qui...
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
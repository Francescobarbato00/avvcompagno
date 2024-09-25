export default function AreeAttivitadue() {
  return (
    <section className="relative py-12 sm:py-16 bg-white overflow-hidden">
      {/* Testo Scorrevole in Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 z-0">
        <div className="animate-scroll">
          <h1 className="text-6xl sm:text-8xl lg:text-9xl font-serif font-bold whitespace-nowrap tracking-widest mr-12">
            I NOSTRI SERVIZI
          </h1>
          <h1 className="text-6xl sm:text-8xl lg:text-9xl font-serif font-bold whitespace-nowrap tracking-widest mr-12">
            I NOSTRI SERVIZI
          </h1>
        </div>
      </div>

      {/* Contenuto Principale */}
      <div className="relative container mx-auto px-4 sm:px-6 z-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-center mb-8 sm:mb-12">
          I NOSTRI SERVIZI
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="bg-gray-100 p-6 sm:p-8 relative hover:shadow-lg">
            <h3 className="text-xl sm:text-2xl font-serif mb-4">Impresa: tassazione reddito</h3>
            <a href="#" className="text-gray-800 flex items-center hover:text-red-600">
              Scopri di più <span className="ml-2">&rsaquo;</span>
            </a>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-red-600"></div>
          </div>
          <div className="bg-gray-100 p-6 sm:p-8 relative hover:shadow-lg">
            <h3 className="text-xl sm:text-2xl font-serif mb-4">Impresa: operazioni straordinarie</h3>
            <a href="#" className="text-gray-800 flex items-center hover:text-red-600">
              Scopri di più <span className="ml-2">&rsaquo;</span>
            </a>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-red-600"></div>
          </div>
          <div className="bg-gray-100 p-6 sm:p-8 relative hover:shadow-lg">
            <h3 className="text-xl sm:text-2xl font-serif mb-4">Crediti di imposta</h3>
            <a href="#" className="text-gray-800 flex items-center hover:text-red-600">
              Scopri di più <span className="ml-2">&rsaquo;</span>
            </a>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-red-600"></div>
          </div>
          <div className="bg-gray-100 p-6 sm:p-8 relative hover:shadow-lg">
            <h3 className="text-xl sm:text-2xl font-serif mb-4">Crisi di impresa e tassazione</h3>
            <a href="#" className="text-gray-800 flex items-center hover:text-red-600">
              Scopri di più <span className="ml-2">&rsaquo;</span>
            </a>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-red-600"></div>
          </div>
          <div className="bg-gray-100 p-6 sm:p-8 relative hover:shadow-lg">
            <h3 className="text-xl sm:text-2xl font-serif mb-4">Tassazione IVA</h3>
            <a href="#" className="text-gray-800 flex items-center hover:text-red-600">
              Scopri di più <span className="ml-2">&rsaquo;</span>
            </a>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-red-600"></div>
          </div>
          <div className="bg-gray-100 p-6 sm:p-8 relative hover:shadow-lg">
            <h3 className="text-xl sm:text-2xl font-serif mb-4">Persone fisiche: tassazione reddito</h3>
            <a href="#" className="text-gray-800 flex items-center hover:text-red-600">
              Scopri di più <span className="ml-2">&rsaquo;</span>
            </a>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-red-600"></div>
          </div>
          {/* Aggiungi altre card in modo simile */}
        </div>
      </div>
    </section>
  );
}

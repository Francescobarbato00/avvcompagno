export default function TeamSection() {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between">
        {/* Colonna Sinistra - Testo Scrollabile con effetto sticky */}
        <div className="lg:w-1/3 mb-8 lg:mb-0 lg:pr-8 sticky top-4 self-start">
          <h2 className="text-red-600 uppercase text-sm mb-2">I Professionisti</h2>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-6">
            Il nostro team
          </h1>
          <p className="text-base text-gray-700 leading-relaxed mb-4">
            I professionisti e i collaboratori aderiscono ai principi e ai valori del Codice Etico, condividendo le procedure di lavoro che sono costantemente aggiornate per il raggiungimento di uno standard sempre più elevato.
          </p>
          <p className="text-base text-gray-700 leading-relaxed mb-4">
            La competenza e l'impegno dei nostri professionisti sono orientati verso la realizzazione di risultati concreti per i nostri clienti, offrendo soluzioni innovative e personalizzate.
          </p>
        </div>

        {/* Colonna Destra - Cards dei professionisti */}
        <div className="lg:w-2/3 flex flex-row justify-end">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="text-center">
              <div className="group">
                <img
                  src="/avv.jpg"
                  alt="Avv. Stefano Berardi"
                  className="w-full sm:w-[267px] h-[350px] object-cover mb-4 grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                />
              </div>
              <h3 className="text-lg font-light text-gray-600 mb-2">Specialista in diritto tributario</h3>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Avv. Stefano Berardi</h2>
              <a href="#" className="text-gray-600 text-sm hover:text-red-600">→</a>
            </div>

            {/* Card 2 */}
            <div className="text-center">
              <div className="group">
                <img
                  src="/avv.jpg"
                  alt="Avv. Stefano Berardi"
                  className="w-full sm:w-[267px] h-[350px] object-cover mb-4 grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                />
              </div>
              <h3 className="text-lg font-light text-gray-600 mb-2">Tributarista</h3>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Avv. Stefano Berardi</h2>
              <a href="#" className="text-gray-600 text-sm hover:text-red-600">→</a>
            </div>

            {/* Card 3 */}
            <div className="text-center">
              <div className="group">
                <img
                  src="/avv.jpg"
                  alt="Avv. Stefano Berardi"
                  className="w-full sm:w-[267px] h-[350px] object-cover mb-4 grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                />
              </div>
              <h3 className="text-lg font-light text-gray-600 mb-2">Specialista in diritto commerciale</h3>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Avv. Stefano Berardi</h2>
              <a href="#" className="text-gray-600 text-sm hover:text-red-600">→</a>
            </div>

            {/* Card 4 */}
            <div className="text-center">
              <div className="group">
                <img
                  src="/avv.jpg"
                  alt="Avv. Stefano Berardi"
                  className="w-full sm:w-[267px] h-[350px] object-cover mb-4 grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                />
              </div>
              <h3 className="text-lg font-light text-gray-600 mb-2">Specialista in diritto societario</h3>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Avv. Stefano Berardi</h2>
              <a href="#" className="text-gray-600 text-sm hover:text-red-600">→</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

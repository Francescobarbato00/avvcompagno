export default function StatsSection() {
  return (
    <section className="py-8 sm:py-16 bg-white text-center">
      {/* Testo introduttivo */}
      <div className="container mx-auto px-4 sm:px-6 mb-8 sm:mb-12">
        <h2 className="text-xl sm:text-2xl font-serif font-light leading-relaxed mb-4 sm:mb-6">
          Negli ultimi dieci anni Compagno Daniela <br className="hidden sm:inline" />
          avvocato ha patrocinato molteplici <br className="hidden sm:inline" />
          ed importanti giudizi
        </h2>
      </div>

      {/* Colonne con i numeri */}
      <div className="container mx-auto flex flex-col items-center space-y-8 sm:space-y-0 sm:flex-row sm:justify-center sm:space-x-12">
        <div>
          <h3 className="text-red-600 text-base sm:text-lg uppercase">oltre</h3>
          <h1 className="text-4xl sm:text-5xl text-red-600 font-bold mb-2">500</h1>
          <p className="text-gray-600 text-sm sm:text-base">
            Dinanzi alla Corte di Cassazione
          </p>
        </div>

        {/* Aggiungi altre colonne con numeri qui, se necessario */}
      </div>
    </section>
  );
}

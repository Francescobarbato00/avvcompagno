export default function ProfileSection() {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-red-600 uppercase mb-2 sm:mb-4 text-xs sm:text-sm text-center">
          Profilo Studio
        </h2>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-8 sm:mb-12 text-center">
          Una lunga tradizione <br /> di oltre 60 anni
        </h1>

        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-12">
          <div className="md:w-1/2 text-gray-700 text-sm sm:text-base leading-relaxed">
            <p className="mb-4">
              Lo studio legale Berardi Stefano, avvocato notarile di Roma, è stato fondato con l'obiettivo di garantire un'assistenza
              legale specializzata nelle materie notarili e civilistiche. Da oltre 60 anni, lo studio fornisce supporto professionale ad
              imprese e privati, con un'attenzione particolare all'evoluzione legislativa.
            </p>
            <p className="mb-4">
              La tradizione si rinnova con l'ingresso di giovani avvocati che, unendo esperienza e modernità, contribuiscono a far crescere
              lo studio nel panorama legale italiano. Lo studio è sinonimo di professionalità, competenza e continua ricerca di soluzioni
              innovative per soddisfare al meglio le esigenze dei clienti.
            </p>
            <p className="mb-4">
              La nostra dedizione e il nostro impegno ci hanno consentito di raggiungere traguardi importanti e di rappresentare con successo
              numerosi clienti nelle varie corti italiane, offrendo assistenza personalizzata in ogni fase del contenzioso.
            </p>
          </div>

          <div className="md:w-1/2 text-gray-700 text-sm sm:text-base leading-relaxed">
            <p className="mb-4">
              Il team di avvocati è composto da professionisti altamente qualificati che si impegnano a fornire consulenze su misura per ogni cliente.
              Ogni componente dello studio apporta le proprie competenze e conoscenze specifiche, garantendo una copertura completa
              su vari ambiti del diritto notarile e civile.
            </p>
            <p className="mb-4">
              L'efficienza e l'innovazione sono i pilastri che guidano la nostra attività, assicurando che ogni cliente riceva un servizio
              tempestivo e preciso, studiato su misura per le proprie necessità. Collaboriamo strettamente con esperti del settore
              per garantire risultati ottimali.
            </p>
            <p className="mb-4">
              Grazie a una struttura organizzativa solida e all'uso di tecnologie avanzate, lo studio legale Berardi Stefano continua a essere un
              punto di riferimento nel panorama legale, sostenendo con successo privati e aziende nelle loro sfide giuridiche quotidiane.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ValoriSection() {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-serif font-bold text-gray-900 leading-tight">
              I valori del
            </h1>
            <h1 className="text-5xl font-serif font-bold text-gray-900 leading-tight">
              nostro studio
            </h1>
          </div>
  
          {/* Two Column Text */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
  <div className="text-left text-base text-gray-700 leading-relaxed">
    <p className="mb-4">
      L'Avvocato Stefano Berardi, avvocato notarile in attività dal 1990 a Roma, è da sempre impegnato a garantire
      professionalità e trasparenza nella sua pratica. Laureato con lode presso l'Università di Roma, ha conseguito 
      diverse specializzazioni nel diritto notarile e commerciale. La sua lunga esperienza ha portato al consolidamento 
      di una clientela solida e diversificata, che include privati, aziende e istituzioni pubbliche.
    </p>
    <p className="mb-4">
      Lo studio Berardi è noto per il suo impegno nel fornire soluzioni personalizzate e innovative, mantenendo alti standard 
      di etica professionale. Stefano Berardi ha adottato pratiche digitali avanzate per snellire le procedure notarili, riducendo 
      significativamente l'uso di carta attraverso strumenti di archiviazione informatica e firma elettronica.
    </p>
    <p>
      L'attenzione ai dettagli e la costante ricerca della perfezione sono parte integrante del suo metodo di lavoro. Lo studio 
      segue con dedizione tutte le normative aggiornate per garantire ai clienti servizi di alto livello, dall'autenticazione 
      di documenti legali alle consulenze complesse nel campo del diritto commerciale.
    </p>
  </div>

  <div className="text-left text-base text-gray-700 leading-relaxed">
    <p className="mb-4">
      Stefano Berardi è anche particolarmente attento alle questioni sociali e ambientali. Il suo studio è uno dei primi a Roma 
      ad adottare pratiche sostenibili, con l'obiettivo di minimizzare l'impatto ambientale e favorire una cultura professionale 
      eco-friendly. Questo impegno si traduce in politiche aziendali che promuovono l'uso di tecnologie a basso consumo energetico 
      e l'abolizione della plastica monouso.
    </p>
    <p className="mb-4">
      In ambito sociale, l'Avvocato Berardi è attivamente coinvolto in attività di volontariato, offrendo assistenza legale gratuita 
      alle comunità meno abbienti. Inoltre, collabora con diverse associazioni non-profit per fornire supporto giuridico a chi ne ha 
      più bisogno, con un particolare focus sulla tutela dei diritti civili e delle pari opportunità.
    </p>
    <p>
      Il team dello studio Berardi condivide questi valori e lavora in sinergia per garantire la massima soddisfazione del cliente. 
      Ogni pratica è gestita con la massima cura e precisione, riflettendo la filosofia dello studio: trasparenza, competenza, 
      e dedizione verso il prossimo.
    </p>
  </div>
</div>

  
          {/* Horizontal Line with Centered Large Logo */}
          <div className="flex justify-between items-center mt-8">
            <hr className="border-t border-gray-300 w-1/3" />
            <div className="w-64"> {/* Increased the size of the logo container */}
              <img src="/logo.png" alt="DFN Logo" className="w-full h-auto" />
            </div>
            <hr className="border-t border-gray-300 w-1/3" />
          </div>
        </div>
      </section>
    );
}

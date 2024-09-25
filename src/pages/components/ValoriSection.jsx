import React from "react";

export default function ValoriSection() {
  return (
    <section style={{ padding: "2rem 1rem", backgroundColor: "white" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}>
        {/* Titolo */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h1 style={{ fontSize: "2.5rem", fontFamily: "serif", fontWeight: "bold", color: "#1f2937", lineHeight: "1.2" }}>
            I valori del
          </h1>
          <h1 style={{ fontSize: "2.5rem", fontFamily: "serif", fontWeight: "bold", color: "#1f2937", lineHeight: "1.2" }}>
            nostro studio
          </h1>
        </div>

        {/* Testo a due colonne */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "2rem",
            marginBottom: "3rem",
            textAlign: "left",
            fontSize: "1rem",
            color: "#4b5563",
            lineHeight: "1.75",
          }}
        >
          <div>
            <p style={{ marginBottom: "1rem" }}>
              L'Avvocato Stefano Berardi, avvocato notarile in attività dal 1990 a Roma, è da sempre impegnato a garantire
              professionalità e trasparenza nella sua pratica. Laureato con lode presso l'Università di Roma, ha conseguito diverse
              specializzazioni nel diritto notarile e commerciale. La sua lunga esperienza ha portato al consolidamento di una
              clientela solida e diversificata, che include privati, aziende e istituzioni pubbliche.
            </p>
            <p style={{ marginBottom: "1rem" }}>
              Lo studio Berardi è noto per il suo impegno nel fornire soluzioni personalizzate e innovative, mantenendo alti standard
              di etica professionale. Stefano Berardi ha adottato pratiche digitali avanzate per snellire le procedure notarili,
              riducendo significativamente l'uso di carta attraverso strumenti di archiviazione informatica e firma elettronica.
            </p>
            <p>
              L'attenzione ai dettagli e la costante ricerca della perfezione sono parte integrante del suo metodo di lavoro. Lo studio
              segue con dedizione tutte le normative aggiornate per garantire ai clienti servizi di alto livello, dall'autenticazione di
              documenti legali alle consulenze complesse nel campo del diritto commerciale.
            </p>
          </div>

          <div>
            <p style={{ marginBottom: "1rem" }}>
              Stefano Berardi è anche particolarmente attento alle questioni sociali e ambientali. Il suo studio è uno dei primi a Roma
              ad adottare pratiche sostenibili, con l'obiettivo di minimizzare l'impatto ambientale e favorire una cultura
              professionale eco-friendly. Questo impegno si traduce in politiche aziendali che promuovono l'uso di tecnologie a basso
              consumo energetico e l'abolizione della plastica monouso.
            </p>
            <p style={{ marginBottom: "1rem" }}>
              In ambito sociale, l'Avvocato Berardi è attivamente coinvolto in attività di volontariato, offrendo assistenza legale
              gratuita alle comunità meno abbienti. Inoltre, collabora con diverse associazioni non-profit per fornire supporto
              giuridico a chi ne ha più bisogno, con un particolare focus sulla tutela dei diritti civili e delle pari opportunità.
            </p>
            <p>
              Il team dello studio Berardi condivide questi valori e lavora in sinergia per garantire la massima soddisfazione del
              cliente. Ogni pratica è gestita con la massima cura e precisione, riflettendo la filosofia dello studio: trasparenza,
              competenza, e dedizione verso il prossimo.
            </p>
          </div>
        </div>

        {/* Linea orizzontale con logo centrato */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          <hr style={{ width: "100%", borderTop: "1px solid #d1d5db", marginBottom: "1rem" }} />
          <div style={{ width: "160px", margin: "1rem 0" }}>
            <img src="/logo.png" alt="DFN Logo" style={{ width: "100%", height: "auto" }} />
          </div>
          <hr style={{ width: "100%", borderTop: "1px solid #d1d5db", marginTop: "1rem" }} />
        </div>
      </div>
    </section>
  );
}

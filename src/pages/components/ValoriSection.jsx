import { motion } from 'framer-motion';
import React from "react";

export default function ValoriSection() {
  return (
    <section style={{ padding: "2rem 1rem", backgroundColor: "white" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}>
        {/* Titolo */}
        <motion.div
          style={{ textAlign: "center", marginBottom: "3rem" }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h1
            style={{
              fontSize: "2.5rem",
              fontFamily: "serif",
              fontWeight: "bold",
              color: "#1f2937",
              lineHeight: "1.2",
            }}
          >
            I valori del
          </h1>
          <h1
            style={{
              fontSize: "2.5rem",
              fontFamily: "serif",
              fontWeight: "bold",
              color: "#1f2937",
              lineHeight: "1.2",
            }}
          >
            nostro studio
          </h1>
        </motion.div>

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
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p style={{ marginBottom: "1rem" }}>
              Lo studio di Daniela Compagno, avvocato di Roma, si fonda sulla trasparenza, l'integrità e l'innovazione. Daniela guida il suo team con passione, offrendo consulenze legali personalizzate e soluzioni efficaci per ogni esigenza.
            </p>
            <p style={{ marginBottom: "1rem" }}>
              La nostra esperienza consolidata e il costante impegno verso l'eccellenza ci permettono di affrontare anche le sfide legali più complesse, garantendo risultati concreti e duraturi.
            </p>
            <p>
              Crediamo fermamente in un approccio etico e responsabile, in cui la collaborazione e la ricerca di soluzioni innovative sono alla base di ogni intervento.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p style={{ marginBottom: "1rem" }}>
              Il nostro impegno sociale si riflette nella promozione di pratiche sostenibili e nel supporto attivo alle comunità locali, contribuendo allo sviluppo di una cultura giuridica responsabile.
            </p>
            <p style={{ marginBottom: "1rem" }}>
              Investiamo costantemente in tecnologia e formazione, per garantire un servizio legale all'avanguardia, sempre in linea con le novità legislative.
            </p>
            <p>
              Ogni membro del nostro team lavora con dedizione e professionalità, creando un ambiente dinamico dove il cliente è sempre al centro.
            </p>
          </motion.div>
        </div>

        {/* Linea orizzontale con logo centrato */}
        <motion.div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "2rem",
          }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <hr style={{ width: "100%", borderTop: "1px solid #d1d5db", marginBottom: "1rem" }} />
          <div style={{ width: "160px", margin: "1rem 0" }}>
            <img src="/logo.png" alt="DFN Logo" style={{ width: "100%", height: "auto" }} />
          </div>
          <hr style={{ width: "100%", borderTop: "1px solid #d1d5db", marginTop: "1rem" }} />
        </motion.div>
      </div>
    </section>
  );
}

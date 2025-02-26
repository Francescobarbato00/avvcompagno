import React from "react";
import { motion } from "framer-motion";

// Articoli di esempio
const articles = [
  {
    title: "Novità giurisprudenziali in tema di Rottamazione",
    description:
      "La Cassazione ha fatto marcia indietro riguardo alla rottamazione quater. Con l'ordinanza 24479, pubblicata giovedì...",
    date: "13 Settembre 2024",
  },
  {
    title: "Composizione della crisi con falcidia anche per l’Iva",
    description:
      "Il recente aggiornamento normativo sulla composizione negoziata della crisi d’impresa, introdotto dal terzo decreto correttivo...",
    date: "13 Settembre 2024",
  },
  {
    title: "Ammissione al concordato preventivo",
    description:
      "Le principali novità sono: 1. per accedere al concordato, è necessario non avere debiti tributari...",
    date: "13 Settembre 2024",
  },
  {
    title: "Aggiornamento fiscale 2024",
    description:
      "Le nuove direttive fiscali previste per il 2024 introducono semplificazioni per le imprese in difficoltà.",
    date: "12 Settembre 2024",
  },
  {
    title: "Nuove norme sul lavoro autonomo",
    description:
      "Le nuove normative riguardano la gestione del lavoro autonomo e la flessibilità del mercato del lavoro.",
    date: "10 Settembre 2024",
  },
  {
    title: "Revisione della normativa ambientale",
    description:
      "Una revisione della normativa ambientale è stata annunciata per tutelare il territorio e ridurre le emissioni.",
    date: "8 Settembre 2024",
  },
  {
    title: "Sgravi fiscali per le imprese green",
    description:
      "Le imprese che adottano pratiche green potranno beneficiare di sgravi fiscali fino al 2026.",
    date: "7 Settembre 2024",
  },
  {
    title: "Riforma del sistema pensionistico",
    description:
      "Il nuovo piano pensionistico mira a garantire maggiore flessibilità nell'accesso alla pensione.",
    date: "6 Settembre 2024",
  },
  {
    title: "Nuove agevolazioni per startup",
    description:
      "Le startup innovative potranno accedere a nuovi fondi e agevolazioni fiscali nel 2024.",
    date: "5 Settembre 2024",
  },
];

const ArticleSection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          Ultime Notizie
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <span className="text-sm font-bold text-red-600 uppercase">
                Articoli
              </span>
              <h3 className="text-xl font-semibold mt-2 mb-4">
                {article.title}
              </h3>
              <p className="text-gray-700 text-sm mb-4">
                {article.description}
              </p>
              <p className="text-gray-500 text-xs">{article.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticleSection;

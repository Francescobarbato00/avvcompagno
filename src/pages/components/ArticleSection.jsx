import React from "react";

// Creiamo 12 articoli per 4 righe
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
  // Aggiungiamo articoli aggiuntivi per riempire 4 righe
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
  {
    title: "Modifiche alle normative sul commercio estero",
    description:
      "Le nuove regolamentazioni agevolano l'import-export con riduzioni dei dazi doganali.",
    date: "4 Settembre 2024",
  },
  {
    title: "Nuovi incentivi per la digitalizzazione",
    description:
      "L'iniziativa governativa per la digitalizzazione delle imprese prevede contributi a fondo perduto.",
    date: "3 Settembre 2024",
  },
  {
    title: "Aggiornamenti sul codice del lavoro",
    description:
      "Le modifiche al codice del lavoro prevedono nuove tutele per i lavoratori in smart working.",
    date: "2 Settembre 2024",
  },
];

const ArticleSection = () => {
  return (
    <div style={styles.gridContainer}>
      {articles.map((article, index) => (
        <div key={index} style={styles.card}>
          <span style={styles.articleType}>Articoli</span>
          <h3 style={styles.title}>{article.title}</h3>
          <p style={styles.description}>{article.description}</p>
          <p style={styles.date}>{article.date}</p>
        </div>
      ))}
    </div>
  );
};

const styles = {
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)', // Tre articoli per fila
    gridGap: '20px', // Spaziatura tra le card
    padding: '40px',
  },
  card: {
    backgroundColor: '#fff',
    padding: '20px',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    borderRadius: '0px', // Bordi quadrati
    border: '1px solid #e6e6e6',
    textAlign: 'left',
    transition: 'box-shadow 0.3s ease',
  },
  articleType: {
    color: '#D9534F',
    fontSize: '14px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginBottom: '10px',
  },
  title: {
    fontSize: '22px',
    margin: '10px 0',
    fontWeight: '600',
    lineHeight: '1.4',
  },
  description: {
    fontSize: '16px',
    margin: '10px 0',
    color: '#333',
    lineHeight: '1.6',
  },
  date: {
    fontSize: '14px',
    color: '#888',
    marginTop: '10px',
  },
};

export default ArticleSection;

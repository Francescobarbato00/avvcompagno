export default function StatsSection() {
    return (
      <section className="py-16 bg-white text-center">
        {/* Testo introduttivo */}
        <div className="container mx-auto mb-12">
          <h2 className="text-2xl font-serif font-light leading-relaxed mb-4">
            Negli ultimi dieci anni Berardi Stefano <br />
            avvocati tributaristi ha patrocinato molteplici <br />
            ed importanti giudizi
          </h2>
        </div>
  
        {/* Colonne con i numeri */}
        <div className="container mx-auto flex justify-center space-x-12">
          <div>
            <h3 className="text-red-600 text-lg uppercase">oltre</h3>
            <h1 className="text-5xl text-red-600 font-bold mb-2">500</h1>
            <p className="text-gray-600 text-sm">
              Dinanzi alla Corte di Cassazione
            </p>
          </div>
  
         
        </div>
      </section>
    );
  }
  
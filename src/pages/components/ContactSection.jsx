export default function ContactSection() {
  return (
    <section className="py-8 md:py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-serif font-light text-gray-900 mb-8 md:mb-12 text-center md:text-left">
          Contattaci per una consulenza
        </h1>

        {/* Sezione con Informazioni e Form */}
        <div className="flex flex-col md:flex-row justify-between">
          {/* Colonna Sinistra - Informazioni */}
          <div className="md:w-1/3 mb-8 md:mb-0">
            <h3 className="text-red-600 uppercase text-sm mb-2 tracking-wider">Sede</h3>
            <p className="text-base font-light text-gray-800 mb-6">
              Via Roma, 16, Roma
            </p>

            <h3 className="text-red-600 uppercase text-sm mb-2 tracking-wider">Contatti</h3>
            <p className="text-base font-light text-gray-800 mb-4">
              Tel: <a href="tel:+39xxxxxxxxxx" className="text-red-600 underline">+39 xxx xxx xxxx</a>
            </p>
            <p className="text-base font-light text-gray-800 mb-4">
              E-mail: <a href="mailto:info@stefanoberardi.com" className="text-red-600 underline">info@stefanoberardi.com</a>
            </p>
          </div>

          {/* Colonna Destra - Form */}
          <div className="md:w-2/3">
            <form className="space-y-4 md:space-y-6">
              <div>
                <label className="block text-sm text-gray-800 uppercase mb-2" htmlFor="name">Nome e Cognome</label>
                <input
                  className="w-full px-4 py-2 border-b border-gray-300 focus:outline-none focus:border-red-600"
                  type="text"
                  id="name"
                  name="name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-gray-800 uppercase mb-2" htmlFor="email">E-mail</label>
                <input
                  className="w-full px-4 py-2 border-b border-gray-300 focus:outline-none focus:border-red-600"
                  type="email"
                  id="email"
                  name="email"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-gray-800 uppercase mb-2" htmlFor="message">Messaggio</label>
                <textarea
                  className="w-full px-4 py-2 border-b border-gray-300 focus:outline-none focus:border-red-600"
                  id="message"
                  name="message"
                  rows="6"
                  required
                ></textarea>
              </div>

              <div className="flex items-center">
                <input type="checkbox" id="privacy" name="privacy" className="mr-2" required />
                <label htmlFor="privacy" className="text-sm text-gray-800">
                  Dichiaro di aver letto e compreso la <a href="#" className="text-red-600">Privacy Policy</a>
                </label>
              </div>

              <button
                type="submit"
                className="bg-red-600 text-white py-3 px-8 text-sm uppercase font-light hover:bg-red-700 transition-colors w-full md:w-auto"
              >
                Invia
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

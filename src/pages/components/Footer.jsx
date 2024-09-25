export default function Footer() {
  return (
    <footer className="bg-white py-6">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Linea di separazione */}
        <div className="border-t border-red-600 mb-4"></div>

        {/* Contenuto del footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600 space-y-4 sm:space-y-0">
          {/* Informazioni studio legale */}
          <div className="text-center sm:text-left">
            <p>Studio Avvocato Stefano Berardi – Studio legale notarile</p>
            <p>Sede: Via Roma, 16</p>
          </div>

          {/* Link Privacy e Credits */}
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-center sm:text-left">
            <a href="#" className="hover:underline">
              Privacy Policy e Cookie Policy
            </a>
            <a href="#" className="hover:underline">
              Crediti riservati allo studio legale
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

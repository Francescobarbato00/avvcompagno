export default function Footer() {
    return (
      <footer className="bg-white py-6">
        <div className="container mx-auto">
          {/* Linea di separazione */}
          <div className="border-t border-red-600 mb-4"></div>
  
          {/* Contenuto del footer */}
          <div className="flex justify-between items-center text-sm text-gray-600">
            {/* Informazioni studio legale */}
            <div>
              <p>Studio Avvocato Stefano Berardi – Studio legale notarile</p>
              <p>Sede: Via Roma, 16</p>
            </div>
  
            {/* Link Privacy e Credits */}
            <div className="flex space-x-6">
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
  
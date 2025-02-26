export default function TeamSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Logo al centro */}
        <div className="text-center mb-12">
          <img src="/logo.png" alt="DFN Logo" className="mx-auto h-20 w-auto" />
          <div className="border-t border-gray-300 w-1/3 mx-auto mt-4"></div>
        </div>
  
        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <img src="/1.jpg" alt="Avv. Lorena Di Fiore" className="mx-auto rounded-lg shadow-lg" />
            <h3 className="text-xl font-serif mt-6">Avv. Daniela Compagno</h3>
            <p className="text-gray-600 text-sm">Specialista in diritto tributario</p>
          </div>
  
          
        </div>
      </div>
    </section>
  );
}

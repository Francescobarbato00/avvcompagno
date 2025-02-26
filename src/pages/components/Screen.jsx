export default function Banner() {
  return (
    <section
      className="relative w-full h-64 md:h-96 bg-cover bg-center"
      style={{ backgroundImage: "url('/foto.jpg')" }}
    >
      {/* Eventuali contenuti del banner */}
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
      </div>
    </section>
  );
}

export default function Hero({ setShowCrops, setShowTips }) {
  return (
    <section
      className="relative w-full max-w-6xl h-[420px] rounded-2xl overflow-hidden flex items-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1557844352-761f2565b576?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 via-green-800/60 to-green-700/30"></div>

      <div className="relative z-10 px-10 text-white max-w-xl">
        <span className="inline-block mb-4 px-4 py-1 text-sm rounded-full bg-green-500/20 border border-green-300">
          🌱 Agricultura sostenible
        </span>

        <h1 className="text-5xl font-extrabold leading-tight mb-4">
          Siembra <span className="text-green-300">natural</span>, <br />
          tu <span className="text-green-200">vida</span>
        </h1>

        <p className="text-gray-200 mb-8">
          EcoHuerta brinda conocimientos sobre cultivos y prácticas sostenibles
          que te permiten producir alimentos saludables desde casa
        </p>

        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => {
              setShowCrops(true);
              setShowTips(false);
            }}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition"
          >
            Explorar cultivos
          </button>

          <button
            onClick={() => {
              setShowTips(true);
              setShowCrops(false);
            }}
            className="px-6 py-3 rounded-xl font-semibold border border-white/60 hover:bg-white/10 transition"
          >
            Aprender más
          </button>
        </div>
      </div>
    </section>
  );
}

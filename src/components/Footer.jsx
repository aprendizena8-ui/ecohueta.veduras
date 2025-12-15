export default function Footer() {
  return (
    <footer className="bg-green-900 text-green-100 mt-12">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-2">EcoHuerta 🌱</h3>
          <p className="text-sm leading-relaxed text-green-200">
            EcoHuerta es un espacio digital dedicado a impulsar la agricultura
            sostenible y el respeto por el entorno, ofreciendo contenido
            sencillo y útil para cualquier persona interesada.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Contacto</h4>
          <ul className="text-sm space-y-2 text-green-200">
            <li>📍 Dirección: Zona rural - Cultivos saludables</li>
            <li>📧 Correo: contacto@ecohuerta.com</li>
            <li>📞 Teléfono: +57 345 678 910</li>
            <li>⏰ Horario: Lunes a Viernes, 7:00 a.m - 6:00 p.m</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-green-800 text-center text-xs py-4 text-green-300">
        © {new Date().getFullYear()} EcoHuerta. Todos los derechos estan reservados
        por Andres Santiago Bernal
      </div>
    </footer>
  );
}

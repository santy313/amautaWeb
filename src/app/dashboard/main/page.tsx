
export default function MainPage() {
  return (
    <main className="min-h-screen bg-primario from-white to-gray-50 text-gray-800">
      {/* HERO */}
      <section className="text-center py-20 px-6">
        <h1 className="text-5xl font-extrabold tracking-tight text-secundario">
          Amauta Asesoría Integral
        </h1>
        <p className="mt-4 text-lg text-neutro max-w-2xl mx-auto">
          Soluciones profesionales en <span className="font-semibold text-secundario">Extranjería, Seguros, Laboral, Empresas y Jurídico.</span>
        </p>
        <div className="mt-8">
          <a
            href="#contacto"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-all shadow-md"
          >
            Contáctanos
          </a>
        </div>
      </section>
      <hr />
      {/* SERVICIOS */}
      <section className="py-16  px-6">
        <h2 className="text-3xl font-bold text-center text-secundario mb-12">
          Nuestros Servicios
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {[
            {
              title: "Extranjería",
              desc: "Gestiones de residencia, nacionalidad y permisos de trabajo para extranjeros.",
              icon: "🌍",
            },
            {
              title: "Seguros",
              desc: "Protege tu futuro con seguros adaptados a tus necesidades personales y empresariales.",
              icon: "🛡️",
            },
            {
              title: "Laboral",
              desc: "Asesoramiento en contratos, nóminas y relaciones laborales para empleados y empresas.",
              icon: "💼",
            },
            {
              title: "Empresas",
              desc: "Constitución, fiscalidad y gestión integral de empresas, pymes y autónomos.",
              icon: "🏢",
            },
            {
              title: "Jurídico",
              desc: "Defensa y asesoramiento legal en materia civil, penal y administrativa.",
              icon: "⚖️",
            },
            {
              title: "Fiscal y Contable",
              desc: "Gestión tributaria y contabilidad profesional para tu tranquilidad financiera.",
              icon: "📊",
            },
          ].map((s, i) => (
            <div
              key={i}
              className="p-6 border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all bg-gray-50"
            >
              <div className="text-4xl mb-3">{s.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900">{s.title}</h3>
              <p className="text-gray-600 mt-2">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <hr />
      {/* CONTACTO */}
      <section
        id="contacto"
        className="py-20 text-white text-center px-6"
      >
        <h2 className="text-3xl text-secundario font-bold mb-6">¿Necesitas ayuda?</h2>
        <p className="max-w-2xl mx-auto mb-8 text-blue-100">
          Nuestro equipo está listo para asesorarte en cualquier trámite o consulta.
          Agenda una cita o escríbenos directamente.
        </p>
        <a
          href="mailto:contacto@amautaasesoria.com"
          className="inline-block px-6 py-3 bg-white text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-all"
        >
          Enviar correo
        </a>
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-center text-gray-500 text-sm bg-gray-100 border-t">
        © {new Date().getFullYear()} Amauta Asesoría Integral. Todos los derechos reservados.
      </footer>
    </main>
  );
}

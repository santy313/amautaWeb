"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function MainPage() {
  const servicios = [
    { title: "Extranjería", desc: "Gestiones de residencia, nacionalidad y permisos de trabajo.", icon: "🌍" },
    { title: "Seguros", desc: "Protege tu futuro con seguros adaptados a tus necesidades.", icon: "🛡️" },
    { title: "Laboral", desc: "Asesoramiento en contratos y relaciones laborales.", icon: "💼" },
    { title: "Empresas", desc: "Gestión integral para pymes y autónomos.", icon: "🏢" },
    { title: "Jurídico", desc: "Asesoría legal en materia civil, penal y administrativa.", icon: "⚖️" },
    { title: "Fiscal y Contable", desc: "Gestión tributaria y contabilidad profesional.", icon: "📊" },
  ];

  const heroVariants = {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { delay: 0.6, duration: 0.5 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.5 },
    }),
  };

  return (
    <main className="min-h-screen bg-neutro text-gray-800">
      {/* HERO */}
      <section className="relative h-[80vh] flex items-center justify-center">
        {/* Imagen de fondo */}
        <div className="absolute inset-0">
          <Image
            src="/asesoria/asesoriaUno.jpg" // Cambia a tu imagen real
            alt="Equipo Amauta Asesores"
            width={100}
            height={100}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-primario/70"></div>
        </div>

        {/* Cuadro central animado */}
        <motion.div
          className="relative m-5 z-10 max-w-lg text-center bg-neutro/90 backdrop-blur-md p-6 rounded-2xl shadow-xl"
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold text-primario mb-4"
            variants={heroVariants}
          >
            Amauta Asesoría Integral
          </motion.h1>

          <motion.p
            className="text-gray-700 md:text-lg mb-6"
            variants={heroVariants}
            transition={{ delay: 0.3 }}
          >
            Soluciones profesionales en{" "}
            <span className="font-semibold text-secundario">
              Extranjería, Seguros, Laboral, Empresas y Jurídico
            </span>
          </motion.p>

          <motion.a
            href="#contacto"
            className="inline-block px-6 py-3 bg-secundario text-neutro font-medium rounded-xl hover:bg-[#9a8c6f] transition-all shadow-md"
            variants={buttonVariants}
          >
            Contáctanos
          </motion.a>
        </motion.div>
      </section>

      {/* SERVICIOS */}
      <section className="py-16 px-6 bg-neutro">
        <h2 className="text-3xl font-bold text-center text-secundario mb-12">
          Nuestros Servicios
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {servicios.map((s, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              className="p-6 border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg transition-all bg-neutro hover:-translate-y-1 hover:scale-105"
            >
              <div className="text-5xl mb-3">{s.icon}</div>
              <h3 className="text-xl font-semibold text-primario">{s.title}</h3>
              <p className="text-gray-700 mt-2">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="py-20 text-center bg-primario text-neutro px-6">
        <h2 className="text-3xl text-secundario font-bold mb-6">¿Necesitas ayuda?</h2>
        <p className="max-w-2xl mx-auto mb-8 text-white/80">
          Nuestro equipo está listo para asesorarte en cualquier trámite o consulta.
        </p>
        <a
          href="mailto:contacto@amautaasesoria.com"
          className="inline-block px-6 py-3 bg-secundario text-neutro font-semibold rounded-xl hover:bg-[#9a8c6f] transition-all"
        >
          Enviar correo
        </a>
      </section>
    </main>
  );
}

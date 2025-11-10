import Image from "next/image";
import { getLogtoContext } from "@logto/next/server-actions";
import { logtoServerConfig } from "./logto";
import LogingSignIn from "@/components/auth/SignIn";
import { LogingSignOut } from "@/components/auth/SignOut";

export default async function Home() {
  const { isAuthenticated } = await getLogtoContext(logtoServerConfig);

  return (
    <main className="relative flex items-center justify-center min-h-screen w-full overflow-hidden">
      {/* Imagen de fondo */}
      <Image
        src="/equipo/equipoAmauta.png"
        alt="Equipo de Amauta Asesores"
        fill
        className="object-cover object-top"
        priority
      />

      {/* Capa de opacidad adaptable */}
      <div className="absolute inset-0 bg-primario/50 mix-blend-multiply md:bg-primario/50 lg:bg-primario/40 backdrop-blur-xs transition-all duration-500" />
      {/* Contenido centrado */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-10 sm:px-8 md:px-12">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 sm:p-10 md:p-12 lg:p-14 max-w-lg border border-white/20 transition-all duration-300">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-neutro mb-3 drop-shadow-md">
            Amauta Asesores
          </h1>
          <h2 className="text-2xl sm:text-3xl font-semibold text-secundario mb-8">
            Welcome
          </h2>

          <p className="text-neutro text-base sm:text-lg mb-6 opacity-90 leading-relaxed">
            Bienvenido, para poder continuar debes iniciar sesión.
          </p>

          <div className="flex justify-center">
            {isAuthenticated ? (
              <LogingSignOut />
            ) : (
              <LogingSignIn />
            )}
          </div>
        </div>
      </div>

      {/* Gradiente decorativo opcional (para dar más profundidad en móviles) */}
      <div className="absolute bottom-0 inset-x-0 h-40 bg-linear-to-t from-primario/60 to-transparent md:hidden" />
    </main>
  );
}

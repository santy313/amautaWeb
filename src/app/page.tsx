import Image from "next/image";
import { LogingSignOut } from "@/components/auth/SignOut";

import { getLogtoContext } from "@logto/next/server-actions";
import { logtoServerConfig } from "./logto";
import LogingSignIn from "@/components/auth/SignIn";


export default async function Home() {
  // Server-side: obtenemos la info de autenticación
  const { isAuthenticated } = await getLogtoContext(logtoServerConfig);

  return (
    <main className="flex h-screen w-screen bg-secundario">
      {/* Lado izquierdo */}
      <div className="relative w-1/2 h-screen">
        <div className="absolute inset-0 bg-primario bg-opacity-90"></div>
        <Image
          src="/equipo/equipoAmauta.png"
          alt="Equipo de Amauta Asesores"
          fill
          className="object-cover object-top"
        />
      </div>

      {/* Lado derecho */}
      <div className="flex w-1/2 items-center justify-center">
        <div className="relative z-10 max-w-md text-center p-8">
          <h1 className="text-5xl font-bold text-neutro mb-4">
            Amauta Asesores
          </h1>
          <h2 className="text-3xl font-semibold mb-6">Welcome</h2>

          <div className="bg-primario bg-opacity-80 rounded-xl p-6 shadow-lg">
            <p className="text-neutro mb-6">
              Bienvenido, para poder seguir tienes que iniciar sesión.
            </p>

            <div className="flex justify-center">
              {isAuthenticated ? <LogingSignOut /> : <LogingSignIn />}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

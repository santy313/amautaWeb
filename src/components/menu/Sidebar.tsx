"use client";

import { Calendar, Home, Inbox, Search, ChevronDown, User } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { LogingSignOut } from "../auth/SignOut";

const menuItems = [
  {
    title: "Extranjería",
    icon: Home,
    subItems: [
      { title: "Residencia", url: "#" },
      { title: "Nacionalidad", url: "#" },
      { title: "Permisos de Trabajo", url: "#" },
    ],
  },
  { title: "DGT", icon: Inbox, url: "DGT" },
  { title: "Seguros", icon: Calendar, url: "Seguros" },
  { title: "Buscar", icon: Search, url: "#" },
];

export const AppSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const pathname = usePathname();

  // Abrir automáticamente el submenú si la ruta actual coincide
  useEffect(() => {
    menuItems.forEach((item) => {
      if (item.subItems?.some((sub) => sub.url === pathname)) {
        setOpenSubmenu(item.title);
      }
    });
  }, [pathname]);

  const toggleSubmenu = (title: string) => {
    setOpenSubmenu((prev) => (prev === title ? null : title));
  };

  return (
    <>
      {/* Barra superior móvil */}
      <header className="fixed top-0 left-0 right-0 z-[60] flex items-center justify-between bg-primario text-neutro px-4 py-3 shadow-md md:hidden">
        <button
          className="p-2 rounded bg-white/20 hover:bg-white/30 transition"
          onClick={() => setIsOpen(true)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <h1 className="text-lg font-semibold tracking-wide">Amauta Asesores</h1>
        <div className="w-6" />
      </header>

      {/* Overlay móvil */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-[50] transition-opacity duration-300 md:hidden ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-60 bg-neutro shadow-2xl z-[70] transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 md:static md:block`}
      >
        <div className="p-4 flex flex-col h-full">
          {/* Título principal */}
          <Link
            href="/dashboard/Main"
            onClick={() => setIsOpen(false)}
            className="text-lg font-bold mb-6 hidden md:block text-primario hover:text-secundario transition-colors"
          >
            Amauta Asesores
          </Link>
          {/* PERFIL con submenú */}
          <div className="mt-4 border-t border-b pt-4">
            <button
              onClick={() => toggleSubmenu("Perfil")}
              className="flex items-center justify-between w-full gap-2 p-2 rounded-md transition-colors hover:bg-gray-100 text-gray-800"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-secundario/20 flex items-center justify-center text-secundario font-semibold">
                  <User className="w-5 h-5" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-sm font-medium">Mi Perfil</span>
                  <span className="text-xs text-gray-500">Cuenta personal</span>
                </div>
              </div>
              <motion.div
                animate={{ rotate: openSubmenu === "Perfil" ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </motion.div>
            </button>

            {/* Submenú Perfil */}
            <AnimatePresence initial={false}>
              {openSubmenu === "Perfil" && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="ml-5 mt-2 flex flex-col gap-1 overflow-hidden"
                >
                  <Link
                    href="/dashboard/perfil"
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-md text-gray-800 text-sm hover:bg-secundario/20 transition-colors"
                  >
                    Ver perfil
                  </Link>
                  <Link
                    href="/dashboard/configuracion"
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-md text-gray-800 text-sm hover:bg-secundario/20 transition-colors"
                  >
                    Configuración
                  </Link>
                  <div className="p-2 rounded-md text-gray-800 text-sm hover:bg-secundario/20 transition-colors">
                    <LogingSignOut />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Navegación */}
          <nav className="flex-1 flex flex-col gap-1">
            {menuItems.map((item) => {
              const isActive = item.url === pathname;
              return (
                <div key={item.title}>
                  {item.subItems ? (
                    <button
                      onClick={() => toggleSubmenu(item.title)}
                      className={`flex items-center justify-between w-full gap-2 p-2 rounded-md transition-colors ${openSubmenu === item.title ? "bg-secundario/20" : "hover:bg-gray-100"
                        } text-gray-800`}
                    >
                      <div className="flex items-center gap-2">
                        <item.icon className="w-5 h-5 text-primario" />
                        <span className="text-sm font-medium">{item.title}</span>
                      </div>
                      <motion.div
                        animate={{ rotate: openSubmenu === item.title ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="w-4 h-4 text-gray-500" />
                      </motion.div>
                    </button>
                  ) : (
                    <Link
                      href={item.url!}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-2 p-2 rounded-md text-gray-800 text-sm transition-colors ${isActive ? "bg-secundario/20 font-semibold" : "hover:bg-gray-100"
                        }`}
                    >
                      <item.icon className="w-5 h-5 text-primario" />
                      <span className="text-sm font-medium">{item.title}</span>
                    </Link>
                  )}

                  {/* Submenús animados */}
                  <AnimatePresence initial={false}>
                    {item.subItems && openSubmenu === item.title && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="ml-7 flex flex-col gap-1 overflow-hidden"
                      >
                        {item.subItems.map((sub) => {
                          const isSubActive = sub.url === pathname;
                          return (
                            <Link
                              key={sub.title}
                              href={sub.url}
                              onClick={() => setIsOpen(false)}
                              className={`p-2 rounded-md text-gray-800 text-sm transition-colors ${isSubActive
                                  ? "bg-secundario/30 font-semibold"
                                  : "hover:bg-secundario/20"
                                }`}
                            >
                              {sub.title}
                            </Link>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>
        </div>
      </aside>

      {/* Espaciador móvil */}
      <div className="h-[60px] md:hidden" />
    </>
  );
};

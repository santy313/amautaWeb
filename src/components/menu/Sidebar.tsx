"use client";

import { Calendar, Home, Inbox, Search } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

import { useState } from "react";
import Link from "next/link"
import { LogingSignOut } from "../auth/SignOut"


// Menu items.
const items = [
  {
    title: "Extranjeria",
    url: "#",
    icon: Home,
  },
  {
    title: "DGT",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Seguros",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  }
]

export const AppSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Botón hamburguesa */}
      <button
        className="md:hidden p-2 m-2 text-white bg-primario rounded fixed top-4 left-4 z-50 shadow-lg"
        onClick={() => setIsOpen(true)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Overlay oscuro */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 md:hidden ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-40 bg-white shadow-xl z-50 transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:static md:block`}
      >
        <Sidebar>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Amauta Asesores</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <Link
                          href={item.url}
                          className="flex items-center gap-2 p-2 rounded hover:bg-gray-100"
                          onClick={() => setIsOpen(false)} // cierra sidebar en móvil
                        >
                          <item.icon />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}

                  {/* Logout */}
                  <SidebarMenuItem key="logout">
                    <SidebarMenuButton asChild>
                      <div
                        
                        onClick={() => setIsOpen(false)}
                      >
                        <LogingSignOut />
                      </div>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
      </div>
    </>
  );
}

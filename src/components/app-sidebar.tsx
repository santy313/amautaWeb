"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "Lenin Vucuña",
    email: "ceo@amauta.com",
    avatar: "/equipoamauta/Lenin.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Extranjeria",
      url: "#",
      icon: SquareTerminal,
      //isActive: true,
      items: [
        {
          title: "Estancia en España",
          url: "#",
          items: [
          {
            title: "Estudio",
            url: "/dashboard/extranjeria/estudio",
          },
          {
            title: "Voluntariado",
            url: "/dashboard/extranjeria/serviciosvoluntariado",
          },
          {
            title: "Practicas",
            url: "/dashboard/extranjeria/practicas",
          },
          ]
        },
        {
          title: "Residir sin trabajar",
          url: "#",
        },
        {
          title: "Trabajar en España",
          url: "#",
        },
        {
          title: "Gestión colectiva de contrataciones en origen",
          url: "#",        
          icon: SquareTerminal,  
          items: [
            {
              title: "1Gestión colectiva de contrataciones en origen",
              url: "#",
            },
            {
              title: "3Gestión colectiva de contrataciones en origen",
              url: "#",
            },
            {
              title: "4Gestión colectiva de contrataciones en origen",
              url: "#",
            },
            {
              title: "5Gestión colectiva de contrataciones en origen",
              url: "#",
            },
            {
              title: "6Gestión colectiva de contrataciones en origen",
              url: "#",
            },

          ]
        },
      ],
    },
    {
      title: "Models",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Genesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

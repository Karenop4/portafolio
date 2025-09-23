"use client"

import * as React from "react"
import { User, FolderKanban, Mail, Home } from "lucide-react"
import { Sidebar, SidebarContent, SidebarHeader } from "@/components/ui/sidebar"

const data = {
  user: {
    name: "Karen Micaela Ortiz Peláez",
    avatar: "../profile.jpg",
  },
  navMain: [
    {
      title: "Home",
      url: "/",
      icon: Home,
    },
    {
      title: "About me",
      url: "/about",
      icon: User,
    },
    {
      title: "Projects",
      url: "/projects",
      icon: FolderKanban,
    },
    {
      title: "Contact",
      url: "/contact",
      icon: Mail,
    },
  ],
}

export function AppSidebar() {
  return (
    <Sidebar>
      {/* Header con avatar, nombre, carrera y universidad */}
      <SidebarHeader>
        <div className="flex flex-col items-center gap-2 mt-6 mb-6">
          <img
            src={data.user.avatar}
            alt={data.user.name}
            className="w-24 h-24 rounded-full border"
          />
          <h2 className="text-base font-semibold">{data.user.name}</h2>
          <p className="text-m text-muted-foreground">Computer Science Engineering</p>
          <p className="text-sm text-muted-foreground">Salesian Polytechnic University</p>
          <p className="text-sm text-muted-foreground">Cuenca, Ecuador</p>

        </div>
      </SidebarHeader>

      {/* Opciones de navegación */}
      <SidebarContent>
        <nav className="flex flex-col gap-1 p-2">
          {data.navMain.map((item) => (
            <a
              key={item.title}
              href={item.url}
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
            >
              <item.icon className="h-4 w-4" />
              {item.title}
            </a>
          ))}
        </nav>
      </SidebarContent>
    </Sidebar>
  )
}

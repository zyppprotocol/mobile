"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    theme === "light" ? (
        <Sun className="h-5 w-5" onClick={()=> setTheme("dark")} />
    ) : (

        <Moon className="h-5 w-5" onClick={()=> setTheme("light")} />

    )
  )
}

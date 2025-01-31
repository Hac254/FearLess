"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"
import { BookOpen, Home, ListChecks, Target, BarChart, Brain, Goal, AlertCircle, Menu } from "lucide-react"

const links = [
  { name: "Home", href: "/", icon: Home, emoji: "🏠" },
  { name: "Daily Check-in", href: "/diary", icon: Brain, emoji: "📝" },
  { name: "My Goals", href: "/goals", icon: Goal, emoji: "🎯" },
  { name: "Exposure Tasks", href: "/exposures", icon: ListChecks, emoji: "💪" },
  { name: "My Hierarchy", href: "/hierarchy", icon: Target, emoji: "📊" },
  { name: "Progress", href: "/progress", icon: BarChart, emoji: "📈" },
  { name: "Learn", href: "/learn", icon: BookOpen, emoji: "📚" },
  { name: "Warning Signs", href: "/warning-signs", icon: AlertCircle, emoji: "🚨" },
]

export function MainNav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-40 border-b bg-background">
      <div className="flex h-16 items-center px-4">
        {/* Logo - Always left aligned */}
        <Link href="/" className="mr-6 flex items-center gap-2 font-bold text-xl">
          <span className="text-2xl">🌟</span>
          <span className="hidden sm:inline">OCD Helper</span>
        </Link>

        {/* Desktop Navigation - Centered */}
        <div className="hidden lg:flex flex-1 justify-center">
          <div className="flex space-x-1">
            {links.map((link) => (
              <Button
                key={link.href}
                variant={pathname === link.href ? "default" : "ghost"}
                asChild
                className="px-4 transition-all duration-200 hover:scale-105"
              >
                <Link href={link.href} className="flex items-center space-x-2">
                  <span className="text-xl">{link.emoji}</span>
                  <span className="font-medium">{link.name}</span>
                </Link>
              </Button>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" className="lg:hidden ml-auto" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72">
            <div className="flex items-center gap-2 font-bold text-xl mb-4">
              <span className="text-2xl">🌟</span>
              <span>OCD Helper</span>
            </div>
            <ScrollArea className="h-[calc(100vh-4rem)] pb-10">
              <div className="flex flex-col space-y-2 py-4">
                {links.map((link) => {
                  const Icon = link.icon
                  return (
                    <Button
                      key={link.href}
                      variant={pathname === link.href ? "default" : "ghost"}
                      asChild
                      className="justify-start hover:scale-105 transition-all duration-200"
                      onClick={() => setOpen(false)}
                    >
                      <Link href={link.href} className="flex items-center space-x-2">
                        <span className="text-xl">{link.emoji}</span>
                        <span className="font-medium">{link.name}</span>
                      </Link>
                    </Button>
                  )
                })}
              </div>
            </ScrollArea>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}


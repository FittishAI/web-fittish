"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"
import { usePathname, useRouter } from "next/navigation"

// Navigation items with type to distinguish between scroll sections and pages
const navigation = [
  { name: "Home", href: "/", type: "page" },
  { name: "Features", href: "/#features", type: "scroll" },
  { name: "How it works", href: "/#how-it-works", type: "scroll" },
  { name: "Pricing", href: "/#pricing", type: "scroll" },
  // { name: "Blog", href: "/blog", type: "page" },
  { name: "Contact", href: "/#getintouch", type: "page" },
  // { name: "Pages", href: "/pages", type: "page" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const pathname = usePathname()
  const router = useRouter()

  // Set up intersection observer to detect which section is in view
  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection(null)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3 }, // Adjust threshold as needed
    )

    // Observe sections
    const sections = document.querySelectorAll("section[id]")
    sections.forEach((section) => observer.observe(section))

    // Clean up
    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [pathname])

  // Function to handle navigation
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string, type: string) => {
    if (pathname === "/" && type === "scroll") {
      e.preventDefault()
      const targetId = href.replace("/#", "")
      const element = document.getElementById(targetId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    } else if (pathname === "/" && href === "/") {
      e.preventDefault()
      // Scroll to top when clicking Home on home page
      window.scrollTo({ top: 0, behavior: "smooth" })
    }

    if (mobileMenuOpen) {
      setMobileMenuOpen(false)
    }
  }

  // Check if a nav item is active
  const isActive = (path: string, type: string, name: string) => {
    if (pathname !== "/") {
      return pathname === path
    }

    // On home page
    if (name === "Home") {
      return !activeSection || activeSection === "hero"
    }

    if (name === "Features") {
      return activeSection === "features"
    }

    if (name === "How it works") {
      return activeSection === "how-it-works"
    }

    return false
  }

  return (
    <motion.header
      className="sticky top-0 z-50 bg-white/80 backdrop-blur-md"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <nav className="container flex items-center justify-between py-4">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Fittish</span>
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-md bg-indigo-500 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-white"
                >
                  <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                </svg>
              </div>
              <span className="ml-2 text-xl font-bold text-indigo-500">Fittish</span>
            </div>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavigation(e, item.href, item.type)}
              className={`text-sm font-medium transition-colors duration-200 ${
                isActive(item.href, item.type, item.name) ? "text-indigo-500" : "text-gray-700 hover:text-indigo-500"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="" className="btn btn-primary">
              Coming Soon....
            </Link>
          </motion.div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div
          className="fixed inset-0 z-50 bg-white"
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="fixed inset-0 flex">
            <div className="w-full">
              <div className="flex items-center justify-between px-6 py-4">
                <div>
                  <Link href="/" className="-m-1.5 p-1.5">
                    <span className="sr-only">Fittish</span>
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-md bg-indigo-500 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5 text-white"
                        >
                          <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                        </svg>
                      </div>
                      <span className="ml-2 text-xl font-bold text-indigo-500">Fittish</span>
                    </div>
                  </Link>
                </div>
                <div>
                  <button
                    type="button"
                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <X className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className="mt-6 flow-root">
                <div className="space-y-2 py-6">
                  {navigation.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                    >
                      <Link
                        href={item.href}
                        onClick={(e) => handleNavigation(e, item.href, item.type)}
                        className={`block px-6 py-3 text-base font-medium ${
                          isActive(item.href, item.type, item.name)
                            ? "text-indigo-500 bg-indigo-50"
                            : "text-gray-900 hover:bg-gray-50"
                        }`}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>
                <motion.div
                  className="px-6 py-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.3 }}
                >
                  <Link href="/contact" className="btn btn-primary w-full" onClick={() => setMobileMenuOpen(false)}>
                    Coming Soon....
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}

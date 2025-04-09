"use client"

import type React from "react"

import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

const navigation = {
  product: [
    { name: "Features", href: "/#features", type: "scroll" },
    { name: "How it works", href: "/#how-it-works", type: "scroll" },
    { name: "Pricing", href: "/#pricing", type: "scroll" },
    { name: "FAQ", href: "/#faq", type: "scroll" },
  ],
  company: [
    { name: "About us", href: "/about", type: "page" },
    { name: "Careers", href: "/careers", type: "page" },
    { name: "Contact us", href: "/contact", type: "page" },
  ],
  legal: [
    { name: "Privacy policy", href: "/privacy-policy", type: "page" },
    { name: "Terms of service", href: "/terms-of-service", type: "page" },
  ],
  social: [
    { name: "Facebook", href: "#", icon: Facebook },
    { name: "Twitter", href: "#", icon: Twitter },
    { name: "Instagram", href: "#", icon: Instagram },
    { name: "LinkedIn", href: "#", icon: Linkedin },
  ],
}

export default function Footer() {
  // Function to handle scroll navigation
  const handleScrollNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string, type: string) => {
    // Only apply scroll behavior on the home page and for scroll type links
    if (window.location.pathname === "/" && type === "scroll") {
      e.preventDefault()
      const targetId = href.replace("/#", "")
      const element = document.getElementById(targetId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="container py-12 md:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link href="/" className="flex items-center">
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
              <span className="ml-2 text-xl font-bold text-white">Fittish</span>
            </Link>
            <p className="text-sm leading-6 text-gray-300">
              Helping you stay in shape with personalized meal plans, workouts, and AI-powered health tracking.
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <Link key={item.name} href={item.href} className="text-gray-400 hover:text-gray-300">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-4 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Product</h3>
                <ul className="mt-6 space-y-4">
                  {navigation.product.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        onClick={(e) => handleScrollNavigation(e, item.href, item.type)}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Legal</h3>
                <ul className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        onClick={(e) => handleScrollNavigation(e, item.href, item.type)}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="text-xs leading-5 text-gray-400">
            &copy; {new Date().getFullYear()} Fittish, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

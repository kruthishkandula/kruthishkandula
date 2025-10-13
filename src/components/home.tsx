'use client'

import { portfolio_details } from "@/data/portfolio"
import { useEffect, useState } from "react"
import RoleCarousel from "./ui/RoleCarousel"
import { Button } from "./ui/button"

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-purple-500/20 to-pink-500/20 dark:from-blue-600/20 dark:via-purple-700/20 dark:to-pink-600/20"></div>

      <div className="glass-card p-4 md:p-12 text-center max-w-dvw mx-auto relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Hello, I'm {portfolio_details?.name}
        </h1>
        <p className="text-xl text-center wrap-break-word md:text-2xl mb-8 text-muted-foreground">
          {portfolio_details?.title}
        </p>
        <RoleCarousel/>
        <Button variant={'default'} onClick={() => {
          scrollToSection('projects')
        }} className="glass-Button px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-200">
          View My Work
        </Button>
      </div>
    </section>
  )
}

export default Home

'use client'

import { navItems } from '@/data/navitems'
import { useEffect, useState } from 'react'
import { ModeToggle } from '../theme/mode-toggle'

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState('home')
    const [showMobileNav, setShowMobileNav] = useState(false)
    const [scrollTimeout, setScrollTimeout] = useState<NodeJS.Timeout | null>(null)

    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map(item => item.id)
            const scrollPosition = window.scrollY + window.innerHeight / 2

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i])
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(sections[i])
                    break
                }
            }

            // Set scrolled state
            setIsScrolled(window.scrollY > 50)

            // Show mobile nav on scroll (only on mobile)
            if (window.innerWidth < 768) {
                setShowMobileNav(true)
                
                // Clear existing timeout
                if (scrollTimeout) {
                    clearTimeout(scrollTimeout)
                }
                
                // Set new timeout to hide mobile nav after 2 seconds of no scrolling
                const newTimeout = setTimeout(() => {
                    setShowMobileNav(false)
                }, 2000) // 2 seconds
                
                setScrollTimeout(newTimeout)
            }
        }

        window.addEventListener('scroll', handleScroll)
        
        // Cleanup function
        return () => {
            window.removeEventListener('scroll', handleScroll)
            if (scrollTimeout) {
                clearTimeout(scrollTimeout)
            }
        }
    }, [scrollTimeout])

    // Handle window resize to show/hide mobile nav appropriately
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setShowMobileNav(false)
                if (scrollTimeout) {
                    clearTimeout(scrollTimeout)
                    setScrollTimeout(null)
                }
            }
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [scrollTimeout])

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
        <>
            {/* Desktop Header */}
            <header className={`fixed top-5 left-30 right-30 z-50 transition-all rounded-3xl duration-300 hidden md:block ${
                isScrolled ? 'backdrop-blur-md bg-background/80' : 'backdrop-blur-sm bg-background/60 shadow-lg'
            }`}>
                <div className="glass-effect">
                    <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                        <div 
                            onClick={() => scrollToSection('hero')} 
                            className="font-bold cursor-pointer text-xl hover:font-extrabold"
                        >
                            <img 
                                src="/logo.png" 
                                alt="Logo" 
                                className="w-auto h-auto max-w-[5rem] max-h-[5rem] rounded-full"
                            />
                        </div>

                        <ul className="flex space-x-8">
                            {navItems.map((item) => (
                                <li key={item.id}>
                                    <button
                                        onClick={() => scrollToSection(item.id)}
                                        className={`hover:font-extrabold cursor-pointer transition-colors duration-200 ${
                                            activeSection === item.id 
                                                ? 'text-accent-foreground font-bold' 
                                                : 'text-muted-foreground font-medium'
                                        }`}
                                    >
                                        {item.name}
                                    </button>
                                </li>
                            ))}
                        </ul>

                        <ModeToggle />
                    </nav>
                </div>
            </header>

            {/* Mobile Tab Bar - Auto Hide */}
            <header className={`fixed bottom-4 left-4 right-4 z-50 md:hidden transition-all duration-500 ease-in-out transform ${
                showMobileNav 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-full opacity-0 pointer-events-none'
            }`}>
                <div className="glass-effect backdrop-blur-md bg-background/90 rounded-2xl shadow-lg">
                    <nav className="backdrop-blur-md">
                        <div className="flex flex-row justify-around items-center py-2 px-4">
                            {navItems.map((item) => {
                                const IconComponent = item.icon
                                return (
                                    <button
                                        key={item.id}
                                        onClick={() => {
                                            scrollToSection(item.id)
                                            // Keep the nav visible for a bit longer after tap
                                            if (scrollTimeout) {
                                                clearTimeout(scrollTimeout)
                                            }
                                            const newTimeout = setTimeout(() => {
                                                setShowMobileNav(false)
                                            }, 3000) // 3 seconds after tap
                                            setScrollTimeout(newTimeout)
                                        }}
                                        className={`flex flex-col items-center justify-center py-2 px-3 rounded-lg transition-all duration-200 ${
                                            activeSection === item.id
                                                ? 'text-primary bg-primary/10 scale-105'
                                                : 'text-muted-foreground hover:text-primary'
                                        }`}
                                    >
                                        <IconComponent
                                            size={20}
                                            className={`mb-1 transition-transform duration-200 ${
                                                activeSection === item.id ? 'scale-110' : ''
                                            }`}
                                        />
                                        <span className={`text-xs font-medium transition-all duration-200 ${
                                            activeSection === item.id ? 'font-semibold' : ''
                                        }`}>
                                            {item.name}
                                        </span>
                                    </button>
                                )
                            })}
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header

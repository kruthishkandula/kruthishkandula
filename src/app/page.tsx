'use client'

import About from '@/components/about'
import Contact from '@/components/contact'
import Home from '@/components/home'
import Projects from '@/components/projects'
import ProjectModal from '@/components/ui/project-modal'
import { ModeToggle } from '@/components/ui/theme/mode-toggle'
import { useEffect, useRef, useState } from 'react'
import { GoPerson } from 'react-icons/go'
import { GrContact, GrProjects } from 'react-icons/gr'
import { RxHome } from "react-icons/rx"
import { FaTimes } from 'react-icons/fa'
import { Download } from 'lucide-react'


const SECTIONS = ['Home', 'About', 'Projects', 'Contact']

export default function Dashboard() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeSection, setActiveSection] = useState(0)
  const [selectedProject, setSelectedProject] = useState<any | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isResumeOpen, setIsResumeOpen] = useState(false)
  const [iframeLoaded, setIframeLoaded] = useState(false)
  const [iframeError, setIframeError] = useState(false)

  const scrollToSection = (index: number) => {
    const container = containerRef.current
    const sections = container?.querySelectorAll(':scope > section')
    if (sections?.[index] && container) {
      const section = sections[index] as HTMLElement
      const sectionTop = section.offsetTop - container.offsetTop
      container.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
      })
      setActiveSection(index)
    }
  }

  const handleScroll = () => {
    const container = containerRef.current
    if (!container) return

    const sections = container.querySelectorAll(':scope > section')
    let current = 0

    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect()
      const containerRect = container.getBoundingClientRect()
      const relativeTop = rect.top - containerRect.top
      if (relativeTop <= container.clientHeight / 2) {
        current = index
      }
    })

    setActiveSection(current)
  }

  useEffect(() => {
    const container = containerRef.current
    if (container) {
      container.addEventListener('scroll', handleScroll)
      return () => container.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div
      className="fixed inset-0 overflow-hidden"
      style={{
        backgroundImage: 'url(/bg2.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        padding: '20px 80px',
        boxSizing: 'border-box',
      }}
    >
      {/* Premium Color Overlay */}
      {/* Blurred Background Image Layer */}
      <div className="fixed inset-0 pointer-events-none" style={{
        backgroundImage: 'url(/bg2.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        filter: 'blur(100px)',
        zIndex: 0
      }} />
      {/* Scrollable Content Container */}
      <div
        ref={containerRef}
        className="relative overflow-y-auto scroll-smooth z-20"
        style={{
          height: 'calc(100vh - 40px)',
          scrollSnapType: 'y mandatory',
          border: '1px solid transparent',
          borderRadius: '30px',
          backdropFilter: 'blur(8px)',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37), inset 0 0 32px rgba(99, 102, 241, 0.1)'
        }}
      >
        <section id="home" className="min-h-screen">
          <Home scrollToSection={scrollToSection} />
        </section>

        <section id="about" className="min-h-screen">
          <About />
        </section>

        <section id="projects" className="min-h-screen">
          <Projects
            isActive={activeSection === 2}
            onProjectSelect={setSelectedProject}
            onModalOpen={() => setIsModalOpen(true)}
          />
        </section>

        <section id="contact" className="min-h-screen">
          <Contact
            onResumeOpen={() => setIsResumeOpen(true)}
            onResumeClose={() => {
              setIsResumeOpen(false)
              setIframeLoaded(false)
              setIframeError(false)
            }}
          />
        </section>

        {/* <section id="copyright" className="min-h-screen">
          <Copyright />
        </section> */}
      </div>

      {/* Fixed Navigation Bar */}
      <nav className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50 backdrop-blur-lg rounded-full px-6 py-3 flex gap-4" style={{
        boxShadow: '0 8px 32px 0 rgba(99, 102, 241, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
      }}>
        {SECTIONS.map((section, index) => (
          <button
            key={section}
            onClick={() => scrollToSection(index)}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${activeSection === index
              ? 'bg-gradient-to-br from-indigo-400/60 to-purple-500/60 shadow-lg shadow-purple-500/40'
              : 'bg-white/10 hover:bg-indigo-400/30'
              }`}
            title={section}
          >
            <span className="text-sm text-white font-semibold">
              {index === 0 && <RxHome />}
              {index === 1 && <GoPerson />}
              {index === 2 && <GrProjects />}
              {index === 3 && <GrContact />}
            </span>
          </button>
        ))}
      </nav>

      {/* Theme Toggle */}
      <div className="md:hidden fixed top-10 right-10 z-40">
        <ModeToggle />
      </div>

      {/* Project Modal - Rendered at top level */}
      {isModalOpen && selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => {
            setIsModalOpen(false)
            setSelectedProject(null)
            document.body.style.overflow = 'unset'
          }}
        />
      )}

      {/* Resume Modal - Rendered at top level */}
      {isResumeOpen && (
        <div
          onClick={() => {
            setIsResumeOpen(false)
            setIframeLoaded(false)
            setIframeError(false)
          }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-sm overflow-hidden"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-[95vw] h-[95vh] max-w-6xl bg-white dark:bg-gray-900 rounded-lg shadow-2xl flex flex-col"
          >
            {/* Download Button */}
            <a
              href="https://drive.google.com/uc?export=download&id=1eXLl1Udt4Jn9oh0iMyLGfcnKSCexfKib"
              onClick={() => {
                setIsResumeOpen(false);
                setIframeLoaded(false);
                setIframeError(false);
              }}
              aria-label="Download Resume"
              title="Download Resume"
              className="absolute bottom-2 right-2 z-10 p-2 bg-gray-500 hover:bg-yellow-600 text-white rounded-full transition-colors duration-200"
            >
              <Download className="text-xl" />
            </a>
            {/* Close Button */}
            <button
              onClick={() => {
                setIsResumeOpen(false)
                setIframeLoaded(false)
                setIframeError(false)
              }}
              className="absolute top-2 right-3 z-10 p-2 bg-red-500 hover:bg-red-600 text-white rounded-full transition-colors duration-200"
            >
              <FaTimes className="text-4xl" />
            </button>

            {/* Resume Content */}
            <div className="flex-1 overflow-hidden relative">
              {iframeError && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-background to-background/95 z-20">
                  <div className="text-center space-y-4 px-6">
                    <div className="text-5xl mb-4">🔒</div>
                    <h2 className="text-2xl font-bold text-foreground">Access Restricted</h2>
                    <p className="text-foreground/70 max-w-md">
                      The resume is currently restricted or requires authentication to view.
                    </p>
                    <div className="pt-4 space-y-3">
                      <p className="text-sm text-foreground/60">
                        Download the resume instead:
                      </p>
                      <a
                        href="https://drive.google.com/uc?export=download&id=1eXLl1Udt4Jn9oh0iMyLGfcnKSCexfKib"
                        download="Kruthish_Kandula_Resume.pdf"
                        className="inline-block px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
                      >
                        Download Resume
                      </a>
                    </div>
                  </div>
                </div>
              )}
              {!iframeLoaded && !iframeError && (
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-background to-background/95 z-10">
                  <div className="text-center space-y-3">
                    <div className="animate-spin text-4xl">⏳</div>
                    <p className="text-foreground/70">Loading resume...</p>
                  </div>
                </div>
              )}
              <iframe
                src="https://drive.google.com/file/d/1eXLl1Udt4Jn9oh0iMyLGfcnKSCexfKib/preview"
                className="w-full h-full rounded-lg"
                title="Resume"
                onLoad={() => {
                  setIframeLoaded(true)
                  setIframeError(false)
                }}
                onError={() => {
                  setIframeError(true)
                  setIframeLoaded(false)
                }}
                allow="autoplay"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

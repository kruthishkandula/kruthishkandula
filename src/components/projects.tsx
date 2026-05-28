"use client"

import { ProjectsData } from "@/data/portfolio"
import { Button } from "./ui/button"
import { useState } from "react"
import { X, ExternalLink, Calendar, Users, Award } from "lucide-react"

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [lightbox, setLightbox] = useState<{ open: boolean, img: string | null }>({ open: false, img: null })

  const openModal = (project: any) => {
    setSelectedProject(project)
    setIsModalOpen(true)
    document.body.style.overflow = 'hidden' // Prevent background scroll
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
    document.body.style.overflow = 'unset' // Restore scroll
  }

  return (
    <section id="projects" className="min-h-screen py-20 pt-30 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">My Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {ProjectsData.map((project, index) => (
            <div
              key={index}
              className="rounded-3xl shadow-xl bg-white/80 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col group overflow-hidden"
              onClick={() => openModal(project)}
            >
              <div className="relative w-full aspect-[16/9] overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className={`absolute top-4 right-4 px-3 py-1 text-xs rounded-full font-semibold shadow-md ${project.status === 'Live Production' ? 'bg-green-500/90 text-white' : project.status === 'In Development' ? 'bg-yellow-500/90 text-white' : 'bg-blue-500/90 text-white'}`}>{project.status}</span>
              </div>
              <div className="flex-1 flex flex-col p-6 gap-3">
                <h3 className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground mb-2 line-clamp-2">{project.short_description}</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tech.slice(0, 4).map((tech, techIndex) => (
                    <span key={techIndex} className="bg-pink-600/10 text-pink-700 dark:text-pink-300 px-3 py-1 text-xs rounded-full font-medium">
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="bg-zinc-200 dark:bg-zinc-700 px-3 py-1 text-xs rounded-full font-medium">
                      +{project.tech.length - 4} more
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
                  <Calendar size={14} />
                  <span>{project.duration}</span>
                  <span className="mx-2">•</span>
                  <Users size={14} />
                  <span>{project.team_size}</span>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded text-xs">{project.category}</span>
                  <span className="bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded text-xs">{project.type}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Overlay */}
      {isModalOpen && selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xl"
          onClick={closeModal}
        >
          <button
            onClick={closeModal}
            className="absolute top-4 right-8 z-20 p-2 rounded-full bg-black/40 hover:bg-black/70 transition-colors"
            aria-label="Close"
          >
            <X size={36} />
          </button>
          <div
            className="bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl max-w-5xl w-full relative flex flex-col md:flex-row"
            style={{ maxHeight: '92vh' }}
            onClick={e => e.stopPropagation()}
          >
            {/* Left: Images */}
            <div className="md:w-2/5 w-full p-6 flex flex-col gap-4 border-b md:border-b-0 md:border-r border-zinc-200 dark:border-zinc-800">
              <div className="w-full">
                {selectedProject.images && selectedProject.images.length > 1 ? (
                  <div className="flex overflow-x-auto gap-4 snap-x snap-mandatory pb-2 scrollbar-thin scrollbar-thumb-rounded-lg scrollbar-thumb-gray-300">
                    {selectedProject.images.map((img: string, idx: number) => (
                      <div key={idx} className="relative flex-shrink-0 snap-center group" style={{ width: '180px', aspectRatio: '9/16' }}>
                        <img
                          src={img}
                          alt={`${selectedProject.title} ${idx + 1}`}
                          className="w-full h-auto max-h-72 object-contain rounded-2xl shadow-lg border-2 border-transparent group-hover:border-primary transition-all duration-300 cursor-pointer bg-neutral-100"
                          onClick={() => setLightbox({ open: true, img })}
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex justify-center">
                    <img
                      src={selectedProject.imageUrl || (selectedProject.images && selectedProject.images[0])}
                      alt={selectedProject.title}
                      className="w-auto h-auto max-h-72 object-contain rounded-2xl shadow-lg border-2 border-transparent hover:border-primary transition-all duration-300 cursor-pointer bg-neutral-100"
                      onClick={() => setLightbox({ open: true, img: selectedProject.imageUrl || (selectedProject.images && selectedProject.images[0]) })}
                    />
                  </div>
                )}
                {lightbox.open && (
                  <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm" onClick={() => setLightbox({ open: false, img: null })}>
                    <img src={lightbox.img!} alt="Full Size" className="max-w-[90vw] max-h-[90vh] rounded-2xl shadow-2xl border-4 border-white object-contain" />
                  </div>
                )}
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {selectedProject.tech.map((tech: string, techIndex: number) => (
                  <span key={techIndex} className="bg-pink-600/10 text-pink-700 dark:text-pink-300 px-3 py-1 text-xs rounded-full font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            {/* Right: Details */}
            <div className="flex-1 p-6 flex flex-col gap-4 overflow-y-auto" style={{ maxHeight: '92vh' }}>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                <h3 className="text-3xl font-bold text-zinc-900 dark:text-white mb-1">{selectedProject.title}</h3>
                <span className={`px-3 py-1 text-sm rounded-full font-semibold shadow ${selectedProject.status === 'Live Production' ? 'bg-green-500/90 text-white' : selectedProject.status === 'In Development' ? 'bg-yellow-500/90 text-white' : 'bg-blue-500/90 text-white'}`}>{selectedProject.status}</span>
              </div>
              <p className="text-lg text-zinc-700 dark:text-zinc-200 mb-2">{selectedProject.short_description}</p>
              <div className="flex flex-wrap gap-3 text-xs text-zinc-500 dark:text-zinc-400 mb-2">
                <span className="flex items-center gap-1"><Calendar size={14} /> {selectedProject.duration}</span>
                <span className="flex items-center gap-1"><Users size={14} /> {selectedProject.team_size}</span>
                <span className="flex items-center gap-1 font-medium">{selectedProject.category}</span>
                <span className="flex items-center gap-1 font-medium">{selectedProject.type}</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-2">
                {selectedProject.links?.map((item: any, index: any) => (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={e => e.stopPropagation()}
                  >
                    <Button variant="secondary" size="sm" className="flex items-center gap-2">
                      <ExternalLink size={14} />
                      <span>{item.name}</span>
                    </Button>
                  </a>
                ))}
              </div>
              <div className="mb-4">
                <h4 className="text-xl font-semibold mb-2 text-zinc-900 dark:text-white">Project Overview</h4>
                <p className="text-zinc-700 dark:text-zinc-200 leading-relaxed">{selectedProject.description}</p>
              </div>
              {selectedProject.features && (
                <div className="mb-2">
                  <h4 className="text-lg font-semibold mb-2 text-zinc-900 dark:text-white">Key Features</h4>
                  <ul className="grid md:grid-cols-2 gap-2 list-disc list-inside">
                    {selectedProject.features.map((feature: string, index: number) => (
                      <li key={index} className="text-sm text-zinc-700 dark:text-zinc-200">{feature}</li>
                    ))}
                  </ul>
                </div>
              )}
              {selectedProject.achievements && (
                <div className="mb-2">
                  <h4 className="text-lg font-semibold mb-2 flex items-center gap-2 text-zinc-900 dark:text-white"><Award size={20} />Achievements</h4>
                  <ul className="grid md:grid-cols-2 gap-2 list-disc list-inside">
                    {selectedProject.achievements.map((achievement: string, index: number) => (
                      <li key={index} className="text-sm text-green-700 dark:text-green-300">{achievement}</li>
                    ))}
                  </ul>
                </div>
              )}
              {selectedProject.platforms && (
                <div className="mb-2">
                  <h4 className="text-lg font-semibold mb-2 text-zinc-900 dark:text-white">Platform Architecture</h4>
                  <div className="grid gap-4">
                    {Object.entries(selectedProject.platforms).map(([key, platform]: [string, any]) => (
                      <div key={key} className="bg-zinc-100 dark:bg-zinc-800 rounded-xl p-4">
                        <h5 className="font-semibold mb-2">{platform.name}</h5>
                        <p className="text-sm text-zinc-600 dark:text-zinc-300 mb-3">{platform.description}</p>
                        <ul className="grid md:grid-cols-2 gap-1 list-disc list-inside">
                          {platform.features.slice(0, 6).map((feature: string, index: number) => (
                            <li key={index} className="text-xs text-zinc-700 dark:text-zinc-200">{feature}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects

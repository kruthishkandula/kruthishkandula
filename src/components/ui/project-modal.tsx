"use client"

import { useEffect, useState } from "react"
import { X, ExternalLink, Calendar, Users, Award } from "lucide-react"
import { Button } from "./button"

interface ProjectModalProps {
  project: any
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [lightbox, setLightbox] = useState<{ open: boolean; img: string | null }>({ open: false, img: null })

  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [])

  return (
    <>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xl"
        onClick={onClose}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-8 z-20 p-2 rounded-full bg-black/40 hover:bg-black/70 transition-colors"
          aria-label="Close"
        >
          <X size={36} />
        </button>
        <div
          className="bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl max-w-5xl w-full relative flex flex-col md:flex-row"
          style={{ maxHeight: "92vh" }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Left: Images */}
          <div className="md:w-2/5 w-full p-6 flex flex-col gap-4 border-b md:border-b-0 md:border-r border-zinc-200 dark:border-zinc-800">
            <div className="w-full">
              {project.images && project.images.length > 1 ? (
                <div className="flex overflow-x-auto gap-4 snap-x snap-mandatory pb-2 scrollbar-thin scrollbar-thumb-rounded-lg scrollbar-thumb-gray-300">
                  {project.images.map((img: string, idx: number) => (
                    <div key={idx} className="relative flex-shrink-0 snap-center group" style={{ width: "180px", aspectRatio: "9/16" }}>
                      <img
                        src={img}
                        alt={`${project.title} ${idx + 1}`}
                        className="w-full h-auto max-h-72 object-contain rounded-2xl shadow-lg border-2 border-transparent group-hover:border-primary transition-all duration-300 cursor-pointer bg-neutral-100"
                        onClick={() => setLightbox({ open: true, img })}
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex justify-center">
                  <img
                    src={project.imageUrl || project.images?.[0]}
                    alt={project.title}
                    className="w-auto h-auto max-h-72 object-contain rounded-2xl shadow-lg border-2 border-transparent hover:border-primary transition-all duration-300 cursor-pointer bg-neutral-100"
                    onClick={() => setLightbox({ open: true, img: project.imageUrl || project.images?.[0] })}
                  />
                </div>
              )}
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.tech.map((tech: string, techIndex: number) => (
                <span key={`${tech}-${techIndex}`} className="bg-pink-600/10 text-pink-700 dark:text-pink-300 px-3 py-1 text-xs rounded-full font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Details */}
          <div className="flex-1 p-6 flex flex-col gap-4 overflow-y-auto" style={{ maxHeight: "92vh" }}>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
              <h3 className="text-3xl font-bold text-zinc-900 dark:text-white mb-1">{project.title}</h3>
              <span className={`px-3 py-1 text-sm rounded-full font-semibold shadow ${project.status === "Live Production" ? "bg-green-500/90 text-white" : project.status === "In Development" ? "bg-yellow-500/90 text-white" : "bg-blue-500/90 text-white"}`}>
                {project.status}
              </span>
            </div>
            <p className="text-lg text-zinc-700 dark:text-zinc-200 mb-2">{project.short_description}</p>
            <div className="flex flex-wrap gap-3 text-xs text-zinc-500 dark:text-zinc-400 mb-2">
              <span className="flex items-center gap-1">
                <Calendar size={14} /> {project.duration}
              </span>
              <span className="flex items-center gap-1">
                <Users size={14} /> {project.team_size}
              </span>
              <span className="flex items-center gap-1 font-medium">{project.category}</span>
              <span className="flex items-center gap-1 font-medium">{project.type}</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-2">
              {project.links?.map((item: any, index: any) => (
                <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                  <Button variant="secondary" size="sm" className="flex items-center gap-2">
                    <ExternalLink size={14} />
                    <span>{item.name}</span>
                  </Button>
                </a>
              ))}
            </div>
            <div className="mb-4">
              <h4 className="text-xl font-semibold mb-2 text-zinc-900 dark:text-white">Project Overview</h4>
              <p className="text-zinc-700 dark:text-zinc-200 leading-relaxed">{project.description}</p>
            </div>
            {project.features && (
              <div className="mb-2">
                <h4 className="text-lg font-semibold mb-2 text-zinc-900 dark:text-white">Key Features</h4>
                <ul className="grid md:grid-cols-2 gap-2 list-disc list-inside">
                  {project.features.map((feature: string, index: number) => (
                    <li key={index} className="text-sm text-zinc-700 dark:text-zinc-200">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {project.achievements && (
              <div className="mb-2">
                <h4 className="text-lg font-semibold mb-2 flex items-center gap-2 text-zinc-900 dark:text-white">
                  <Award size={20} />
                  Achievements
                </h4>
                <ul className="grid md:grid-cols-2 gap-2 list-disc list-inside">
                  {project.achievements.map((achievement: string, index: number) => (
                    <li key={index} className="text-sm text-green-700 dark:text-green-300">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {project.platforms && (
              <div className="mb-2">
                <h4 className="text-lg font-semibold mb-2 text-zinc-900 dark:text-white">Platform Architecture</h4>
                <div className="grid gap-4">
                  {Object.entries(project.platforms).map(([key, platform]: [string, any]) => (
                    <div key={key} className="bg-zinc-100 dark:bg-zinc-800 rounded-xl p-4">
                      <h5 className="font-semibold mb-2">{platform.name}</h5>
                      <p className="text-sm text-zinc-600 dark:text-zinc-300 mb-3">{platform.description}</p>
                      <ul className="grid md:grid-cols-2 gap-1 list-disc list-inside">
                        {platform.features.slice(0, 6).map((feature: string, index: number) => (
                          <li key={index} className="text-xs text-zinc-700 dark:text-zinc-200">
                            {feature}
                          </li>
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

      {/* Lightbox */}
      {lightbox.open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm" onClick={() => setLightbox({ open: false, img: null })}>
          <img src={lightbox.img!} alt="Full Size" className="max-w-[90vw] max-h-[90vh] rounded-2xl shadow-2xl border-4 border-white object-contain" />
        </div>
      )}
    </>
  )
}

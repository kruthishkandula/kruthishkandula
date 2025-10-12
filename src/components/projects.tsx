"use client"

import { ProjectsData } from "@/data/portfolio"
import { Button } from "./ui/button"
import { useState } from "react"
import { X, ExternalLink, Calendar, Users, Award } from "lucide-react"

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ProjectsData.map((project, index) => (
            <div
              key={index}
              className="glass-card p-6 hover:scale-105 transition-transform duration-300 cursor-pointer"
              onClick={() => openModal(project)}
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-muted-foreground mb-4 line-clamp-2">
                {project.short_description}
              </p>

              {/* Status Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 text-xs rounded-full ${project.status === 'Live Production' ? 'bg-green-500/20 text-green-400' :
                    project.status === 'In Development' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-blue-500/20 text-blue-400'
                  }`}>
                  {project.status}
                </span>
                <span className="text-xs text-muted-foreground">{project.category}</span>
              </div>

              {/* Tech Stack Preview (first 3) */}
              <div className="flex flex-wrap gap-2">
                {project.tech.slice(0, 3).map((tech, techIndex) => (
                  <span key={techIndex} className="glass-tag px-3 py-1 text-sm rounded-full">
                    {tech}
                  </span>
                ))}
                {project.tech.length > 3 && (
                  <span className="glass-tag px-3 py-1 text-sm rounded-full">
                    +{project.tech.length - 3} more
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Overlay */}
      {isModalOpen && selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/20 backdrop-blur-lg"
          onClick={closeModal}
        >
          <button
            onClick={closeModal}
            className="absolute top-10 right-20 z-10 p-2 rounded-full bg-black/20 hover:bg-black/40 transition-colors"
          >
            <X size={40} />
          </button>
          <div
            className="glass-card max-w-4xl w-full max-h-[90vh] overflow-y-auto p-0 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}

            {/* Modal Content */}
            <div className="p-6">
              {/* Header Section */}
              <div className="flex flex-col md:flex-row gap-6 mb-6">
                <img
                  src={selectedProject.imageUrl}
                  alt={selectedProject.title}
                  className="w-full md:w-1/3 h-48 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-2xl md:text-3xl font-bold">{selectedProject.title}</h3>
                    <span className={`px-3 py-1 text-sm rounded-full ml-4 ${selectedProject.status === 'Live Production' ? 'bg-green-500/20 text-green-400' :
                        selectedProject.status === 'In Development' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-blue-500/20 text-blue-400'
                      }`}>
                      {selectedProject.status}
                    </span>
                  </div>
                  <p className="text-lg text-accent-foreground mb-4">
                    {selectedProject.short_description}
                  </p>

                  {/* Project Meta Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar size={16} />
                      <span>{selectedProject.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users size={16} />
                      <span>{selectedProject.team_size} • {selectedProject.role}</span>
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedProject.links?.map((item: any, index: any) => (
                      <a
                        key={index}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Button variant="secondary" size="sm" className="flex items-center gap-2">
                          <ExternalLink size={14} />
                          <span>{item.name}</span>
                        </Button>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Detailed Description */}
              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-3">Project Overview</h4>
                <p className="text-accent-foreground leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* Features Section */}
              {selectedProject.features && (
                <div className="mb-6">
                  <h4 className="text-xl font-semibold mb-3">Key Features</h4>
                  <div className="grid md:grid-cols-2 gap-2">
                    {selectedProject.features.map((feature: string, index: number) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Achievements Section */}
              {selectedProject.achievements && (
                <div className="mb-6">
                  <h4 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <Award size={20} />
                    Key Achievements
                  </h4>
                  <div className="grid md:grid-cols-2 gap-2">
                    {selectedProject.achievements.map((achievement: string, index: number) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Platforms Section (for projects like GroceryPlus) */}
              {selectedProject.platforms && (
                <div className="mb-6">
                  <h4 className="text-xl font-semibold mb-3">Platform Architecture</h4>
                  <div className="grid gap-4">
                    {Object.entries(selectedProject.platforms).map(([key, platform]: [string, any]) => (
                      <div key={key} className="glass-card p-4">
                        <h5 className="font-semibold mb-2">{platform.name}</h5>
                        <p className="text-sm text-muted-foreground mb-3">{platform.description}</p>
                        <div className="grid md:grid-cols-2 gap-1">
                          {platform.features.slice(0, 6).map((feature: string, index: number) => (
                            <div key={index} className="flex items-center gap-2 text-xs">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technology Stack */}
              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-3">Technology Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech: string, techIndex: number) => (
                    <span
                      key={techIndex}
                      className="glass-tag px-3 py-1.5 text-sm rounded-full hover:scale-105 transition-transform"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Type & Category */}
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <div>
                  <span className="font-medium">Category: </span>
                  <span>{selectedProject.category}</span>
                </div>
                <div>
                  <span className="font-medium">Type: </span>
                  <span>{selectedProject.type}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects

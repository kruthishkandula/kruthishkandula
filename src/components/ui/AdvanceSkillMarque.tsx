'use client'

import { skillsData } from '@/data/portfolio'
import React, { useState } from 'react'

const AdvancedSkillsMarquee = () => {
  const [isPaused, setIsPaused] = useState(false)

  const MarqueeRow = ({ 
    skills, 
    direction = 'right', 
    speed = 'normal',
    delay = 0 
  }: {
    skills: any[]
    direction?: 'left' | 'right'
    speed?: 'slow' | 'normal' | 'fast'
    delay?: number
  }) => {
    const animationClass = `animate-scroll-${direction}-${speed}`
    
    return (
      <div 
        className="relative overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        style={{ animationDelay: `${delay}s` }}
      >
        <div className={`flex ${animationClass} ${isPaused ? 'pause-animation' : ''}`}>
          {/* First set */}
          <div className="flex space-x-4 min-w-max">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon
              return (
                <div 
                  key={`${direction}-1-${index}`}
                  className="flex items-center gap-3 px-6 py-3 mx-4 glass-card hover:scale-105 transition-all duration-300 group cursor-pointer"
                >
                  <IconComponent 
                    className="text-2xl group-hover:scale-110 transition-transform duration-300" 
                    style={{ color: skill.color }}
                  />
                  <span className="font-medium text-sm whitespace-nowrap group-hover:text-primary transition-colors">
                    {skill.name}
                  </span>
                </div>
              )
            })}
          </div>
          
          {/* Duplicate for seamless loop */}
          <div className="flex space-x-4 min-w-max">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon
              return (
                <div 
                  key={`${direction}-2-${index}`}
                  className="flex items-center gap-3 px-6 py-3 mx-4 glass-card hover:scale-105 transition-all duration-300 group cursor-pointer"
                >
                  <IconComponent 
                    className="text-2xl group-hover:scale-110 transition-transform duration-300" 
                    style={{ color: skill.color }}
                  />
                  <span className="font-medium text-sm whitespace-nowrap group-hover:text-primary transition-colors">
                    {skill.name}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }

  return (
    <section className="py-16 overflow-hidden bg-gradient-to-b from-background/50 to-muted/20">
      <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-4">
          Technologies and tools I work with to bring ideas to life
        </p>
        <p className="text-sm text-muted-foreground">
          Hover over any row to pause the animation
        </p>
      </div>

      <div className="space-y-8">
        <MarqueeRow 
          skills={skillsData.row1} 
          direction="right" 
          speed="normal"
          delay={0}
        />
        <MarqueeRow 
          skills={skillsData.row2} 
          direction="left" 
          speed="slow"
          delay={0.5}
        />
        <MarqueeRow 
          skills={skillsData.row3} 
          direction="right" 
          speed="fast"
          delay={1}
        />
      </div>
    </section>
  )
}

export default AdvancedSkillsMarquee

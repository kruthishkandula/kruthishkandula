'use client'

import { skillsData } from '@/data/portfolio'
import { useTheme } from 'next-themes'
import React from 'react'

interface SkillItemProps {
    skill: {
        name: string
        icon: React.ComponentType<any>
        color: string
        dark_color?: string
        light_color?: string
    }
}

const SkillItem: React.FC<SkillItemProps> = ({ skill }) => {
    const IconComponent = skill.icon
    const { theme } = useTheme()

    return (
        <div className="flex items-center gap-3 px-6 py-3 mx-4 glass-card hover:scale-105 transition-transform duration-300 group">
            <IconComponent
                className="text-2xl group-hover:scale-110 transition-transform duration-300"
                style={{ color: theme == 'dark' ? (skill.dark_color || skill.color) : (skill.light_color || skill.color) }}
            />
            <span className="font-medium text-sm whitespace-nowrap">
                {skill.name}
            </span>
        </div>
    )
}

const SkillsMarquee = () => {
    return (
        <section className="py-16 rounded-2xl overflow-hidden bg-gradient-to-b from-background/50 to-muted/20">
            <div className="space-y-8">
                {/* Row 1 - Left to Right */}
                <div className="relative">
                    <div className="flex animate-scroll-right">
                        {/* First set */}
                        <div className="flex space-x-4 min-w-max">
                            {skillsData.row1.map((skill, index) => (
                                <SkillItem key={`row1-1-${index}`} skill={skill} />
                            ))}
                        </div>
                        {/* Duplicate for seamless loop */}
                        <div className="flex space-x-4 min-w-max">
                            {skillsData.row1.map((skill, index) => (
                                <SkillItem key={`row1-2-${index}`} skill={skill} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Row 2 - Right to Left */}
                <div className="relative">
                    <div className="flex animate-scroll-left">
                        {/* First set */}
                        <div className="flex space-x-4 min-w-max">
                            {skillsData.row2.map((skill, index) => (
                                <SkillItem key={`row2-1-${index}`} skill={skill} />
                            ))}
                        </div>
                        {/* Duplicate for seamless loop */}
                        <div className="flex space-x-4 min-w-max">
                            {skillsData.row2.map((skill, index) => (
                                <SkillItem key={`row2-2-${index}`} skill={skill} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Row 3 - Left to Right */}
                <div className="relative">
                    <div className="flex animate-scroll-right-slow">
                        {/* First set */}
                        <div className="flex space-x-4 min-w-max">
                            {skillsData.row3.map((skill, index) => (
                                <SkillItem key={`row3-1-${index}`} skill={skill} />
                            ))}
                        </div>
                        {/* Duplicate for seamless loop */}
                        <div className="flex space-x-4 min-w-max">
                            {skillsData.row3.map((skill, index) => (
                                <SkillItem key={`row3-2-${index}`} skill={skill} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SkillsMarquee

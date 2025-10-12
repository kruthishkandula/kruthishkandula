'use client'

import { useTheme } from 'next-themes'
import {
    FaDownload,
    FaEnvelope,
    FaGithub,
    FaLinkedin,
    FaPhone,
    FaWhatsapp
} from 'react-icons/fa'

const SocialLinks = () => {
    const { theme } = useTheme()
    const socialLinks = [
        {
            name: 'LinkedIn',
            icon: FaLinkedin,
            url: 'https://linkedin.com/in/kruthish-kandula',
            color: '#0077B5',
            label: 'kruthish-kandula'
        },
        {
            name: 'GitHub',
            icon: FaGithub,
            url: 'https://github.com/kruthishkandula',
            color: '#333',
            label: 'kruthishkandula',
            dark_color: '#FFFFFF'
        },
        {
            name: 'Email',
            icon: FaEnvelope,
            url: 'mailto:kruthishkandula@gmail.com',
            color: '#EA4335',
            label: 'kruthishkandula@gmail.com',
        },
        {
            name: 'Phone',
            icon: FaPhone,
            url: 'tel:+918247298981',
            color: '#25D366',
            label: '+91 8247298981'
        },
        {
            name: 'Whatsapp',
            icon: FaWhatsapp,
            url: 'https://wa.me/918247298981?message=Hello%20Kruthish!',
            color: '#25D366',
            label: '+91 8247298981'
        },
    ]

    return (
        <div className="glass-card p-6">
            <div className="space-y-3 flex flex-row">
                {socialLinks.map((link, index) => {
                    const IconComponent = link.icon
                    return (
                        <a
                            key={index}
                            href={link.url}
                            target={link.name === 'Email' || link.name === 'Phone' ? '_self' : '_blank'}
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 p-3 rounded-lg glass-button hover:scale-105 transition-all duration-200 group"
                        >
                            <IconComponent
                                className="text-4xl group-hover:scale-120 transition-transform duration-200"
                                style={{ color: theme == 'dark' ? (link.dark_color || link.color) : link.color }}
                            />
                        </a>
                    )
                })}
            </div>

            {/* Resume Download */}
            <div className="mt-4 pt-4 border-t border-foreground/10">
                <a
                    href="/resume.pdf" // Add your resume PDF to public folder
                    download="Kruthish_Kandula_Resume.pdf"
                    className="flex items-center justify-center gap-2 w-full p-3 glass-button hover:scale-105 transition-all duration-200 group"
                >
                    <FaDownload className="text-primary group-hover:scale-140 transition-transform duration-200" />
                    <span className="font-medium">View Resume</span>
                </a>
            </div>
        </div>
    )
}

export default SocialLinks

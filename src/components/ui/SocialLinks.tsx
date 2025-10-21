'use client'

import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import {
    FaDownload,
    FaEnvelope,
    FaGithub,
    FaLinkedin,
    FaPhone,
    FaWhatsapp,
    FaTimes
} from 'react-icons/fa'

const SocialLinks = () => {
    const { theme } = useTheme()
    const [isResumeOpen, setIsResumeOpen] = useState(false)
    
    // Prevent background scrolling when modal is open
    useEffect(() => {
        if (isResumeOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        
        // Cleanup function to restore scrolling when component unmounts
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isResumeOpen])
    
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
            url: 'https://wa.me/918247298981',
            color: '#25D366',
            label: '+91 8247298981'
        },
    ]

    const handleResumeClick = (e: React.MouseEvent) => {
        e.preventDefault()
        setIsResumeOpen(true)
    }

    const closeResumeModal = () => {
        setIsResumeOpen(false)
    }

    const handleModalClick = (e: React.MouseEvent) => {
        // Prevent closing when clicking inside the modal content
        e.stopPropagation()
    }

    return (
        <>
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
                    <button
                        onClick={handleResumeClick}
                        className="flex items-center justify-center gap-2 w-full p-3 glass-button hover:scale-105 transition-all duration-200 group"
                    >
                        <FaDownload className="text-primary group-hover:scale-140 transition-transform duration-200" />
                        <span className="font-medium">View Resume</span>
                    </button>
                </div>
            </div>

            {/* Resume Modal Overlay */}
            {isResumeOpen && (
                <div 
                    onClick={closeResumeModal}  
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-sm overflow-hidden"
                >
                    <div 
                        onClick={handleModalClick}
                        className="relative w-[95vw] h-[95vh] max-w-6xl bg-white dark:bg-gray-900 rounded-lg shadow-2xl"
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeResumeModal}
                            className="absolute top-2 right-2 z-10 p-2 bg-red-500 hover:bg-red-600 text-white rounded-full transition-colors duration-200"
                        >
                            <FaTimes className="text-xl" />
                        </button>
                        
                        {/* Resume Content */}
                        <iframe
                            src="https://workdrive.zohopublic.in/file/s3q01bc8b8838419b44f9a3e19448719a54bd"
                            className="w-full h-full rounded-lg"
                            title="Resume"
                        />
                    </div>
                </div>
            )}
        </>
    )
}

export default SocialLinks

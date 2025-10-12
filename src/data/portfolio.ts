// lib/skills-data.tsx
import {
    SiExpress,
    SiFirebase,
    SiGit,
    SiGraphql,
    SiJavascript,
    SiMongodb,
    SiNextdotjs,
    SiNodedotjs,
    SiPostgresql,
    SiPython,
    SiReact,
    SiReactquery,
    SiRedux,
    SiTailwindcss,
    SiTypescript
} from 'react-icons/si'
import { VscAzure } from 'react-icons/vsc'

export const portfolio_details = {
    name: "Kruthish kandula",
    title: "Full Stack Developer & Mobile Application Developer",
    email: "kruthishkandula@gmail.com"
}

export const about_details = {
    description: "I'm a passionate Full Stack Developer and Mobile Application Developer with expertise in building dynamic and responsive web applications. I love creating seamless user experiences and bringing innovative ideas to life through code.",
}


export const skillsData = {
    row1: [
        { name: 'React Native', icon: SiReact, color: '#61DAFB' },
        { name: 'Next.js', icon: SiNextdotjs, color: '#000000', dark_color: 'white' },
        { name: 'React', icon: SiReact, color: '#61DAFB' },
        { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
        { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
        { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    ],
    row2: [
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
        { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
        { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
        { name: 'Azure', icon: VscAzure, color: '#2496ED' },
        { name: 'GraphQL', icon: SiGraphql, color: '#E10098' },
        { name: 'Redux', icon: SiRedux, color: '#764ABC' },
    ],
    row3: [
        { name: 'Express', icon: SiExpress, color: '#000000', dark_color: 'white' },
        { name: 'Git', icon: SiGit, color: '#F05032' },
        { name: 'Python', icon: SiPython, color: '#3776AB' },
        { name: 'React Query', icon: SiReactquery, color: '#FF4154' },
    ]
}

// https://i.postimg.cc/SRvmHd7f/PHOTO-2025-10-12-20-54-45.jpg
// https://i.postimg.cc/CLRhbyS7/PHOTO-2025-10-12-20-55-18.jpg
// https://i.postimg.cc/3Jk82MYt/PHOTO-2025-10-12-20-56-17.jpg
// https://i.postimg.cc/nVRVsVbY/PHOTO-2025-10-12-20-57-53.jpg
// https://i.postimg.cc/4dFdTXXv/6313a1f4-d346-4a16-9002-322cc9d5c799.jpg
// https://i.postimg.cc/bYCYGYc0/PHOTO-2025-10-12-20-59-42.jpg

export const ProjectsData = [
    {
        id: 0,
        title: "MTN MyMoMo",
        short_description: "Financial management app for mobile money services across African markets",
        description: "MyMoMo is a comprehensive fintech platform that enables users to send and receive money, pay bills, top up airtime and data, and manage various financial transactions. The application serves as an all-in-one solution for mobile banking, merchant payments, transport tickets, and food ordering. It features seamless bank account integration for local and international money transfers, serving over 2M users across 5 African regions with $50M+ in monthly transactions.",
        category: "Fintech MobileMoney",
        type: "Enterprise Fintech",
        imageUrl: "https://play-lh.googleusercontent.com/ERrlrldJ_FFtgyw9YQMk7FHzjSGtxYBwghXQoKkALBAalSIByjcmy_mxNWs8DgSl2xB7=w5120-h2880-rw",
        status: "Live Production",
        duration: "Jan 2024 - Present",
        role: "Senior Software Engineer & Team Lead",
        team_size: "8 developers",
        links: [
            {
                name: 'iOS App Store',
                link: 'https://apps.apple.com/in/app/momo-app/id6532622230',
                type: 'store'
            },
            {
                name: 'Google Play Store',
                link: 'https://play.google.com/store/apps/details?id=mtnft.momo.consumer&hl=en',
                type: 'store'
            },
            {
                name: 'Huawei AppGallery',
                link: 'https://appgallery.huawei.com/app/111599415',
                type: 'store'
            }
        ],
        tech: ["React Native", "TypeScript", "Redux", "Azure CI/CD", "Firebase", "Node.js", "Express", "Repack", "Module Federation", "Fintech APIs"],
        features: [
            "Multi-currency transactions",
            "Biometric authentication",
            "QR code payments",
            "Real-time transaction history",
            "International remittances",
            "Bill payment integration",
            "Merchant payment system"
        ],
        achievements: [
            "Serving 2M+ active users",
            "Processing $50M+ monthly transactions",
            "99.9% system uptime achieved",
            "Supporting 8 African languages"
        ]
    },
    {
        id: 1,
        title: "GroceryPlus - Smart Grocery Delivery",
        short_description: "Comprehensive grocery delivery platform with multi-platform architecture",
        description: "GroceryPlus is a full-stack e-commerce solution that revolutionizes grocery shopping through seamless mobile and web experiences. The platform features real-time inventory management, AI-powered product recommendations, scheduled deliveries, and integrated payment systems. It consists of three interconnected applications: customer mobile app, delivery partner app, and comprehensive admin web portal, all powered by modern microservices architecture.",
        category: "E-commerce Platform",
        type: "Multi-Platform Application",
        imageUrl: "https://i.postimg.cc/bYCYGYc0/PHOTO-2025-10-12-20-59-42.jpg",
        status: "In Development",
        duration: "Mar 2024 - Oct 2024",
        role: "Full-Stack Developer",
        team_size: "Solo Project",
        links: [
            {
                name: 'Customer iOS',
                link: 'https://apps.apple.com/app/groceryplus',
                type: 'store'
            },
            {
                name: 'Customer Android',
                link: 'https://play.google.com/store/apps/details?id=com.groceryplus.customer',
                type: 'store'
            },
            {
                name: 'Admin Portal',
                link: 'https://groceryadminportal.onrender.com/',
                type: 'web'
            },
            {
                name: 'GitHub Repository',
                link: 'https://github.com/kruthish/groceryplus',
                type: 'source'
            }
        ],
        tech: ["React Native", "TypeScript", "Zustand", "Expo Framework", "React.js", "Node.js", "Express.js", "Strapi CMS", "PostgreSQL", "Drizzle ORM", "Neon Serverless", "Firebase", "Azure CI/CD", "Jest Testing"],
        features: [
            "Real-time order tracking",
            "AI-powered recommendations",
            "Multi-payment gateway integration",
            "Inventory management system",
            "Delivery route optimization",
            "Push notifications",
            "Voice search functionality"
        ],
        achievements: [
            "Multi-platform architecture implemented",
            "Real-time synchronization across platforms",
            "Scalable microservices backend",
            "Comprehensive admin dashboard"
        ]
    },
    {
        id: 2,
        title: "IPL Cricket Dashboard",
        short_description: "Interactive dashboard showcasing IPL teams, matches, and player statistics",
        description: "A comprehensive cricket analytics dashboard that provides detailed insights into IPL teams, match results, and player performance statistics. The application features dynamic team pages, match history, player profiles, and statistical analysis with interactive charts and real-time data visualization. Built with modern React architecture and responsive design for optimal user experience across devices.",
        category: "Web Application",
        type: "Sports Analytics Dashboard",
        imageUrl: "https://i.postimg.cc/SRvmHd7f/PHOTO-2025-10-12-20-54-45.jpg",
        status: "Completed",
        duration: "Feb 2024 - Mar 2024",
        role: "Frontend Developer",
        team_size: "Solo Project",
        links: [
            {
                name: 'Live Demo',
                link: 'https://kandulareact24.ccbp.tech/',
                type: 'demo'
            },
            {
                name: 'GitHub Repository',
                link: 'https://github.com/kruthish/ipl-dashboard',
                type: 'source'
            }
        ],
        tech: ["React.js", "TypeScript", "Tailwind CSS", "Chart.js", "REST APIs", "Responsive Design"],
        features: [
            "Team-wise match statistics",
            "Player performance analysis",
            "Interactive data visualization",
            "Responsive design",
            "Search and filter functionality",
            "Match history tracking"
        ],
        achievements: [
            "Dynamic team switching",
            "Real-time statistics display",
            "Mobile-optimized interface",
            "Performance analytics implementation"
        ]
    },
    {
        id: 3,
        title: "Emoji Memory Game",
        short_description: "Interactive memory game challenging users to identify unique emojis",
        description: "An engaging memory-based game application where users test their memory skills by selecting non-identical emojis from a randomized grid. The game features progressive difficulty levels, score tracking, timer functionality, and animated interactions. Built with React hooks for state management and includes sound effects, visual feedback, and responsive design for seamless gameplay across all devices.",
        category: "Game Application",
        type: "Interactive Web Game",
        imageUrl: "https://i.postimg.cc/CLRhbyS7/PHOTO-2025-10-12-20-55-18.jpg",
        status: "Completed",
        duration: "Jan 2024 - Feb 2024",
        role: "Frontend Developer",
        team_size: "Solo Project",
        links: [
            {
                name: 'Play Game',
                link: 'https://kandulareact18.ccbp.tech/',
                type: 'demo'
            },
            {
                name: 'Source Code',
                link: 'https://github.com/kruthish/emoji-game',
                type: 'source'
            }
        ],
        tech: ["React.js", "TypeScript", "Tailwind CSS", "CSS Animations", "Local Storage", "Game Logic"],
        features: [
            "Progressive difficulty levels",
            "Score tracking system",
            "Timer functionality",
            "Animated interactions",
            "Sound effects",
            "Responsive gaming interface"
        ],
        achievements: [
            "Smooth gameplay experience",
            "Mobile-optimized controls",
            "Performance-optimized animations",
            "Engaging user interactions"
        ]
    },
    {
        id: 4,
        title: "Cultural Events Registration Portal",
        short_description: "Event management system for cultural and dance event registrations",
        description: "A comprehensive event management platform designed for organizing and managing cultural events, dance competitions, and similar activities. The application enables event organizers to create events, manage registrations, track participants, and handle event logistics. Features include participant registration forms, event scheduling, notification systems, and detailed reporting for event analytics and management.",
        category: "Event Management",
        type: "Registration Platform",
        imageUrl: "https://i.postimg.cc/3Jk82MYt/PHOTO-2025-10-12-20-56-17.jpg",
        status: "Completed",
        duration: "Dec 2023 - Jan 2024",
        role: "Full-Stack Developer",
        team_size: "Solo Project",
        links: [
            {
                name: 'Live Application',
                link: 'https://kandulareact26.ccbp.tech/',
                type: 'demo'
            },
            {
                name: 'Project Repository',
                link: 'https://github.com/kruthish/events-registration',
                type: 'source'
            }
        ],
        tech: ["React.js", "TypeScript", "Tailwind CSS", "Form Validation", "Local Storage", "Date Management"],
        features: [
            "Multi-event registration system",
            "Participant management",
            "Event scheduling interface",
            "Registration form builder",
            "Email notification system",
            "Event analytics dashboard"
        ],
        achievements: [
            "Streamlined registration process",
            "Automated event management",
            "User-friendly interface design",
            "Efficient data management"
        ]
    },
    {
        id: 5,
        title: "Smart Appointment Scheduler",
        short_description: "Digital appointment management system with scheduling and reminder features",
        description: "An intelligent appointment scheduling application that simplifies the process of booking, managing, and tracking appointments. The system features calendar integration, automated reminders, conflict detection, and multi-user support. Designed for healthcare providers, service professionals, and businesses requiring efficient appointment management with real-time availability updates and customer notification systems.",
        category: "Productivity Application",
        type: "Scheduling System",
        imageUrl: "https://i.postimg.cc/nVRVsVbY/PHOTO-2025-10-12-20-57-53.jpg",
        status: "Completed",
        duration: "Nov 2023 - Dec 2023",
        role: "Frontend Developer",
        team_size: "Solo Project",
        links: [
            {
                name: 'Try Demo',
                link: 'https://kandulareact16.ccbp.tech/',
                type: 'demo'
            },
            {
                name: 'View Code',
                link: 'https://github.com/kruthish/appointment-scheduler',
                type: 'source'
            }
        ],
        tech: ["React.js", "TypeScript", "Tailwind CSS", "Date Picker", "Calendar Integration", "Form Management"],
        features: [
            "Calendar-based scheduling",
            "Conflict detection system",
            "Automated reminder notifications",
            "Multi-user appointment management",
            "Time slot availability tracking",
            "Appointment history management"
        ],
        achievements: [
            "Intuitive scheduling interface",
            "Zero-conflict appointment booking",
            "Efficient time management",
            "Professional dashboard design"
        ]
    },
    {
        id: 6,
        title: "Personal Finance Manager",
        short_description: "Comprehensive expense tracking and savings management application",
        description: "A personal finance management application that helps users track expenses, manage savings, set financial goals, and analyze spending patterns. The application provides detailed insights through interactive charts, budget planning tools, category-wise expense breakdown, and financial goal tracking. Features include transaction categorization, monthly/yearly reports, and personalized financial recommendations for better money management.",
        category: "Finance Application",
        type: "Personal Finance Tool",
        imageUrl: "https://i.postimg.cc/4dFdTXXv/6313a1f4-d346-4a16-9002-322cc9d5c799.jpg",
        status: "Completed",
        duration: "Oct 2023 - Nov 2023",
        role: "Frontend Developer",
        team_size: "Solo Project",
        links: [
            {
                name: 'Launch App',
                link: 'https://kandulareact17.ccbp.tech/',
                type: 'demo'
            },
            {
                name: 'GitHub Code',
                link: 'https://github.com/kruthish/money-manager',
                type: 'source'
            }
        ],
        tech: ["React.js", "TypeScript", "Tailwind CSS", "Chart.js", "Local Storage", "Financial Calculations"],
        features: [
            "Expense categorization system",
            "Savings goal tracking",
            "Interactive financial charts",
            "Budget planning tools",
            "Monthly/yearly expense reports",
            "Transaction history management"
        ],
        achievements: [
            "Comprehensive expense tracking",
            "Visual financial analytics",
            "User-friendly money management",
            "Automated calculation system"
        ]
    }
];




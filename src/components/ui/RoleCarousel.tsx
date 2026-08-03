'use client'

const SimpleBadgeScroll = () => {
  const badges = [
    "Senior Full-Stack Engineer",
    "4+ Years Experience", 
    "React Native Expert",
    "Team Lead - 8 Developers",
    "5M+ Users Served",
    "$50M+ Monthly Transactions",
    "Module Federation Specialist",
    "FinTech Developer",
    "8 African Markets",
    "Next.js & Node.js",
    "TypeScript Expert",
    "Mobile Banking Solutions"
  ]

  return (
    <div className="py-4 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Scrolling Badges */}
        <div className="badge-scroll-container overflow-hidden py-8">
          <div className="badge-scroll flex gap-4 animate-scroll">
            {/* First set */}
            {badges.map((badge, index) => (
              <div 
                key={`first-${index}`}
                className="badge-item px-4 py-2 bg-yellow-600/10 text-yellow-300 rounded-full whitespace-nowrap text-sm font-medium border border-yellow-600/20 hover:bg-yellow-600/20 transition-colors"
              >
                {badge}
              </div>
            ))}
            {/* Duplicate for seamless scroll */}
            {badges.map((badge, index) => (
              <div 
                key={`second-${index}`}
                className="badge-item px-4 py-2 bg-primary/10 text-primary rounded-full whitespace-nowrap text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-colors"
              >
                {badge}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SimpleBadgeScroll

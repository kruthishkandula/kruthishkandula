import SkillsMarquee from "./ui/SkillsMarque"

const About = () => {
  return (
    <section id="about" className="min-h-screen py-20 px-6">
      <div className="container mx-auto">
        <div className="glass-card p-8 md:p-12 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Description */}
            <div className="lg:col-span-2">
              <div className="glass-card p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Who I Am
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm a <span className="text-primary font-medium">Senior Full-Stack Engineer</span> at Comviva Technologies with <span className="text-primary font-medium">3+ years</span> of experience building scalable mobile and web applications. Currently leading a team of 8 developers across multiple time zones, I specialize in React Native, Next.js, and cutting-edge micro-frontend architectures.
                </p>
              </div>

              <div className="glass-card p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  What I Build
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  I've built <span className="text-primary font-medium">fintech applications serving 2M+ users</span> across 5 African markets, processing over <span className="text-primary font-medium">$50M monthly transactions</span>. My expertise spans from enterprise mobile apps published on all major app stores to modern web applications with 99.9% uptime.
                </p>
              </div>

              <div className="glass-card p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  My Passion
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm passionate about <span className="text-primary font-medium">Module Federation and micro-frontend architectures</span>, helping organizations modernize legacy systems with 80% performance improvements. I love mentoring teams and implementing CI/CD solutions that streamline development processes.
                </p>
              </div>
            </div>

            {/* Stats & Contact */}
            <div className="space-y-6">
              {/* Quick Stats */}
              <div className="glass-card p-6">
                <h3 className="text-lg font-semibold mb-4">Quick Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Experience</span>
                    <span className="font-medium">3+ Years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Team Lead</span>
                    <span className="font-medium">8 Developers</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Users Served</span>
                    <span className="font-medium">2M+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Location</span>
                    <span className="font-medium">Hyderabad, India</span>
                  </div>
                </div>
              </div>

              {/* Current Focus */}
              <div className="glass-card p-6">
                <h3 className="text-lg font-semibold mb-4">Major Contributions</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-muted-foreground">Module Federation MF1 to MF2</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-muted-foreground">React Native 0.72.0 to 0.81.1</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-muted-foreground">Rspack Configurations to New Repack</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-fuchsia-400 rounded-full animate-pulse"></div>
                    <span className="text-sm text-muted-foreground">Built Reusable components</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <SkillsMarquee />
        </div>
      </div>
    </section>
  )
}

export default About

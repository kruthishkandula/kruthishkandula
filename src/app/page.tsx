import About from '@/components/about'
import Contact from '@/components/contact'
import Home from '@/components/home'
import Projects from '@/components/projects'
import Copyright from '@/components/ui/CopyRight'
import Header from '@/components/ui/header/header'
import { ModeToggle } from '@/components/ui/theme/mode-toggle'

export default function Dashboard() {
  return (
    <main className="relative">
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
      <div className='md:hidden fixed top-10 right-10' >
        <ModeToggle />
      </div>
      <Copyright />
    </main>
  )
}

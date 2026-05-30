'use client'

import { portfolio_details } from "@/data/portfolio"
import { initFirebase } from '@/lib/firebaseClient'
import { useEffect } from 'react'
import RoleCarousel from "./ui/RoleCarousel"
import { Button } from "./ui/button"
import { getAnalytics, logEvent } from "firebase/analytics";
import analyticsEvents from '@/lib/analytics.json';

const Home = () => {

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  useEffect(() => {
    try {
      initFirebase().then((analytics) => {
        if (analytics) {
          logEvent(analytics, analyticsEvents.VIEW_HOME);
          console.log('Logged:', analyticsEvents.VIEW_HOME);
        } else {
          console.warn('Firebase Analytics not initialized or not supported.');
        }
      }).catch((err) => {
        console.error('Firebase Analytics error:', err);
      });
    } catch (err) {
      console.error('Firebase Analytics error:', err);
    }
    // Global handler for unhandled promise rejections
    const handleRejection = (event: PromiseRejectionEvent) => {
      console.error('Unhandled error:', event.reason);
    };
    globalThis.addEventListener('unhandledrejection', handleRejection);
    return () => {
      globalThis.removeEventListener('unhandledrejection', handleRejection);
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-400/40 via-yellow-500/20 to-green-500/20 dark:from-blue-600/20 dark:via-yellow-700/5 dark:to-greeen-600/20"></div>

      <div className="glass-card p-4 md:p-12 text-center max-w-dvw mx-auto relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r to-red-600 from-yellow-600 bg-clip-text text-transparent">
          Hello, I'm {portfolio_details?.name}
        </h1>
        <p className="text-xl text-center wrap-break-word md:text-2xl mb-8 text-muted-foreground">
          {portfolio_details?.title}
        </p>
        <RoleCarousel />
        <Button variant={'default'} onClick={() => {
          const analytics = getAnalytics();
          if (analytics) {
            logEvent(analytics, analyticsEvents.VIEW_PROJECTS);
            console.log('Logged:', analyticsEvents.VIEW_PROJECTS);
          } else {
            console.warn('Firebase Analytics not initialized or not supported.');
          }
          scrollToSection('projects')
        }} className="glass-Button bg-yellow-500 dark:bg-yellow-700 px-8 py-3 rounded-full font-semibold hover:scale-130 transition-transform duration-500">
          View My Work
        </Button>
      </div>
    </section>
  )
}

export default Home

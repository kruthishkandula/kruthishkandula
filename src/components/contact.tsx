'use client'

import SocialLinks from "./ui/SocialLinks"
import analyticsEvents from '@/lib/analytics.json';
import { useEffect } from 'react';
import { logEvent } from 'firebase/analytics';
import { initFirebase } from '@/lib/firebaseClient';

const Contact = () => {
  useEffect(() => {
    initFirebase().then((analytics) => {
      if (analytics) {
        logEvent(analytics, analyticsEvents.VIEW_CONTACT);
        console.log('Logged:', analyticsEvents.VIEW_CONTACT);
      }
    });
  }, []);

  return (
    <section id="contact" className="min-h-3/4 ">
      <div className="container py-20 px-6 mx-auto">
        <div className="glass-card flex flex-col justify-between items-center p-8 md:p-12 max-w-2xl mx-auto text-center">
          <div className="flex flex-col" >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">Get In Touch</h2>
            <p className="text-lg mb-8 text-muted-foreground">
              I'm always open to discussing new opportunities and interesting projects.
            </p>
          </div>
          <SocialLinks />
        </div>
      </div>
    </section>
  )
}

export default Contact

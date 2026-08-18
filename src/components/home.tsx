'use client';

import { portfolio_details } from '@/data/portfolio';
import { initFirebase } from '@/lib/firebaseClient';
import analyticsEvents from '@/lib/analytics.json';

import { getAnalytics, logEvent } from 'firebase/analytics';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Mail,
  Sparkles,
} from 'lucide-react';
import { useEffect, useState } from 'react';

import RoleCarousel from './ui/RoleCarousel';
import { Button } from './ui/button';

/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */

interface HomeProps {
  scrollToSection: (id: number) => void;
}

/* -------------------------------------------------------------------------- */
/*                              Motion Variants                               */
/* -------------------------------------------------------------------------- */

const containerVariants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const nameVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.97,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

/* -------------------------------------------------------------------------- */
/*                                   Home                                     */
/* -------------------------------------------------------------------------- */

const Home = ({
  scrollToSection,
}: HomeProps) => {
  const [analytics, setAnalytics] =
    useState<ReturnType<typeof getAnalytics> | null>(null);

  /* ------------------------------------------------------------------------ */
  /*                              Analytics                                   */
  /* ------------------------------------------------------------------------ */

  useEffect(() => {
    const initializeAnalytics = async () => {
      try {
        const analyticsInstance = await initFirebase();

        if (!analyticsInstance) {
          return;
        }

        setAnalytics(analyticsInstance);

        logEvent(
          analyticsInstance,
          analyticsEvents.VIEW_HOME
        );
      } catch (error) {
        console.error(
          'Firebase Analytics initialization failed:',
          error
        );
      }
    };

    initializeAnalytics();

    const handleRejection = (
      event: PromiseRejectionEvent
    ) => {
      console.error(
        'Unhandled promise rejection:',
        event.reason
      );
    };

    globalThis.addEventListener(
      'unhandledrejection',
      handleRejection
    );

    return () => {
      globalThis.removeEventListener(
        'unhandledrejection',
        handleRejection
      );
    };
  }, []);

  /* ------------------------------------------------------------------------ */
  /*                              Navigation                                  */
  /* ------------------------------------------------------------------------ */

  const handleViewProjects = () => {
    if (analytics) {
      logEvent(
        analytics,
        analyticsEvents.VIEW_PROJECTS
      );
    }

    scrollToSection(2);
  };

  const handleContact = () => {
    if (analytics) {
      logEvent(
        analytics,
        analyticsEvents.VIEW_CONTACT
      );
    }

    scrollToSection(3);
  };

  /* ------------------------------------------------------------------------ */
  /*                                  Render                                  */
  /* ------------------------------------------------------------------------ */

  return (
    <section
      id="home"
      className="
        relative
        flex
        min-h-screen
        items-start
        justify-start
        overflow-hidden
        px-3
        md:px-6
        py-5
      "
    >
      {/* ================================================================ */}
      {/*                      BACKGROUND EFFECTS                          */}
      {/* ================================================================ */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[42%]
          h-[500px]
          w-[70%]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-gradient-to-b
          from-violet-500/[0.08]
          to-transparent
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[5%]
          top-[20%]
          h-[280px]
          w-[280px]
          rounded-full
          bg-gradient-radial
          from-cyan-400/[0.04]
          to-transparent
        "
      />

      {/* ================================================================ */}
      {/*                       MAIN HERO CONTAINER                        */}
      {/* ================================================================ */}

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-7xl
          overflow-hidden
          rounded-[32px]
          border
          border-white/10
          bg-black/[0.16]
          px-6
          py-16
          text-center
          shadow-[0_24px_80px_rgba(0,0,0,0.18)]
          backdrop-blur-xl
          md:px-12
          md:py-20
          lg:px-16
          lg:py-24
        "
      >
        {/* -------------------------------------------------------------- */}
        {/*                       INNER GLOW                               */}
        {/* -------------------------------------------------------------- */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-0
            h-[220px]
            w-[55%]
            -translate-x-1/2
            bg-gradient-to-b
            from-violet-400/[0.06]
            to-transparent
          "
        />

        {/* -------------------------------------------------------------- */}
        {/*                         CONTENT                                */}
        {/* -------------------------------------------------------------- */}

        <div
          className="
            relative
            z-10
            mx-auto
            flex
            max-w-5xl
            flex-col
            items-center
          "
        >
          {/* ============================================================ */}
          {/*                         EYEBROW                              */}
          {/* ============================================================ */}

          <motion.div
            variants={itemVariants}
            className="
              mb-6
              flex
              items-center
              gap-2
              rounded-full
              border
              border-violet-400/[0.14]
              bg-violet-400/[0.06]
              px-4
              py-2
              backdrop-blur-md
            "
          >
            <Sparkles
              size={14}
              className="text-violet-300"
            />

            <span
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.16em]
                text-violet-300
              "
            >
              Full-Stack Software Engineer
            </span>
          </motion.div>

          {/* ============================================================ */}
          {/*                       MAIN HEADING                           */}
          {/* ============================================================ */}

          <motion.h1
            variants={nameVariants}
            className="
              max-w-5xl
              text-4xl
              font-bold
              leading-[1.08]
              tracking-[-0.035em]
              text-white
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
            "
          >
            <span>Hello, I&apos;m </span>

            <span
              className="
                bg-gradient-to-r
                from-violet-300
                via-purple-200
                to-cyan-200
                bg-clip-text
                text-transparent
              "
            >
              {portfolio_details?.name}
            </span>
          </motion.h1>

          {/* ============================================================ */}
          {/*                         TITLE                                */}
          {/* ============================================================ */}

          <motion.p
            variants={itemVariants}
            className="
              mt-6
              max-w-3xl
              text-base
              font-medium
              leading-7
              text-white/70
              md:text-xl
              md:leading-8
            "
          >
            {portfolio_details?.title}
          </motion.p>

          {/* ============================================================ */}
          {/*                      ROLE CAROUSEL                           */}
          {/* ============================================================ */}

          <motion.div
            variants={itemVariants}
            className="
              mt-4
              flex
              min-h-[50px]
              w-full
              items-center
              justify-center
            "
          >
            <RoleCarousel />
          </motion.div>

          {/* ============================================================ */}
          {/*                           CTAs                               */}
          {/* ============================================================ */}

          <motion.div
            variants={itemVariants}
            className="
              mt-8
              flex
              w-full
              flex-col
              items-center
              justify-center
              gap-3
              sm:w-auto
              sm:flex-row
              sm:gap-4
            "
          >
            {/* Primary CTA */}
            <Button
              variant="default"
              onClick={handleViewProjects}
              className="
                group
                flex
                h-12
                w-full
                items-center
                justify-center
                gap-2
                rounded-full
                border
                border-violet-300/20
                bg-violet-500
                px-7
                text-sm
                font-semibold
                text-white
                shadow-[0_10px_30px_rgba(139,92,246,0.22)]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-violet-400
                hover:shadow-[0_14px_40px_rgba(139,92,246,0.32)]
                sm:w-auto
              "
            >
              <span>View My Work</span>

              <ArrowRight
                size={16}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </Button>

            {/* Secondary CTA */}
            <Button
              variant="default"
              onClick={handleContact}
              className="
                group
                flex
                h-12
                w-full
                items-center
                justify-center
                gap-2
                rounded-full
                border
                border-white/[0.12]
                bg-white/[0.045]
                px-7
                text-sm
                font-semibold
                text-white/85
                backdrop-blur-md
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:border-violet-400/25
                hover:bg-white/[0.08]
                hover:text-white
                sm:w-auto
              "
            >
              <Mail
                size={16}
                className="
                  text-cyan-200
                  transition-transform
                  duration-300
                  group-hover:scale-110
                "
              />

              <span>Contact Me</span>
            </Button>
          </motion.div>

          {/* ============================================================ */}
          {/*                    SMALL AVAILABILITY                        */}
          {/* ============================================================ */}

          <motion.div
            variants={itemVariants}
            className="
              mt-8
              flex
              items-center
              gap-2
              text-xs
              text-white/50
            "
          >
            <span
              className="
                h-2
                w-2
                rounded-full
                bg-emerald-400
                shadow-[0_0_9px_rgba(52,211,153,0.75)]
              "
            />

            <span>
              Open to new opportunities
            </span>
          </motion.div>
        </div>

        {/* ================================================================ */}
        {/*                       BOTTOM ACCENT                              */}
        {/* ================================================================ */}

        <div
          className="
            pointer-events-none
            absolute
            bottom-0
            left-1/2
            h-px
            w-1/3
            -translate-x-1/2
            bg-gradient-to-r
            from-transparent
            via-violet-400/60
            to-transparent
          "
        />
      </motion.div>
    </section>
  );
};

export default Home;
'use client';

import { initFirebase } from '@/lib/firebaseClient';
import analyticsEvents from '@/lib/analytics.json';

import { getAnalytics, logEvent } from 'firebase/analytics';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import {
  FaDownload,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPhone,
  FaWhatsapp,
} from 'react-icons/fa';

/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */

interface SocialLinksProps {
  onResumeOpen: () => void;
  onResumeClose: () => void;
}

interface SocialLink {
  name: string;
  icon: React.ComponentType<{
    className?: string;
    style?: React.CSSProperties;
  }>;
  url: string;
  color: string;
  darkColor?: string;
  label: string;
  openInNewTab: boolean;
}

/* -------------------------------------------------------------------------- */
/*                              Social Links Data                             */
/* -------------------------------------------------------------------------- */

const socialLinks: SocialLink[] = [
  {
    name: 'LinkedIn',
    icon: FaLinkedin,
    url: 'https://linkedin.com/in/kruthish-kandula',
    color: '#0077B5',
    label: 'LinkedIn',
    openInNewTab: true,
  },
  {
    name: 'GitHub',
    icon: FaGithub,
    url: 'https://github.com/kruthishkandula',
    color: '#181717',
    darkColor: 'rgb(24, 23, 23)',
    label: 'GitHub',
    openInNewTab: true,
  },
  {
    name: 'Email',
    icon: FaEnvelope,
    url: 'mailto:kruthishkandula@gmail.com',
    color: '#EA4335',
    label: 'Email',
    openInNewTab: false,
  },
  {
    name: 'Phone',
    icon: FaPhone,
    url: 'tel:+918247298981',
    color: '#22C55E',
    label: 'Phone',
    openInNewTab: false,
  },
  {
    name: 'WhatsApp',
    icon: FaWhatsapp,
    url: 'https://wa.me/918247298981',
    color: '#25D366',
    label: 'WhatsApp',
    openInNewTab: true,
  },
];

/* -------------------------------------------------------------------------- */
/*                              Motion Variants                               */
/* -------------------------------------------------------------------------- */

const containerVariants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 10,
    scale: 0.95,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

/* -------------------------------------------------------------------------- */
/*                              Social Links                                  */
/* -------------------------------------------------------------------------- */

const SocialLinks = ({
  onResumeOpen,
  onResumeClose: _onResumeClose,
}: SocialLinksProps) => {
  const { resolvedTheme } = useTheme();

  const [analytics, setAnalytics] =
    useState<ReturnType<typeof getAnalytics> | null>(null);

  /* ------------------------------------------------------------------------ */
  /*                              Analytics                                   */
  /* ------------------------------------------------------------------------ */

  useEffect(() => {
    const initializeAnalytics = async () => {
      try {
        const analyticsInstance = await initFirebase();

        if (analyticsInstance) {
          setAnalytics(analyticsInstance);
        }
      } catch (error) {
        console.error(
          'Firebase initialization error:',
          error
        );
      }
    };

    initializeAnalytics();
  }, []);

  /* ------------------------------------------------------------------------ */
  /*                              Icon Color                                  */
  /* ------------------------------------------------------------------------ */

  const getIconColor = (link: SocialLink): string => {
    return link.color;
  };

  /* ------------------------------------------------------------------------ */
  /*                             Social Click                                 */
  /* ------------------------------------------------------------------------ */

  const handleSocialClick = (link: SocialLink) => {
    if (!analytics) {
      return;
    }

    logEvent(
      analytics,
      analyticsEvents.CLICK_SOCIAL_LINK,
      {
        name: link.name,
        url: link.url,
      }
    );
  };

  /* ------------------------------------------------------------------------ */
  /*                             Resume Click                                 */
  /* ------------------------------------------------------------------------ */

  const handleResumeClick = () => {
    if (analytics) {
      logEvent(
        analytics,
        analyticsEvents.CLICK_DOWNLOAD_RESUME
      );
    }

    onResumeOpen();
  };

  /* ------------------------------------------------------------------------ */
  /*                                  Render                                  */
  /* ------------------------------------------------------------------------ */

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.3,
      }}
      variants={containerVariants}
      className="
        w-full
        max-w-xl
        rounded-2xl
        border
        border-white/[0.08]
        bg-white/[0.035]
        p-4
        backdrop-blur-md
        sm:p-5
      "
    >
      {/* ================================================================ */}
      {/*                         SOCIAL ICONS                             */}
      {/* ================================================================ */}

      <div
        className="
          flex
          flex-wrap
          items-center
          justify-center
          gap-3
        "
      >
        {socialLinks.map((link) => {
          const IconComponent = link.icon;
          const iconColor = getIconColor(link);

          return (
            <motion.a
              key={link.name}
              variants={itemVariants}
              href={link.url}
              target={
                link.openInNewTab
                  ? '_blank'
                  : '_self'
              }
              rel={
                link.openInNewTab
                  ? 'noopener noreferrer'
                  : undefined
              }
              aria-label={link.label}
              title={link.label}
              onClick={() => handleSocialClick(link)}
              whileHover={{
                y: -4,
                scale: 1.06,
              }}
              whileTap={{
                scale: 0.94,
              }}
              transition={{
                duration: 0.2,
                ease: 'easeOut',
              }}
              className="
                group
                relative
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-xl
                border
                border-white/[0.08]
                bg-white/[0.045]
                backdrop-blur-md
                transition-colors
                duration-300
                hover:border-violet-400/25
                hover:bg-white/[0.09]
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-violet-400/60
                sm:h-14
                sm:w-14
              "
            >
              {/* Hover glow */}
              <span
                className="
                  pointer-events-none
                  absolute
                  inset-1
                  rounded-lg
                  bg-violet-400/0
                  transition-colors
                  duration-300
                  group-hover:bg-violet-400/[0.12]
                "
              />

              <IconComponent
                className="
                  relative
                  z-10
                  text-xl
                  transition-transform
                  duration-300
                  group-hover:scale-110
                  sm:text-2xl
                "
                style={{
                  color: iconColor,
                }}
              />

              {/* Bottom accent */}
              <span
                className="
                  absolute
                  bottom-1
                  left-1/2
                  h-px
                  w-0
                  -translate-x-1/2
                  rounded-full
                  bg-violet-300
                  transition-all
                  duration-300
                  group-hover:w-5
                "
              />
            </motion.a>
          );
        })}
      </div>

      {/* ================================================================ */}
      {/*                           DIVIDER                                */}
      {/* ================================================================ */}

      <motion.div
        variants={itemVariants}
        className="
          my-5
          h-px
          w-full
          bg-gradient-to-r
          from-transparent
          via-white/[0.12]
          to-transparent
        "
      />

      {/* ================================================================ */}
      {/*                       VIEW RESUME BUTTON                         */}
      {/* ================================================================ */}

      <motion.button
        variants={itemVariants}
        type="button"
        onClick={handleResumeClick}
        whileHover={{
          y: -2,
        }}
        whileTap={{
          scale: 0.98,
        }}
        className="
          group
          relative
          flex
          h-12
          w-full
          items-center
          justify-center
          gap-2.5
          overflow-hidden
          rounded-xl
          border
          border-violet-400/[0.16]
          bg-violet-400/[0.07]
          px-5
          text-sm
          font-semibold
          text-white/85
          backdrop-blur-md
          transition-all
          duration-300
          hover:border-violet-400/30
          hover:bg-violet-400/[0.12]
          hover:text-white
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-violet-400/60
        "
      >
        {/* Subtle button glow */}
        <span
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-16
            w-32
            -translate-x-1/2
            -translate-y-1/2
            transition-all
            duration-300
          "
        />

        <FaDownload
          className="
            relative
            z-10
            text-violet-300
            transition-transform
            duration-300
            group-hover:-translate-y-0.5
          "
        />

        <span className="relative z-10">
          View Resume
        </span>
      </motion.button>
    </motion.div>
  );
};

export default SocialLinks;
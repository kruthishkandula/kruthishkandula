'use client';

import SocialLinks from './ui/SocialLinks';
import analyticsEvents from '@/lib/analytics.json';
import { initFirebase } from '@/lib/firebaseClient';

import { logEvent } from 'firebase/analytics';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */

interface ContactProps {
  onResumeOpen: () => void;
  onResumeClose: () => void;
}

/* -------------------------------------------------------------------------- */
/*                              Motion Variants                               */
/* -------------------------------------------------------------------------- */

const containerVariants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
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
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

/* -------------------------------------------------------------------------- */
/*                                  Contact                                   */
/* -------------------------------------------------------------------------- */

const Contact = ({
  onResumeOpen,
  onResumeClose,
}: ContactProps) => {
  /* ------------------------------------------------------------------------ */
  /*                              Analytics                                   */
  /* ------------------------------------------------------------------------ */

  useEffect(() => {
    initFirebase().then((analytics) => {
      if (!analytics) {
        return;
      }

      logEvent(
        analytics,
        analyticsEvents.VIEW_CONTACT
      );
    });
  }, []);

  /* ------------------------------------------------------------------------ */
  /*                                  Render                                  */
  /* ------------------------------------------------------------------------ */

  return (
    <section
      id="contact"
      className="
        min-h-[75vh]
        px-3
        md:px-6
        pt-10
        pb-20
      "
    >
      <div className="container mx-auto">

        {/* ================================================================ */}
        {/*                       MAIN GLASS CONTAINER                        */}
        {/* ================================================================ */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          variants={containerVariants}
          className="
            relative
            mx-auto
            max-w-7xl
            overflow-hidden
            rounded-[32px]
            border
            border-white/10
            bg-black/[0.16]
            p-6
            shadow-[0_24px_80px_rgba(0,0,0,0.18)]
            backdrop-blur-xl
            md:p-10
            lg:p-12
          "
        >
          {/* ============================================================ */}
          {/*                    BACKGROUND EFFECTS                        */}
          {/* ============================================================ */}

          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-[350px]
              w-[65%]
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
              bottom-[-120px]
              right-[10%]
              h-[250px]
              w-[250px]
              rounded-full
              bg-gradient-radial
              from-cyan-400/[0.05]
              to-transparent
            "
          />

          {/* ============================================================ */}
          {/*                         CONTENT                              */}
          {/* ============================================================ */}

          <div
            className="
              relative
              z-10
              mx-auto
              flex
              max-w-3xl
              flex-col
              items-center
              text-center
            "
          >
            {/* ---------------------------------------------------------- */}
            {/*                       EYEBROW                              */}
            {/* ---------------------------------------------------------- */}

            <motion.div
              variants={itemVariants}
              className="
                mb-5
                flex
                items-center
                gap-2
              "
            >
              <span
                className="
                  h-1.5
                  w-6
                  rounded-full
                  bg-violet-400
                  shadow-[0_0_10px_rgba(167,139,250,0.7)]
                "
              />

              <span
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-violet-300
                "
              >
                Let&apos;s Connect
              </span>

              <span
                className="
                  h-1.5
                  w-6
                  rounded-full
                  bg-violet-400
                  shadow-[0_0_10px_rgba(167,139,250,0.7)]
                "
              />
            </motion.div>

            {/* ---------------------------------------------------------- */}
            {/*                        ICON                                */}
            {/* ---------------------------------------------------------- */}

            <motion.div
              variants={itemVariants}
              className="
                mb-5
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-2xl
                border
                border-violet-400/[0.15]
                bg-violet-400/[0.07]
                text-violet-300
                shadow-[0_0_30px_rgba(167,139,250,0.08)]
              "
            >
              <MessageCircle size={21} />
            </motion.div>

            {/* ---------------------------------------------------------- */}
            {/*                       HEADING                              */}
            {/* ---------------------------------------------------------- */}

            <motion.h2
              variants={itemVariants}
              className="
                text-3xl
                font-bold
                tracking-tight
                text-white
                md:text-4xl
                lg:text-5xl
              "
            >
              <span>Have something </span>

              <span className="text-violet-300">
                interesting
              </span>

              <span> in mind?</span>
            </motion.h2>

            {/* ---------------------------------------------------------- */}
            {/*                     DESCRIPTION                            */}
            {/* ---------------------------------------------------------- */}

            <motion.p
              variants={itemVariants}
              className="
                mt-5
                max-w-2xl
                text-sm
                leading-7
                text-white/65
                md:text-base
                md:leading-8
              "
            >
              <span>
                I&apos;m always open to discussing
              </span>

              <span className="font-medium text-white/90">
                {' new opportunities'}
              </span>

              <span>, </span>

              <span className="font-medium text-cyan-200">
                interesting projects
              </span>

              <span>
                , and engineering challenges where I can contribute and
                create meaningful impact.
              </span>
            </motion.p>

            {/* ---------------------------------------------------------- */}
            {/*                       DIVIDER                              */}
            {/* ---------------------------------------------------------- */}

            <motion.div
              variants={itemVariants}
              className="
                my-8
                h-px
                w-full
                max-w-md
                bg-gradient-to-r
                from-transparent
                via-white/15
                to-transparent
              "
            />

            {/* ---------------------------------------------------------- */}
            {/*                      SOCIAL LINKS                          */}
            {/* ---------------------------------------------------------- */}

            <motion.div
              variants={itemVariants}
              className="
                flex
                w-full
                justify-center
              "
            >
              <SocialLinks
                onResumeOpen={onResumeOpen}
                onResumeClose={onResumeClose}
              />
            </motion.div>
          </div>

          {/* ============================================================ */}
          {/*                       BOTTOM ACCENT                          */}
          {/* ============================================================ */}

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

          {/* ============================================================ */}
          {/*              OPEN TO OPPORTUNITIES BADGE                     */}
          {/* ============================================================ */}

          <div
            className="
              absolute
              top-8
              flex
              items-center
              gap-3
              rounded-full
              border
              border-emerald-400/20
              bg-emerald-400/[0.08]
              px-5
              py-3
              backdrop-blur-md
              lg:right-12
            "
          >
            <span
              className="
                  h-2
                  w-2
                  rounded-full
                  bg-green-600
                  shadow-[0_0_9px_rgba(52,211,153,0.75)]
                "
            />

            <span
              className="
                  text-xs
                  font-medium
                  text-white/80
                "
            >
              Open to new opportunities
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
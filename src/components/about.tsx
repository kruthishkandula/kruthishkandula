'use client';

import analyticsEvents from '@/lib/analytics.json';
import { initFirebase } from '@/lib/firebaseClient';
import { logEvent } from 'firebase/analytics';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import SkillsMarquee from './ui/SkillsMarque';

/* -------------------------------------------------------------------------- */
/*                              Animation Config                              */
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
    y: 28,
    filter: 'blur(6px)',
  },

  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',

    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

/* -------------------------------------------------------------------------- */
/*                               Reusable UI                                  */
/* -------------------------------------------------------------------------- */

const Stat = ({
  label,
  value,
}: {
  label: string;
  value: string;
}) => (
  <div className="flex items-center justify-between gap-5">
    <span className="text-sm font-medium text-white/60">
      {label}
    </span>

    <span className="text-right text-sm font-semibold text-white">
      {value}
    </span>
  </div>
);

const Contribution = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <div
    className="
      group flex items-center gap-3
      rounded-lg px-2 py-1.5
      transition-all duration-300
      hover:bg-white/[0.04]
    "
  >
    <span
      className="
        h-2 w-2 shrink-0 rounded-full
        bg-violet-400
        shadow-[0_0_8px_rgba(167,139,250,0.7)]
        transition-shadow duration-300
        group-hover:shadow-[0_0_14px_rgba(167,139,250,0.9)]
      "
    />

    <span
      className="
        text-sm font-medium leading-6
        text-white/75
        transition-colors duration-300
        group-hover:text-white
      "
    >
      {children}
    </span>
  </div>
);

/* -------------------------------------------------------------------------- */
/*                                  About                                     */
/* -------------------------------------------------------------------------- */

const About = () => {
  useEffect(() => {
    initFirebase().then((analytics) => {
      if (analytics) {
        logEvent(analytics, analyticsEvents.VIEW_ABOUT);
      }
    });
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen px-6 pb-20 pt-0"
    >
      <div className="container mx-auto">

        {/* Main Glass Container */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          variants={containerVariants}
          className="
            mx-auto max-w-6xl
            rounded-[32px]
            border border-white/10
            bg-black/[0.16]
            p-6
            shadow-[0_24px_80px_rgba(0,0,0,0.18)]
            backdrop-blur-xl
            md:p-10
            lg:p-12
          "
        >
          <div className="grid gap-10 lg:grid-cols-3 lg:gap-12">

            {/* ============================================================ */}
            {/*                        LEFT COLUMN                           */}
            {/* ============================================================ */}

            <div className="space-y-4 lg:col-span-2">

              {/* Who I Am */}
              <motion.div
                variants={itemVariants}
                className="
                  group
                  rounded-2xl
                  border border-white/[0.06]
                  bg-white/[0.025]
                  p-6
                  transition-all duration-300
                  hover:border-violet-400/20
                  hover:bg-white/[0.045]
                "
              >
                <h3
                  className="
                    mb-4 flex items-center gap-3
                    text-xl font-bold tracking-tight
                    text-white
                  "
                >
                  <span
                    className="
                      h-2 w-2 rounded-full
                      bg-violet-400
                      shadow-[0_0_12px_rgba(167,139,250,0.8)]
                    "
                  />

                  Who I Am
                </h3>

                <p
                  className="
                    max-w-3xl
                    text-[15px] leading-7
                    text-white/75
                    md:text-base md:leading-8
                  "
                >
                  I'm a{' '}
                  <span className="font-semibold text-violet-300">
                    Senior Full-Stack Engineer
                  </span>{' '}
                  with{' '}
                  <span className="font-semibold text-white">
                    4+ years of experience
                  </span>{' '}
                  building scalable mobile and web applications. I specialize
                  in{' '}
                  <span className="font-medium text-cyan-200">
                    React Native, React.js, Next.js, Node.js
                  </span>{' '}
                  and modern micro-frontend architectures.
                </p>
              </motion.div>

              {/* What I Build */}
              <motion.div
                variants={itemVariants}
                className="
                  group
                  rounded-2xl
                  border border-white/[0.06]
                  bg-white/[0.025]
                  p-6
                  transition-all duration-300
                  hover:border-violet-400/20
                  hover:bg-white/[0.045]
                "
              >
                <h3
                  className="
                    mb-4 flex items-center gap-3
                    text-xl font-bold tracking-tight
                    text-white
                  "
                >
                  <span
                    className="
                      h-2 w-2 rounded-full
                      bg-violet-400
                      shadow-[0_0_12px_rgba(167,139,250,0.8)]
                    "
                  />

                  What I Build
                </h3>

                <p
                  className="
                    max-w-3xl
                    text-[15px] leading-7
                    text-white/75
                    md:text-base md:leading-8
                  "
                >
                  I build{' '}
                  <span className="font-semibold text-violet-300">
                    enterprise-grade fintech and telecom applications
                  </span>{' '}
                  across international markets. My work spans high-performance
                  mobile applications, scalable web platforms, payment
                  integrations, and production systems serving{' '}
                  <span className="font-semibold text-white">
                    millions of users
                  </span>
                  .
                </p>
              </motion.div>

              {/* Engineering Focus */}
              <motion.div
                variants={itemVariants}
                className="
                  group
                  rounded-2xl
                  border border-white/[0.06]
                  bg-white/[0.025]
                  p-6
                  transition-all duration-300
                  hover:border-violet-400/20
                  hover:bg-white/[0.045]
                "
              >
                <h3
                  className="
                    mb-4 flex items-center gap-3
                    text-xl font-bold tracking-tight
                    text-white
                  "
                >
                  <span
                    className="
                      h-2 w-2 rounded-full
                      bg-violet-400
                      shadow-[0_0_12px_rgba(167,139,250,0.8)]
                    "
                  />

                  Engineering Focus
                </h3>

                <p
                  className="
                    max-w-3xl
                    text-[15px] leading-7
                    text-white/75
                    md:text-base md:leading-8
                  "
                >
                  I'm focused on{' '}
                  <span className="font-semibold text-violet-300">
                    scalable frontend architecture
                  </span>
                  ,{' '}
                  <span className="font-medium text-cyan-200">
                    Module Federation, React Native modernization
                  </span>
                  , performance optimization, and CI/CD. I enjoy solving
                  complex engineering problems and building reusable systems
                  that improve{' '}
                  <span className="font-semibold text-white">
                    developer experience and delivery speed
                  </span>
                  .
                </p>
              </motion.div>
            </div>

            {/* ============================================================ */}
            {/*                        RIGHT COLUMN                          */}
            {/* ============================================================ */}

            <div className="space-y-6">

              {/* Quick Stats */}
              <motion.div
                variants={itemVariants}
                className="
                  rounded-2xl
                  border border-white/10
                  bg-white/[0.055]
                  p-6
                  shadow-[0_8px_32px_rgba(0,0,0,0.08)]
                  backdrop-blur-md
                  transition-all duration-300
                  hover:border-white/[0.16]
                  hover:bg-white/[0.07]
                "
              >
                <div className="mb-6 flex items-center gap-3">
                  <span
                    className="
                      h-1.5 w-5 rounded-full
                      bg-violet-400
                      shadow-[0_0_10px_rgba(167,139,250,0.6)]
                    "
                  />

                  <h3 className="text-base font-bold text-violet-300">
                    Quick Stats
                  </h3>
                </div>

                <div className="space-y-5">
                  <Stat label="Experience" value="4+ Years" />

                  <Stat
                    label="Specialization"
                    value="Full Stack"
                  />

                  <Stat
                    label="Users Served"
                    value="2M+"
                  />

                  <Stat
                    label="Location"
                    value="Hyderabad, India"
                  />
                </div>
              </motion.div>

              {/* Major Contributions */}
              <motion.div
                variants={itemVariants}
                className="
                  rounded-2xl
                  border border-white/10
                  bg-white/[0.055]
                  p-6
                  shadow-[0_8px_32px_rgba(0,0,0,0.08)]
                  backdrop-blur-md
                  transition-all duration-300
                  hover:border-white/[0.16]
                  hover:bg-white/[0.07]
                "
              >
                <div className="mb-5 flex items-center gap-3">
                  <span
                    className="
                      h-1.5 w-5 rounded-full
                      bg-violet-400
                      shadow-[0_0_10px_rgba(167,139,250,0.6)]
                    "
                  />

                  <h3 className="text-base font-bold text-violet-300">
                    Major Contributions
                  </h3>
                </div>

                <div className="space-y-2">
                  <Contribution>
                    Module Federation 1 → 2 migration
                  </Contribution>

                  <Contribution>
                    React Native 0.72 → 0.81 modernization
                  </Contribution>

                  <Contribution>
                    Rspack & Re.Pack architecture
                  </Contribution>

                  <Contribution>
                    Reusable component systems
                  </Contribution>
                </div>
              </motion.div>

              {/* Current Focus */}
              <motion.div
                variants={itemVariants}
                className="
                  rounded-2xl
                  border border-violet-400/[0.12]
                  bg-violet-400/[0.04]
                  p-6
                  backdrop-blur-md
                "
              >
                <div className="mb-3 flex items-center gap-2">
                  <span
                    className="
                      h-2 w-2 rounded-full
                      bg-cyan-300
                      shadow-[0_0_10px_rgba(103,232,249,0.7)]
                    "
                  />

                  <span
                    className="
                      text-xs font-semibold
                      uppercase
                      tracking-[0.15em]
                      text-cyan-200
                    "
                  >
                    Current Focus
                  </span>
                </div>

                <p className="text-sm leading-6 text-white/70">
                  Building scalable{' '}
                  <span className="font-medium text-white">
                    React Native
                  </span>{' '}
                  and{' '}
                  <span className="font-medium text-violet-300">
                    micro-frontend
                  </span>{' '}
                  architectures with a focus on performance and developer
                  experience.
                </p>
              </motion.div>
            </div>
          </div>

          {/* ============================================================ */}
          {/*                            SKILLS                            */}
          {/* ============================================================ */}

          <motion.div
            variants={itemVariants}
            className="
              mt-10
              border-t border-white/[0.08]
              pt-8
            "
          >
            <SkillsMarquee />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
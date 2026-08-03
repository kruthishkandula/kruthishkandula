'use client';

import { skillsData } from '@/data/portfolio';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';

/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */

interface Skill {
  name: string;
  icon: React.ComponentType<any>;
  color: string;
  dark_color?: string;
  light_color?: string;
}

interface SkillItemProps {
  skill: Skill;
}

/* -------------------------------------------------------------------------- */
/*                               Skill Item                                   */
/* -------------------------------------------------------------------------- */

const SkillItem: React.FC<SkillItemProps> = ({ skill }) => {
  const IconComponent = skill.icon;
  const { resolvedTheme } = useTheme();

  const iconColor =
    resolvedTheme === 'dark'
      ? skill.dark_color || skill.color
      : skill.light_color || skill.color;

  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        y: -2,
      }}
      transition={{
        duration: 0.2,
        ease: 'easeOut',
      }}
      className="
        group
        mx-2
        flex shrink-0 items-center gap-3
        rounded-xl
        border border-white/[0.10]
        bg-white/[0.055]
        px-6 py-3
        backdrop-blur-md
        transition-colors duration-300
        hover:border-violet-400/25
        hover:bg-white/[0.09]
      "
    >
      <motion.div
        className="flex shrink-0 items-center justify-center"
        whileHover={{
          scale: 1.12,
          rotate: 3,
        }}
        transition={{
          duration: 0.2,
        }}
      >
        <IconComponent
          className="text-2xl"
          style={{
            color: iconColor,
          }}
        />
      </motion.div>

      <span
        className="
          whitespace-nowrap
          text-sm font-semibold
          text-white/80
          transition-colors duration-300
          group-hover:text-white
        "
      >
        {skill.name}
      </span>
    </motion.div>
  );
};

/* -------------------------------------------------------------------------- */
/*                              Skill Group                                   */
/* -------------------------------------------------------------------------- */

const SkillGroup = ({
  skills,
  groupIndex,
}: {
  skills: Skill[];
  groupIndex: number;
}) => {
  return (
    <div className="flex shrink-0">
      {skills.map((skill, index) => (
        <SkillItem
          key={`${groupIndex}-${skill.name}-${index}`}
          skill={skill}
        />
      ))}
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/*                              Marquee Row                                   */
/* -------------------------------------------------------------------------- */

interface MarqueeRowProps {
  skills: Skill[];
  direction?: 'left' | 'right';
  duration?: number;

  /**
   * Number of times each skill should be repeated
   * INSIDE one marquee group.
   *
   * This ensures even small rows are wider than
   * the viewport.
   */
  repeatSkills?: number;
}

const MarqueeRow = ({
  skills,
  direction = 'left',
  duration = 30,
  repeatSkills = 3,
}: MarqueeRowProps) => {
  /*
   * IMPORTANT:
   *
   * First we enlarge ONE group:
   *
   * original:
   *
   * [A B C D]
   *
   * becomes:
   *
   * [A B C D A B C D A B C D]
   *
   *
   * Then we duplicate that entire group:
   *
   * GROUP 1
   * [A B C D A B C D A B C D]
   *
   * GROUP 2
   * [A B C D A B C D A B C D]
   *
   *
   * Because Group 1 and Group 2 are identical,
   * moving exactly 50% of the entire track creates
   * a perfectly seamless reset.
   */

  const repeatedSkills = Array.from(
    { length: repeatSkills },
    () => skills
  ).flat();

  const animation =
    direction === 'left'
      ? {
          x: ['0%', '-50%'],
        }
      : {
          x: ['-50%', '0%'],
        };

  return (
    <div className="relative w-full overflow-hidden">

      {/* ================================================================ */}
      {/*                         EDGE MASKS                               */}
      {/* ================================================================ */}

      <div
        className="
          pointer-events-none
          absolute inset-y-0 left-0
          z-20
          w-10
          bg-gradient-to-r
          from-black/10
          to-transparent
          md:w-20
        "
      />

      <div
        className="
          pointer-events-none
          absolute inset-y-0 right-0
          z-20
          w-10
          bg-gradient-to-l
          from-black/10
          to-transparent
          md:w-20
        "
      />

      {/* ================================================================ */}
      {/*                       ANIMATED TRACK                             */}
      {/* ================================================================ */}

      <motion.div
        className="flex w-max will-change-transform"
        animate={animation}
        transition={{
          x: {
            duration,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'loop',
          },
        }}
      >
        {/* Group 1 */}
        <SkillGroup
          skills={repeatedSkills}
          groupIndex={1}
        />

        {/* Group 2 - EXACT COPY */}
        <SkillGroup
          skills={repeatedSkills}
          groupIndex={2}
        />
      </motion.div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/*                             Skills Marquee                                 */
/* -------------------------------------------------------------------------- */

const SkillsMarquee = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section
      className="
        relative
        overflow-hidden
        rounded-2xl
        py-8
        md:py-10
      "
    >
      {/* Background glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2 top-1/2
          h-[300px] w-[70%]
          -translate-x-1/2 -translate-y-1/2
          rounded-full
          bg-violet-500/[0.04]
          blur-3xl
        "
      />

      <div className="relative space-y-5">

        {/* ============================================================ */}
        {/* ROW 1                                                       */}
        {/* ============================================================ */}

        <MarqueeRow
          skills={skillsData.row1}
          direction="left"
          duration={40}
          repeatSkills={2}
        />

        {/* ============================================================ */}
        {/* ROW 2                                                       */}
        {/* ============================================================ */}

        <MarqueeRow
          skills={skillsData.row2}
          direction="right"
          duration={44}
          repeatSkills={2}
        />

        {/* ============================================================ */}
        {/* ROW 3                                                       */}
        {/* ============================================================ */}

        <MarqueeRow
          skills={skillsData.row3}
          direction="left"
          duration={48}

          /*
           * Row 3 contains fewer skills.
           * Repeat them more times so one group
           * is always much wider than viewport.
           */
          repeatSkills={4}
        />

      </div>
    </section>
  );
};

export default SkillsMarquee;
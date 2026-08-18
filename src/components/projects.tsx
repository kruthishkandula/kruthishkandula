"use client";

import { ProjectsData } from "@/data/portfolio";
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Calendar,
  Layers3,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";

import analyticsEvents from "@/lib/analytics.json";
import { getAnalytics, logEvent } from "firebase/analytics";
import { initFirebase } from "@/lib/firebaseClient";

/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */

interface ProjectsProps {
  isActive: boolean;
  onProjectSelect: (project: any) => void;
  onModalOpen: () => void;
}

/* -------------------------------------------------------------------------- */
/*                              Motion Variants                               */
/* -------------------------------------------------------------------------- */

const containerVariants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const headingVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
    scale: 0.97,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

/* -------------------------------------------------------------------------- */
/*                              Status Helpers                                */
/* -------------------------------------------------------------------------- */

/**
 * SonarQube S3358:
 * Keep status styling outside JSX instead of using
 * nested ternary expressions.
 */
const getStatusDotClass = (status: string): string => {
  if (status === "Live Production") {
    return `
      bg-emerald-400
      shadow-[0_0_8px_rgba(52,211,153,0.8)]
    `;
  }

  if (status === "In Development") {
    return `
      bg-amber-300
      shadow-[0_0_8px_rgba(252,211,77,0.7)]
    `;
  }

  return `
    bg-cyan-300
    shadow-[0_0_8px_rgba(103,232,249,0.7)]
  `;
};

/* -------------------------------------------------------------------------- */
/*                               Status Badge                                 */
/* -------------------------------------------------------------------------- */

const ProjectStatus = ({
  status,
}: {
  status: string;
}) => {
  const statusDotClass = getStatusDotClass(status);

  return (
    <div
      className="
        absolute
        right-4
        top-4
        z-20
        flex
        items-center
        gap-2
        rounded-full
        border
        border-white/10
        bg-black/50
        px-3
        py-1.5
        backdrop-blur-xl
      "
    >
      <span
        className={`
          h-1.5
          w-1.5
          rounded-full
          ${statusDotClass}
        `}
      />

      <span className="text-[11px] font-semibold text-white/85">
        {status}
      </span>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/*                                  Projects                                  */
/* -------------------------------------------------------------------------- */

const Projects = ({
  isActive: _isActive,
  onProjectSelect,
  onModalOpen,
}: ProjectsProps) => {
  const [analytics, setAnalytics] =
    useState<ReturnType<typeof getAnalytics> | null>(null);

  /* ------------------------------------------------------------------------ */
  /*                              Analytics                                   */
  /* ------------------------------------------------------------------------ */

  useEffect(() => {
    initFirebase().then((analyticsInstance) => {
      if (!analyticsInstance) {
        return;
      }

      setAnalytics(analyticsInstance);

      logEvent(
        analyticsInstance,
        analyticsEvents.VIEW_PROJECTS
      );
    });
  }, []);

  /* ------------------------------------------------------------------------ */
  /*                           Project Selection                              */
  /* ------------------------------------------------------------------------ */

  const handleProjectClick = (project: any) => {
    if (analytics) {
      logEvent(
        analytics,
        analyticsEvents.CLICK_PROJECT,
        {
          project: project.title,
        }
      );
    }

    onProjectSelect(project);
    onModalOpen();
  };

  /* ------------------------------------------------------------------------ */
  /*                                  Render                                  */
  /* ------------------------------------------------------------------------ */

  return (
    <section
      id="projects"
      className="
        min-h-screen
        px-3
        md:px-6
        py-10
      "
    >
      <div className="container mx-auto">

        {/* ================================================================ */}
        {/*                        MAIN GLASS CONTAINER                       */}
        {/* ================================================================ */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.08,
          }}
          variants={containerVariants}
          className="
            mx-auto
            max-w-7xl
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
          {/*                            HEADER                            */}
          {/* ============================================================ */}

          <motion.div
            variants={headingVariants}
            className="
              mb-10
              flex
              flex-col
              gap-4
              md:mb-12
              md:flex-row
              md:items-end
              md:justify-between
            "
          >
            <div>

              {/* Eyebrow */}
              <div className="mb-3 flex items-center gap-2">
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
                  Selected Work
                </span>
              </div>

              {/* Main Heading */}
              <h2
                className="
                  text-3xl
                  font-bold
                  tracking-tight
                  text-white
                  md:text-4xl
                "
              >
                <span>Projects I&apos;ve</span>

                <span className="text-violet-300">
                  {" Built"}
                </span>
              </h2>

              {/* Description */}
              <p
                className="
                  mt-3
                  max-w-2xl
                  text-sm
                  leading-6
                  text-white/60
                  md:text-base
                "
              >
                <span>
                  A selection of production applications and engineering
                  projects across
                </span>

                <span className="font-medium text-white/85">
                  {" mobile, web, fintech"}
                </span>

                <span>
                  {" and "}
                </span>

                <span className="font-medium text-cyan-200">
                  modern frontend architecture
                </span>

                <span>.</span>
              </p>
            </div>

            {/* Project Count */}
            <div
              className="
                hidden
                items-center
                gap-2
                rounded-full
                border
                border-white/10
                bg-white/[0.045]
                px-4
                py-2
                text-sm
                text-white/60
                md:flex
              "
            >
              <Layers3
                size={15}
                className="text-violet-300"
              />

              <span className="flex items-center gap-1">
                <span className="font-semibold text-white">
                  {ProjectsData.length}
                </span>

                <span>Projects</span>
              </span>
            </div>
          </motion.div>

          {/* ============================================================ */}
          {/*                        PROJECT GRID                          */}
          {/* ============================================================ */}

          <div
            className="
              grid
              gap-6
              md:grid-cols-2
              xl:grid-cols-4
            "
          >
            {ProjectsData.map((project, index) => (
              <motion.article
                key={`${project.title}-${index}`}
                variants={cardVariants}
                onClick={() => handleProjectClick(project)}
                whileHover={{
                  y: -6,
                }}
                transition={{
                  duration: 0.25,
                  ease: "easeOut",
                }}
                className="
                  group
                  relative
                  flex
                  cursor-pointer
                  flex-col
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/[0.08]
                  bg-white/[0.04]
                  shadow-[0_10px_35px_rgba(0,0,0,0.08)]
                  backdrop-blur-md
                  transition-colors
                  duration-300
                  hover:border-violet-400/25
                  hover:bg-white/[0.065]
                  hover:shadow-[0_18px_50px_rgba(0,0,0,0.18)]
                "
              >

                {/* ====================================================== */}
                {/*                         IMAGE                          */}
                {/* ====================================================== */}

                <div
                  className="
                    relative
                    aspect-[16/9]
                    w-full
                    overflow-hidden
                    bg-black/20
                  "
                >
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    loading="lazy"
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-[1.06]
                    "
                  />

                  {/* Image Gradient */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/55
                      via-black/5
                      to-transparent
                    "
                  />

                  {/* Violet Hover Tint */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-violet-500/0
                      transition-colors
                      duration-500
                      group-hover:bg-violet-500/[0.06]
                    "
                  />

                  {/* Status */}
                  <ProjectStatus status={project.status} />

                  {/* Hover Action */}
                  <div
                    className="
                      absolute
                      bottom-4
                      right-4
                      flex
                      h-9
                      w-9
                      translate-y-2
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/10
                      bg-black/50
                      text-white
                      opacity-0
                      backdrop-blur-xl
                      transition-all
                      duration-300
                      group-hover:translate-y-0
                      group-hover:opacity-100
                    "
                  >
                    <ArrowUpRight size={17} />
                  </div>
                </div>

                {/* ====================================================== */}
                {/*                         CONTENT                        */}
                {/* ====================================================== */}

                <div
                  className="
                    flex
                    flex-1
                    flex-col
                    p-5
                    md:p-6
                  "
                >

                  {/* Project Title */}
                  <h3
                    className="
                      mb-3
                      text-lg
                      font-bold
                      tracking-tight
                      text-white
                      transition-colors
                      duration-300
                      group-hover:text-violet-300
                      md:text-xl
                    "
                  >
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="
                      mb-5
                      line-clamp-2
                      min-h-[48px]
                      text-sm
                      leading-6
                      text-white/60
                    "
                  >
                    {project.short_description}
                  </p>

                  {/* ==================================================== */}
                  {/*                         TECH                         */}
                  {/* ==================================================== */}

                  <div className="mb-5 flex flex-wrap gap-2">
                    {project.tech
                      .slice(0, 4)
                      .map((tech, techIndex) => (
                        <span
                          key={`${tech}-${techIndex}`}
                          className="
                            rounded-full
                            border
                            border-violet-400/[0.12]
                            bg-violet-400/[0.07]
                            px-2.5
                            py-1
                            text-[11px]
                            font-medium
                            text-violet-200
                          "
                        >
                          {tech}
                        </span>
                      ))}

                    {project.tech.length > 4 && (
                      <span
                        className="
                          rounded-full
                          border
                          border-white/[0.08]
                          bg-white/[0.05]
                          px-2.5
                          py-1
                          text-[11px]
                          font-medium
                          text-white/60
                        "
                      >
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>

                  {/* ==================================================== */}
                  {/*                         META                         */}
                  {/* ==================================================== */}

                  <div
                    className="
                      mb-5
                      flex
                      flex-wrap
                      items-center
                      gap-x-3
                      gap-y-2
                      text-xs
                      text-white/50
                    "
                  >
                    {/* Duration */}
                    <div className="flex items-center gap-1.5">
                      <Calendar
                        size={14}
                        className="text-cyan-200/80"
                      />

                      <span>
                        {project.duration}
                      </span>
                    </div>

                    {/* Separator */}
                    <span
                      className="
                        h-1
                        w-1
                        rounded-full
                        bg-white/25
                      "
                    />

                    {/* Team */}
                    <div className="flex items-center gap-1.5">
                      <Users
                        size={14}
                        className="text-cyan-200/80"
                      />

                      <span>
                        {project.team_size}
                      </span>
                    </div>
                  </div>

                  {/* ==================================================== */}
                  {/*                    CATEGORY / TYPE                   */}
                  {/* ==================================================== */}

                  <div
                    className="
                      mt-auto
                      flex
                      items-center
                      justify-between
                      gap-3
                      border-t
                      border-white/[0.07]
                      pt-4
                    "
                  >
                    <div className="flex flex-wrap gap-2">

                      {/* Category */}
                      <span
                        className="
                          rounded-md
                          bg-white/[0.055]
                          px-2
                          py-1
                          text-[10px]
                          font-medium
                          uppercase
                          tracking-wide
                          text-white/55
                        "
                      >
                        {project.category}
                      </span>

                      {/* Type */}
                      <span
                        className="
                          rounded-md
                          bg-white/[0.055]
                          px-2
                          py-1
                          text-[10px]
                          font-medium
                          uppercase
                          tracking-wide
                          text-white/55
                        "
                      >
                        {project.type}
                      </span>
                    </div>

                    <ArrowUpRight
                      size={16}
                      className="
                        shrink-0
                        text-white/35
                        transition-all
                        duration-300
                        group-hover:-translate-y-0.5
                        group-hover:translate-x-0.5
                        group-hover:text-violet-300
                      "
                    />
                  </div>
                </div>

                {/* ====================================================== */}
                {/*                    BOTTOM ACCENT                       */}
                {/* ====================================================== */}

                <div
                  className="
                    absolute
                    bottom-0
                    left-1/2
                    h-px
                    w-0
                    -translate-x-1/2
                    bg-gradient-to-r
                    from-transparent
                    via-violet-400
                    to-transparent
                    transition-all
                    duration-500
                    group-hover:w-2/3
                  "
                />
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Real Estate Marketplace Platform",
    description:
      "A real estate marketplace platform that allows users to browse and explore property listings. My role focused on building the backend services that power authentication and data exchange with the frontend.",
    problem:
      "The platform required a secure and simple authentication system and a structured API to allow the frontend to interact with property data.",
    solution:
      "Implemented a basic authentication system and built a complete RESTful API using Laravel. Also used Laravel's HTTP Client package to interact with external services when needed.",
    tech: ["Laravel", "PHP", "RESTful API", "MySQL", "Laravel HTTP Client"],
    role: "Backend Developer (Laravel)",
    impact: "Built authentication system and full RESTful API for the platform",
    github: "https://github.com/Ahmadalhsen599/First_uneversity_Poject",
    live: "https://github.com/Ahmadalhsen599/First_uneversity_Poject",
    featured: true,
  },
  {
    title: "ASPU Hub",
    description:
      "A social platform designed for university students to communicate, ask questions, and share knowledge within specialized groups.",
    problem:
      "Students lacked a centralized platform to ask academic questions and interact with peers within their field of study.",
    solution:
      "Developed a RESTful API for the posts system using Laravel where users can create questions as posts and receive answers as other posts inside groups. Implemented Laravel database notifications and used the Event & Listener system to manage application events.",
    tech: ["Laravel", "PHP", "RESTful API", "MySQL", "Laravel Notifications", "Events & Listeners"],
    role: "Backend Developer (Laravel)",
    impact: "Enabled structured student communication through posts and notification system",
    github: "https://github.com/AhmadSadik1/ASPU_HUB",
    live: "https://github.com/AhmadSadik1/ASPU_HUB",
    featured: true,
  },
  {
    title: "Multiplayer XO Game",
    description:
      "A simple two-player Tic-Tac-Toe web application where two users can play against each other through an interactive interface.",
    problem:
      "The goal of the project was to practice React fundamentals and understand how to manage state and component lifecycle effectively.",
    solution:
      "Built the game interface using React and implemented the core game logic using React hooks such as useState, useRef, and useEffect. Focused on creating a clean and engaging user interface.",
    tech: ["React", "JavaScript", "useState", "useRef", "useEffect"],
    role: "Frontend Developer",
    impact: "Strengthened understanding of React hooks and state management",
    github: "https://github.com/Ahmadalhsen599/XO_Game",
    live: "https://xo-game-lake-two.vercel.app/",
    featured: false,
  },
  {
    title: "Quran Tap",
    description:
      "A Quran web application that displays Quran verses with audio playback and interpretation, along with collections of morning and evening adhkar and Quranic supplications.",
    problem:
      "The project aimed to provide an easy and interactive way for users to read Quran verses, listen to recitations, and access interpretations in one place.",
    solution:
      "Built the interface using React and fetched Quran verses, audio files, and tafsir data using Axios. Implemented dynamic rendering with React hooks and conditional rendering to manage complex UI states.",
    tech: ["React", "JavaScript", "Axios", "useState", "useRef", "useEffect"],
    role: "Frontend Developer",
    impact: "Learned advanced React patterns including conditional rendering and API integration",
    github: "https://github.com/Ahmadalhsen599/quran_tap",
    live: "https://quran-tap.vercel.app/",
    featured: false,
  },
];

const ProjectCard = ({
  project,
  index,
  isInView,
}: {
  project: (typeof projects)[0];
  index: number;
  isInView: boolean;
}) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`group relative rounded-2xl overflow-hidden border-gradient bg-card hover:glow-subtle transition-all duration-500 ${
        project.featured ? "lg:col-span-2" : ""
      }`}
    >
      <div className="p-6 md:p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            {project.featured && (
              <span className="inline-block px-3 py-1 text-xs font-mono text-primary bg-primary/10 rounded-full mb-3">
                Featured Project
              </span>
            )}
            <h3 className="font-display text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground mt-1 font-mono">
              {project.role}
            </p>
          </div>
          <div className="flex gap-2">
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={`View ${project.title} on GitHub`}
              >
                <Github size={18} />
              </motion.a>
            )}
            {project.live && (
              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={`View ${project.title} live demo`}
              >
                <ExternalLink size={18} />
              </motion.a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {project.description}
        </p>

        {/* Problem & Solution */}
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="p-4 rounded-xl bg-secondary/50">
            <span className="text-xs font-mono text-primary block mb-2">
              PROBLEM
            </span>
            <p className="text-sm text-muted-foreground">{project.problem}</p>
          </div>
          <div className="p-4 rounded-xl bg-secondary/50">
            <span className="text-xs font-mono text-primary block mb-2">
              SOLUTION
            </span>
            <p className="text-sm text-muted-foreground">{project.solution}</p>
          </div>
        </div>

        {/* Impact */}
        <div className="mb-6">
          <span className="text-xs font-mono text-primary">IMPACT: </span>
          <span className="text-sm font-semibold text-foreground">
            {project.impact}
          </span>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-mono bg-secondary text-muted-foreground rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Hover Arrow */}
      <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
        <ArrowUpRight className="text-primary" size={24} />
      </div>
    </motion.article>
  );
};

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="projects"
      ref={ref}
      className="py-24 md:py-32 relative"
      aria-labelledby="projects-heading"
    >
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />

      <div className="container-section relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-16"
        >
          <div>
            <span className="text-primary font-mono text-sm tracking-wider mb-4 block">
              02. PROJECTS
            </span>
            <h2 id="projects-heading" className="section-heading">
              Selected Work
            </h2>
          </div>
          <p className="section-subheading mt-4 md:mt-0 md:text-right">
            Real solutions to real problems.
            <br />
            Here's what I've built.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center mt-12"
        >
          <Button variant="heroOutline" size="lg" asChild>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              View All Projects on GitHub
              <ExternalLink className="ml-2" size={18} />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

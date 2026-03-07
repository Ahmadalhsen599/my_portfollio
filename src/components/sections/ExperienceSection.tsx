import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Backend Development with Laravel",
    company: "Personal & Academic Projects",
    location: "Remote",
    period: "2024 - Present",
    description:
      "Developed backend systems using Laravel while building practical projects. Focused on designing RESTful APIs, authentication systems, and backend logic that powers real-world web applications.",
    highlights: [
      "Built a complete RESTful API for a real estate marketplace platform",
      "Implemented authentication systems using Laravel",
      "Used Laravel HTTP Client to interact with external services",
      "Developed a posts API system for the ASPU Hub student platform",
      "Implemented Laravel Notifications stored in the database",
      "Applied Laravel Events & Listeners to manage application workflows",
    ],
    current: true,
  },
  {
    title: "Frontend Development with React",
    company: "Personal Projects",
    location: "Remote",
    period: "2024 - Present",
    description:
      "Developed interactive user interfaces using React while building practical frontend applications. Focused on understanding React fundamentals, component logic, and API integration.",
    highlights: [
      "Built an interactive multiplayer XO game using React",
      "Practiced React hooks including useState, useEffect, and useRef",
      "Developed dynamic UI with conditional rendering",
      "Built Quran Tap web application displaying Quran verses and audio playback",
      "Fetched external data using Axios for verses, audio files, and tafsir",
      "Focused on writing clean and reusable component logic",
    ],
    current: false,
  },
  {
    title: "Software Engineering & Development Workflow",
    company: "Self-directed Learning",
    location: "Remote",
    period: "2023 - Present",
    description:
      "Practiced software engineering concepts and modern development workflows while building projects and managing code repositories.",
    highlights: [
      "Used Git and GitHub for version control and project management",
      "Worked with branching workflows and pull request practices",
      "Organized development tasks using Jira",
      "Applied basic software architecture principles when designing APIs",
      "Worked with relational databases and backend data structures",
      "Explored foundational concepts of data organization and data warehousing",
    ],
    current: false,
  },
];

export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      ref={ref}
      className="py-24 md:py-32 relative"
      aria-labelledby="experience-heading"
    >
      <div className="container-section">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-wider mb-4 block">
            03. Development Experience
          </span>
          <h2 id="experience-heading" className="section-heading mb-6">
            Where I've Worked
          </h2>
          <p className="section-subheading">
          Practical experience gained through building real-world projects and learning modern development tools.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title + exp.company}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative grid md:grid-cols-2 gap-8 mb-12 last:mb-0 ${
                index % 2 === 0 ? "" : "md:text-right"
              }`}
            >
              {/* Timeline Dot */}
              <div
                className={`absolute left-0 md:left-1/2 w-4 h-4 rounded-full border-4 border-background md:-translate-x-1/2 top-0 z-10 ${
                  exp.current
                    ? "bg-primary animate-pulse-glow"
                    : "bg-muted-foreground"
                }`}
              />

              {/* Content */}
              <div
                className={`pl-8 md:pl-0 ${
                  index % 2 === 0
                    ? "md:pr-16"
                    : "md:col-start-2 md:pl-16 md:text-left"
                }`}
              >
                <div
                  className={`p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 ${
                    exp.current ? "glow-subtle" : ""
                  }`}
                >
                  {/* Header */}
                  <div className="mb-4">
                    {exp.current && (
                      <span className="inline-block px-2 py-1 text-xs font-mono text-primary bg-primary/10 rounded mb-2">
                        Current
                      </span>
                    )}
                    <h3 className="font-display text-xl font-bold text-foreground">
                      {exp.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <Building2 size={14} className="text-primary" />
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={14} className="text-primary" />
                        {exp.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar size={14} className="text-primary" />
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="text-primary mt-1.5">▹</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Empty column for grid alignment */}
              {index % 2 === 0 && <div className="hidden md:block" />}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

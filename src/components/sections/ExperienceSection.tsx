import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    period: "2022 - Present",
    description:
      "Leading development of distributed systems handling millions of daily transactions. Architected microservices migration reducing infrastructure costs by 40%.",
    highlights: [
      "Led team of 5 engineers on critical platform redesign",
      "Reduced API response times by 60% through optimization",
      "Established engineering best practices and code review standards",
    ],
    current: true,
  },
  {
    title: "Software Engineer",
    company: "StartupXYZ",
    location: "New York, NY",
    period: "2020 - 2022",
    description:
      "Full-stack development for B2B SaaS platform. Built real-time analytics dashboard used by 500+ enterprise clients.",
    highlights: [
      "Developed real-time data pipeline processing 1M+ events/day",
      "Implemented comprehensive testing strategy (95% coverage)",
      "Mentored junior developers and led technical interviews",
    ],
    current: false,
  },
  {
    title: "Junior Software Developer",
    company: "Digital Agency Co.",
    location: "Boston, MA",
    period: "2019 - 2020",
    description:
      "Developed web applications and e-commerce platforms for diverse clients. Gained foundational experience in agile development.",
    highlights: [
      "Delivered 10+ client projects on time and within budget",
      "Built reusable component library reducing dev time by 30%",
      "Collaborated with design team on UI/UX improvements",
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
            03. EXPERIENCE
          </span>
          <h2 id="experience-heading" className="section-heading mb-6">
            Where I've Worked
          </h2>
          <p className="section-subheading">
            A journey of growth, from foundation to leadership.
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

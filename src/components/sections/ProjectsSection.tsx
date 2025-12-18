import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "CloudScale Platform",
    description:
      "A distributed microservices platform handling 1M+ daily transactions. Built to solve the scaling challenges of legacy monolithic systems.",
    problem:
      "Legacy systems couldn't handle traffic spikes, causing downtime during peak hours.",
    solution:
      "Designed event-driven architecture with auto-scaling, reducing latency by 60% and achieving 99.99% uptime.",
    tech: ["Go", "Kubernetes", "Redis", "PostgreSQL", "Kafka"],
    role: "Lead Engineer",
    impact: "60% latency reduction, 99.99% uptime",
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    title: "AnalyticsDash",
    description:
      "Real-time analytics dashboard processing streaming data from IoT devices with sub-second visualization updates.",
    problem:
      "Clients needed real-time insights but existing tools had 5-10 minute delays.",
    solution:
      "Built streaming pipeline with WebSockets and optimized rendering, achieving <100ms latency.",
    tech: ["React", "TypeScript", "Node.js", "TimescaleDB", "WebSocket"],
    role: "Full-Stack Developer",
    impact: "<100ms latency, 10x faster insights",
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    title: "SecureAuth System",
    description:
      "Enterprise-grade authentication system with SSO, MFA, and role-based access control for 50K+ users.",
    problem:
      "Fragmented auth across apps created security vulnerabilities and poor UX.",
    solution:
      "Centralized OAuth 2.0/OIDC solution with biometric MFA and session management.",
    tech: ["Python", "FastAPI", "PostgreSQL", "Redis", "OAuth 2.0"],
    role: "Backend Engineer",
    impact: "Zero security breaches, 40% faster login",
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
  },
  {
    title: "DevOps Pipeline",
    description:
      "Automated CI/CD infrastructure reducing deployment time from hours to minutes with zero-downtime releases.",
    problem: "Manual deployments took 4+ hours and often caused downtime.",
    solution:
      "Infrastructure-as-code with blue-green deployments and automated rollbacks.",
    tech: ["Terraform", "Docker", "GitHub Actions", "AWS", "ArgoCD"],
    role: "DevOps Engineer",
    impact: "95% faster deployments, zero downtime",
    github: "https://github.com",
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

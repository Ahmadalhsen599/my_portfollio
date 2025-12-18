import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Database, Server, Layers, Cpu, Globe } from "lucide-react";

const skills = [
  {
    category: "Frontend",
    icon: Code2,
    items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend",
    icon: Server,
    items: ["Node.js", "Python", "Go", "REST APIs", "GraphQL"],
  },
  {
    category: "Database",
    icon: Database,
    items: ["PostgreSQL", "MongoDB", "Redis", "Supabase", "Prisma"],
  },
  {
    category: "DevOps",
    icon: Layers,
    items: ["Docker", "Kubernetes", "AWS", "CI/CD", "Terraform"],
  },
  {
    category: "Systems",
    icon: Cpu,
    items: ["Distributed Systems", "Microservices", "Event-Driven", "System Design"],
  },
  {
    category: "Tools",
    icon: Globe,
    items: ["Git", "Linux", "Figma", "Jira", "Agile/Scrum"],
  },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 md:py-32 relative"
      aria-labelledby="about-heading"
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
            01. ABOUT
          </span>
          <h2 id="about-heading" className="section-heading mb-6">
            Engineering Mindset,
            <br />
            <span className="text-muted-foreground">Creative Solutions</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a Software Engineer and Information Systems specialist who
              thrives on turning complex challenges into elegant, scalable
              solutions. With a foundation in both software architecture and
              systems engineering, I bring a unique perspective to every project.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My approach combines technical rigor with creative problem-solving.
              I believe that the best software isn't just functional—it's
              maintainable, performant, and a joy to work with. Whether I'm
              designing a distributed system or crafting a pixel-perfect UI, I
              obsess over the details that matter.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently focused on building products that make a real impact,
              leveraging modern technologies and best practices to deliver
              solutions that stand the test of time.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              {[
                { value: "5+", label: "Years Experience" },
                { value: "30+", label: "Projects Delivered" },
                { value: "10+", label: "Happy Clients" },
              ].map(({ value, label }, index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <div className="font-display text-3xl md:text-4xl font-bold text-primary">
                    {value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {skills.map(({ category, icon: Icon, items }, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                className="p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon size={18} />
                  </div>
                  <h3 className="font-semibold text-foreground">{category}</h3>
                </div>
                <ul className="space-y-1.5">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-muted-foreground font-mono"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

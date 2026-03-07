import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Database, Server, Layers, Cpu, Globe } from "lucide-react";

const skills = [
  {
    category: "Frontend",
    icon: Code2,
    items: ["React",  "Next.js", "redux", "redux ToolKit"],
  },
  {
    category: "Backend",
    icon: Server,
    items: ["php", "Laravel", , "REST APIs", ],
  },
  {
    category: "Database",
    icon: Database,
    items: [ "mysql", "Redis", "oracle", "sqllite"],
  },
  {
    category: "DevOps",
    icon: Layers,
    items: ["Docker",""],
  },
  {
    category: "Systems",
    icon: Cpu,
    items: [ "Microservices", "Event-Driven", "System Design"],
  },
  {
    category: "Tools",
    icon: Globe,
    items: ["Git", , "Figma", "Jira", "Agile/Scrum"],
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
  I'm a Full-Stack Web Developer with a strong focus on Laravel and React,
  passionate about building practical web applications and improving my
  software engineering skills through real-world projects. I enjoy transforming
  ideas into functional systems while focusing on clean code, maintainability,
  and well-structured application logic.
</p>

<p className="text-lg text-muted-foreground leading-relaxed">
  Through my projects, I have built RESTful APIs with Laravel, implemented
  authentication systems, and developed interactive user interfaces using
  React and modern JavaScript. I enjoy solving problems and continuously
  improving my understanding of software architecture, API design, and
  frontend development practices.
</p>

<p className="text-lg text-muted-foreground leading-relaxed">
  I'm also interested in software engineering concepts such as system design,
  data organization, and foundational data warehousing principles. I regularly
  use tools like Git, GitHub, and Jira to manage code and development
  workflows, while continuing to build projects that strengthen my skills in
  modern web development.
</p>
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              {[
                { value: "1+", label: "Years Experience" },
                { value: "3+", label: "Projects Delivered" },
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

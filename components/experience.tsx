"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Principal Software Engineer",
    company: "TechGiant Inc.",
    period: "2019 - Present",
    description:
      "Leading architecture and development of cloud-native applications serving millions of users. Spearheaded migration from monolith to microservices, reducing deployment time by 80% and improving system reliability.",
    technologies: ["AWS", "Kubernetes", "Go", "React", "TypeScript", "GraphQL"],
  },
  {
    title: "Senior Software Engineer",
    company: "InnovateSoft",
    period: "2015 - 2019",
    description:
      "Designed and implemented scalable backend systems for financial services. Led a team of 8 engineers across 3 time zones, delivering critical features on time and under budget.",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "Docker", "Jenkins", "Kafka"],
  },
  {
    title: "Software Engineer",
    company: "DataDriven Solutions",
    period: "2011 - 2015",
    description:
      "Developed data processing pipelines handling terabytes of information daily. Optimized existing systems, reducing processing time by 40% and cloud infrastructure costs by 35%.",
    technologies: ["Python", "Hadoop", "Spark", "AWS", "MongoDB", "Redis"],
  },
  {
    title: "Software Developer",
    company: "WebFront Systems",
    period: "2008 - 2011",
    description:
      "Built responsive web applications and e-commerce platforms. Implemented CI/CD pipelines and automated testing, improving code quality and reducing bugs in production by 60%.",
    technologies: ["JavaScript", "PHP", "MySQL", "jQuery", "CSS3", "HTML5"],
  },
]

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="experience" className="py-24">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          Professional <span className="gradient-text">Experience</span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 mt-12"
        >
          {experiences.map((exp, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="overflow-hidden border-l-4 border-l-primary">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                    <div>
                      <CardTitle>{exp.title}</CardTitle>
                      <CardDescription className="text-base mt-1">
                        {exp.company} | {exp.period}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

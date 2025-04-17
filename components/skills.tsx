"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import {
  Code,
  Database,
  Server,
  Globe,
  Cpu,
  LineChart,
  Cloud,
  Lock,
  Users,
  Layers,
  GitBranch,
  Terminal,
} from "lucide-react"

const skillCategories = [
  {
    title: "Languages",
    icon: <Code className="h-6 w-6 text-primary" />,
    skills: ["JavaScript", "TypeScript", "Python", "Go", "Java", "C++", "Rust", "SQL"],
  },
  {
    title: "Frontend",
    icon: <Globe className="h-6 w-6 text-primary" />,
    skills: ["React", "Next.js", "Vue", "Angular", "HTML5/CSS3", "Tailwind CSS", "Redux", "GraphQL"],
  },
  {
    title: "Backend",
    icon: <Server className="h-6 w-6 text-primary" />,
    skills: ["Node.js", "Express", "Spring Boot", "Django", "FastAPI", "gRPC", "REST API Design", "Microservices"],
  },
  {
    title: "Databases",
    icon: <Database className="h-6 w-6 text-primary" />,
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Elasticsearch", "DynamoDB", "Cassandra", "Time-series DBs"],
  },
  {
    title: "DevOps",
    icon: <GitBranch className="h-6 w-6 text-primary" />,
    skills: ["Docker", "Kubernetes", "CI/CD", "Jenkins", "GitHub Actions", "Terraform", "Ansible", "Monitoring"],
  },
  {
    title: "Cloud",
    icon: <Cloud className="h-6 w-6 text-primary" />,
    skills: ["AWS", "Azure", "GCP", "Serverless", "Lambda", "S3", "EC2", "Cloud Architecture"],
  },
  {
    title: "Architecture",
    icon: <Layers className="h-6 w-6 text-primary" />,
    skills: [
      "System Design",
      "Microservices",
      "Event-driven",
      "Domain-driven Design",
      "CQRS",
      "Scalability",
      "High Availability",
    ],
  },
  {
    title: "Performance",
    icon: <LineChart className="h-6 w-6 text-primary" />,
    skills: [
      "Optimization",
      "Profiling",
      "Caching",
      "Load Testing",
      "Benchmarking",
      "Memory Management",
      "Query Optimization",
    ],
  },
  {
    title: "Security",
    icon: <Lock className="h-6 w-6 text-primary" />,
    skills: ["OAuth/OIDC", "JWT", "Encryption", "OWASP", "Penetration Testing", "Security Audits", "Compliance"],
  },
  {
    title: "AI/ML",
    icon: <Cpu className="h-6 w-6 text-primary" />,
    skills: [
      "TensorFlow",
      "PyTorch",
      "NLP",
      "Computer Vision",
      "Recommendation Systems",
      "Data Pipelines",
      "Feature Engineering",
    ],
  },
  {
    title: "Leadership",
    icon: <Users className="h-6 w-6 text-primary" />,
    skills: [
      "Team Management",
      "Mentoring",
      "Technical Leadership",
      "Project Planning",
      "Agile/Scrum",
      "Code Reviews",
      "Documentation",
    ],
  },
  {
    title: "Tools",
    icon: <Terminal className="h-6 w-6 text-primary" />,
    skills: ["Git", "VS Code", "JetBrains IDEs", "Jira", "Confluence", "Postman", "Linux/Unix", "Bash/Shell"],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          Technical <span className="gradient-text">Skills</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    {category.icon}
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="flex items-center">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></div>
                        <span className="text-sm">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

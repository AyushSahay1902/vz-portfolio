"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    title: "Enterprise Resource Planning System",
    description:
      "A comprehensive ERP solution for manufacturing companies, handling inventory, production, HR, and finances in a unified platform.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["React", "Node.js", "PostgreSQL", "Docker", "AWS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Real-time Analytics Dashboard",
    description:
      "A high-performance analytics platform processing millions of events per minute with real-time visualization and alerting capabilities.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Vue.js", "Go", "Kafka", "Elasticsearch", "Kubernetes"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Distributed Payment Processing System",
    description:
      "A fault-tolerant payment processing system handling transactions across multiple currencies with regulatory compliance.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Java", "Spring Boot", "RabbitMQ", "MySQL", "Redis"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "AI-Powered Content Recommendation Engine",
    description:
      "A machine learning system that analyzes user behavior to provide personalized content recommendations at scale.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Python", "TensorFlow", "FastAPI", "MongoDB", "AWS Lambda"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Secure Healthcare Data Exchange Platform",
    description:
      "HIPAA-compliant platform enabling secure exchange of patient data between healthcare providers with comprehensive audit trails.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["TypeScript", "Node.js", "PostgreSQL", "Azure", "OAuth 2.0"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Scalable E-commerce Platform",
    description:
      "A high-traffic e-commerce solution with advanced inventory management, payment processing, and customer analytics.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Next.js", "GraphQL", "MongoDB", "Stripe", "Vercel"],
    liveUrl: "#",
    githubUrl: "#",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          Featured <span className="gradient-text">Projects</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col overflow-hidden">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button size="sm" variant="outline" asChild>
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> Code
                    </Link>
                  </Button>
                  <Button size="sm" asChild>
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

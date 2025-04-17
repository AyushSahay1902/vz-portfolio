"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          About <span className="gradient-text">Me</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative aspect-square max-w-md mx-auto"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/0 -z-10 transform rotate-6"></div>
            <div className="h-full w-full overflow-hidden rounded-2xl border-2 border-muted">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="John Doe"
                width={600}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-4">Senior Software Engineer & Architect</h3>

            <p className="text-muted-foreground mb-6">
              With over 15 years of experience in software development, I've had the privilege of working with Fortune
              500 companies and innovative startups alike, helping them build scalable, maintainable, and efficient
              software solutions.
            </p>

            <p className="text-muted-foreground mb-6">
              My journey began with C++ and Java, evolving through the rise of web technologies, cloud computing, and
              distributed systems. I've led teams through complete digital transformations and mentored dozens of junior
              developers who have gone on to successful careers.
            </p>

            <p className="text-muted-foreground mb-8">
              I'm passionate about clean code, performance optimization, and creating software that not only works
              flawlessly but is also a joy to maintain and extend.
            </p>

            <Button asChild>
              <a href="#" download>
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

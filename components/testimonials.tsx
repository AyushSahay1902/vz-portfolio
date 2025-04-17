"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "John is one of the most talented engineers I've ever worked with. His ability to architect complex systems while keeping the code maintainable is remarkable.",
    author: "Sarah Johnson",
    position: "CTO, TechVision Inc.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "Working with John transformed our engineering culture. His mentorship helped our team level up their skills, and the systems he designed have scaled flawlessly as we've grown.",
    author: "Michael Chen",
    position: "VP of Engineering, DataFlow",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "John's deep technical expertise combined with his business acumen made him an invaluable asset to our team. He consistently delivered solutions that exceeded expectations.",
    author: "Emily Rodriguez",
    position: "Product Director, SaaS Solutions",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "I've had the pleasure of working with John on several high-stakes projects. His calm demeanor under pressure and ability to solve complex problems is unmatched.",
    author: "David Kim",
    position: "Senior Architect, Enterprise Systems",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "John's leadership during our cloud migration was exceptional. He not only delivered the technical solution but also ensured knowledge transfer to our team.",
    author: "Lisa Patel",
    position: "Engineering Manager, CloudNative",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "The architecture John designed for our platform has been rock-solid for years. His foresight in designing for scale saved us countless hours of refactoring.",
    author: "Robert Zhang",
    position: "Founder, StartupSuccess",
    avatar: "/placeholder.svg?height=100&width=100",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-muted/30">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          Client <span className="gradient-text">Testimonials</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="pt-6">
                  <Quote className="h-8 w-8 text-primary/40 mb-4" />
                  <p className="italic mb-6">{testimonial.quote}</p>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.author} />
                      <AvatarFallback>
                        {testimonial.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

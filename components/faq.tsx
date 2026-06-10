"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What age groups are these cohorts designed for?",
    answer: "Our play-first, gamified curriculum is specially optimized for high school students in grades 9 through 12, divided into separate age-appropriate peer cohorts.",
  },
  {
    question: "Is any prior business or technical experience required?",
    answer: "Not at all! We assume zero prior knowledge. Our framework is built from the ground up to introduce core entrepreneurial concepts through play, interactive design thinking, and creative construction.",
  },
  {
    question: "How long are the programs and what is the schedule?",
    answer: "Programs typically run in seasonal cohorts. Once you submit a contact inquiry, our team provides the upcoming batch schedules so you can pick a weekend or after-school slot that fits perfectly.",
  },
  {
    question: "What is the enrollment process and pricing?",
    answer: "Because we keep cohort sizes small for premium mentorship, enrollment begins with a simple application query via our contact form. We will schedule a brief discovery call to understand your child's interests and guide you through pricing options.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="scroll-mt-20 bg-background py-20 lg:py-28 border-t border-border/40">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Questions
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold leading-tight text-foreground sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-muted-foreground">
            Everything you need to know about joining ATHENA Entrepreneurship.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className="rounded-lg border border-border bg-card transition-colors duration-200"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between p-6 text-left font-heading font-semibold text-foreground transition-colors hover:text-gold"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-muted-foreground transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-gold" : ""
                    }`}
                  />
                </button>
                
                {isOpen && (
                  <div className="border-t border-border/60 p-6 bg-background/50 rounded-b-lg">
                    <p className="leading-relaxed text-muted-foreground text-sm sm:text-base">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

import { Compass, Hammer, TrendingUp, Rocket } from "lucide-react"

const modules = [
  {
    icon: Compass,
    phase: "Months 1–3",
    title: "Discover & Validate",
    points: [
      "Problem Discovery & Validation",
      "Customer Discovery",
      "Idea to Solution",
      "MVP Design",
    ],
  },
  {
    icon: Hammer,
    phase: "Months 1–3",
    title: "Build the Business",
    points: [
      "Product Development",
      "Business Fundamentals",
      "Business Model Canvas",
      "Business Plan",
    ],
  },
  {
    icon: TrendingUp,
    phase: "Months 4–6",
    title: "Brand, Market & Sell",
    points: [
      "Branding & Identity",
      "Marketing",
      "Sales",
      "Pitching Strategy",
    ],
  },
  {
    icon: Rocket,
    phase: "Months 4–6",
    title: "Strategy & Launch",
    points: [
      "Hackathon Prep",
      "Startup Strategy",
      "Funding & Investors",
      "Demo Day",
    ],
  },
]

export function CurriculumGrid() {
  return (
    <section id="programs" className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Curriculum
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold leading-tight text-balance text-foreground sm:text-4xl">
            A six-month journey from first idea to Demo Day.
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Gamified modules across 3 phases, taking young founders
            from spotting a real problem all the way to pitching investors.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {modules.map((m) => (
            <div
              key={m.title}
              className="group flex flex-col rounded-lg border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-xl hover:shadow-black/5"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-md bg-gold/10 text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-gold-foreground">
                <m.icon className="h-6 w-6" />
              </span>
              <span className="mt-5 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-gold">
                {m.phase}
              </span>
              <h3 className="mt-1 font-heading text-lg font-bold text-foreground">
                {m.title}
              </h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {m.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

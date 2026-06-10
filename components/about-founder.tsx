import Image from "next/image"

export function AboutFounder() {
  return (
    <section id="about" className="scroll-mt-16 bg-background py-12 lg:py-16">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
        
        {/* Left Side: Compact Image Container */}
        <div className="relative order-2 lg:order-1 max-w-md mx-auto lg:max-w-none w-full">
          <div className="overflow-hidden rounded-lg border border-border bg-card shadow-2xl shadow-black/10">
            <Image
              src="/founder.jpg"
              alt="Founder of ATHENA Entrepreneurship"
              width={800}
              height={900}
              className="aspect-[4/5] w-full object-cover max-h-[450px] lg:max-h-[500px]"
            />
          </div>
        </div>

        {/* Right Side: Text content with bottom padding buffer */}
        <div className="order-1 lg:order-2 pb-8 lg:pb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            About & Founder
          </span>
          <h2 className="mt-3 font-heading text-2xl font-bold leading-tight text-balance text-foreground sm:text-3xl lg:text-4xl">
            At ATHENA Entrepreneurship we don&apos;t just teach students how to
            think. We teach them how to create.
          </h2>
          <blockquote className="mt-4 border-l-2 border-gold pl-4 font-serif text-lg italic leading-relaxed text-foreground">
            &ldquo;ATHENA Entrepreneurship believes that confidence is key. When
            a child learns to build, sell, and lead, they carry that confidence
            into everything they do. Upon completion of our courses, our students
            will be ready to build the future.&rdquo;
          </blockquote>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground lg:text-base">
            ATHENA Entrepreneurship focuses on a play-first curriculum, adapted
            from design thinking frameworks. It is certified by the MCC MRF
            Innovation Park. Our mission is simple: give the next generation a
            real, joyful head start in building the future.
          </p>
          
          {/* Your Name Block */}
          <div className="mt-6 border-t border-border/40 pt-4">
            <p className="font-heading text-lg font-bold text-foreground">
              Lekhaa MeenakshiSundaram
            </p>
            <p className="text-sm text-muted-foreground">Founder</p>
          </div>
        </div>

      </div>
    </section>
  )
}

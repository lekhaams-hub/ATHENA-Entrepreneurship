export function ContactFooter() {
  return (
    <section id="contact" className="bg-background py-20 lg:py-28 text-foreground">
      {/* Container - Clean 1-column center layout */}
      <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
        
        <p className="text-gold uppercase tracking-wider font-semibold text-sm mb-2">Get in Touch</p>
        <h2 className="text-4xl font-bold mb-4 text-foreground">Ready to play the startup game?</h2>
        <p className="text-muted-foreground mb-8">
          Tell us about your young entrepreneur and we'll reach out with enrollment details and upcoming cohort dates.
        </p>

        {/* Form - Points directly to your Formspree endpoint */}
        <form 
          action="https://formspree.io/f/mykawkvn" 
          method="POST" 
          className="space-y-4 max-w-xl mx-auto text-left"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input 
              type="text" 
              name="name" 
              placeholder="Parent / Student Name" 
              required 
              className="w-full bg-neutral-900 border border-neutral-800 rounded-md p-3 text-white focus:outline-none focus:border-gold"
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Email Address" 
              required 
              className="w-full bg-neutral-900 border border-neutral-800 rounded-md p-3 text-white focus:outline-none focus:border-gold"
            />
          </div>
          <textarea 
            name="message" 
            placeholder="Tell us a little about your interest..." 
            rows={4} 
            required
            className="w-full bg-neutral-900 border border-neutral-800 rounded-md p-3 text-white focus:outline-none focus:border-gold"
          />
          <button 
            type="submit" 
            className="w-full bg-gold text-black font-bold py-3 rounded-md transition hover:bg-yellow-600"
          >
            Submit Message
          </button>
        </form>

        {/* Contact Details - Phone Number */}
        <div className="mt-12 flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center space-x-3 text-foreground">
            <span className="text-gold">📞</span>
            <span className="font-medium text-lg">+91 95000 52371</span> 
          </div>
        </div>

      </div>
    </section>
  )
}

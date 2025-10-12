import SocialLinks from "./ui/SocialLinks"

const Contact = () => {
  return (
    <section id="contact" className="min-h-3/4 ">
      <div className="container py-20 px-6 mx-auto">
        <div className="glass-card flex flex-col justify-between items-center p-8 md:p-12 max-w-2xl mx-auto text-center">
          <div className="flex flex-col" >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">Get In Touch</h2>
            <p className="text-lg mb-8 text-muted-foreground">
              I'm always open to discussing new opportunities and interesting projects.
            </p>
          </div>
          <SocialLinks />
        </div>
      </div>
    </section>
  )
}

export default Contact

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-8 leading-tight">
                Let's Work Together
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light max-w-3xl mx-auto">
                Ready to ship your complex product or streamline your operations? Let's talk.
              </p>
            </div>
          </div>
        </section>

        {/* Main Contact Content */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
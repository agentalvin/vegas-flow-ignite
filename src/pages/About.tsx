import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, Award, Users, TrendingUp, Clock } from "lucide-react";
import founderPhoto from "@/assets/founder-photo.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-24 gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Why I Started{" "}
                <span className="text-primary">Vegas Business Automation</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                After 10+ years building automation systems for Fortune 500 companies, 
                I saw Las Vegas small businesses struggling with the same problems I'd already solved.
              </p>
            </div>
          </div>
        </section>

        {/* Personal Story */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  From Corporate to Community
                </h2>
                
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    After spending over a decade managing technology products at Fortune 500 companies 
                    and investing in Las Vegas real estate, I noticed the same problem everywhere: 
                    successful business owners drowning in manual processes that should be automated.
                  </p>
                  
                  <p>
                    I watched contractors lose leads because they couldn't respond fast enough. I saw 
                    med spas struggling with scheduling chaos. I witnessed service businesses working 
                    60+ hour weeks just to keep up with admin work.
                  </p>
                  
                  <p>
                    Having built automation systems for million-dollar companies, I knew these same 
                    solutions could transform local Las Vegas businesses – they just needed someone 
                    who understood both technology AND small business challenges.
                  </p>
                  
                  <p className="text-primary font-medium">
                    That's why I created Vegas Business Automation: to bring Fortune 500-level 
                    systems to the businesses that need them most.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Button variant="cta" size="lg">
                    Schedule Your Free Consultation
                  </Button>
                  <Button variant="outline" size="lg">
                    View Case Studies
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-large">
                  <img 
                    src={founderPhoto} 
                    alt="Business automation consultant"
                    className="w-full h-auto object-cover"
                  />
                  {/* Overlay with credentials */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-medium">
                      <div className="text-center">
                        <div className="text-lg font-bold text-primary">10+ Years Experience</div>
                        <div className="text-sm text-muted-foreground">Fortune 500 Technology Leadership</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Background decoration */}
                <div className="absolute -top-4 -right-4 w-24 h-24 gradient-secondary rounded-full opacity-20 blur-2xl"></div>
                <div className="absolute -bottom-8 -left-8 w-32 h-32 gradient-primary rounded-full opacity-10 blur-3xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Credentials */}
        <section className="py-16 md:py-24 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
                Why Trust Vegas Business Automation?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        Fortune 500 Experience
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        10+ years managing technology products for major corporations, 
                        bringing enterprise-level expertise to small business automation.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        Local Market Knowledge
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Las Vegas real estate investor with deep understanding of the local 
                        business landscape and unique market challenges.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        Proven Results
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        50+ local businesses automated with measurable results: 15+ hours saved 
                        weekly and 30-50% revenue increases.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        Small Business Focus
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Unlike large consulting firms, we specialize exclusively in service 
                        businesses with 3-20 employees who need practical, affordable solutions.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Check className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        Hands-On Implementation
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        We don't just give you advice – we build, implement, and maintain 
                        your automation systems so you can focus on your business.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        Local Commitment
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Based in Las Vegas with a commitment to helping our local business 
                        community thrive through smart automation solutions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-16 md:py-24 gradient-primary">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                Our Mission
              </h2>
              <p className="text-xl text-white/90 leading-relaxed mb-8">
                To eliminate the administrative burden that holds Las Vegas service businesses back, 
                giving owners the freedom to focus on what they do best: serving their clients and 
                growing their companies.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary mb-2">50+</div>
                  <div className="text-white/80">Businesses Transformed</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary mb-2">500+</div>
                  <div className="text-white/80">Hours Saved Monthly</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary mb-2">$2M+</div>
                  <div className="text-white/80">Additional Revenue Generated</div>
                </div>
              </div>

              <div className="mt-12">
                <Button variant="secondary" size="xl">
                  Start Your Automation Journey
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
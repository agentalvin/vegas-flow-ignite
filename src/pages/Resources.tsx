import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, BookOpen, Calculator, Clock, TrendingUp, Users, FileText, Video } from "lucide-react";

const Resources = () => {
  const leadMagnets = [
    {
      title: "5 Ways Vegas Businesses Waste $50K Annually",
      description: "Discover the hidden costs of manual processes and how automation can eliminate them completely.",
      type: "PDF Guide",
      pages: "24 pages",
      icon: FileText,
      downloadUrl: "#"
    },
    {
      title: "Small Business Automation Checklist",
      description: "Step-by-step checklist to identify automation opportunities in your Las Vegas business.",
      type: "Interactive Checklist", 
      pages: "12 items",
      icon: BookOpen,
      downloadUrl: "#"
    },
    {
      title: "ROI Calculator for Business Automation",
      description: "Calculate exactly how much time and money automation could save your business.",
      type: "Interactive Tool",
      pages: "Live calculator",
      icon: Calculator,
      downloadUrl: "#"
    }
  ];

  const blogPosts = [
    {
      title: "Why Vegas Service Businesses Need Automation Now",
      excerpt: "The Las Vegas market is competitive. Here's why automation is no longer optional for local service businesses.",
      category: "Strategy",
      readTime: "8 min read",
      date: "March 15, 2024",
      featured: true
    },
    {
      title: "The Real Cost of Manual Processes", 
      excerpt: "Break down the hidden costs of doing everything manually - from missed opportunities to employee burnout.",
      category: "ROI Analysis",
      readTime: "6 min read", 
      date: "March 10, 2024",
      featured: false
    },
    {
      title: "How to Choose Business Automation Tools",
      excerpt: "A practical guide to selecting the right automation tools for your Las Vegas business needs and budget.",
      category: "Technology",
      readTime: "10 min read",
      date: "March 5, 2024", 
      featured: false
    },
    {
      title: "Local Success Stories: Vegas Businesses Thriving with Automation",
      excerpt: "Real case studies from Las Vegas businesses that have transformed their operations with automation.",
      category: "Case Studies",
      readTime: "12 min read",
      date: "February 28, 2024",
      featured: true
    },
    {
      title: "Automation Myths Debunked for Small Businesses",
      excerpt: "Common misconceptions about business automation and why they're holding Las Vegas businesses back.",
      category: "Education",
      readTime: "7 min read",
      date: "February 20, 2024",
      featured: false
    },
    {
      title: "Setting Up Your First Automated Workflow",
      excerpt: "A beginner's guide to creating your first business automation - start with lead capture and follow-up.",
      category: "Tutorial",
      readTime: "15 min read",
      date: "February 15, 2024",
      featured: false
    }
  ];

  const categories = ["All", "Strategy", "Technology", "Case Studies", "ROI Analysis", "Education", "Tutorial"];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 gradient-subtle">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Free Resources for Vegas Business Owners
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Everything you need to understand, plan, and implement business automation. Download guides, use our calculators, and learn from real success stories.
            </p>
          </div>
        </section>

        {/* Lead Magnets */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Free Downloads & Tools
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Get instant access to our most valuable resources - completely free, no strings attached.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {leadMagnets.map((resource, index) => (
                <Card key={index} className="border-border shadow-soft hover:shadow-medium transition-smooth group">
                  <CardHeader className="text-center pb-4">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-smooth">
                      <resource.icon className="w-8 h-8 text-primary" />
                    </div>
                    <Badge variant="outline" className="mb-3">{resource.type}</Badge>
                    <CardTitle className="text-xl font-bold text-foreground">{resource.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">{resource.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="text-sm text-muted-foreground mb-6">{resource.pages}</div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full group/btn">
                      <Download className="w-4 h-4 mr-2 group-hover/btn:translate-y-1 transition-transform" />
                      Download Free
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 md:py-24 gradient-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Get Weekly Automation Tips
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join 500+ Las Vegas business owners getting practical automation advice delivered to their inbox every Tuesday.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <Button variant="secondary" size="lg">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-white/70 mt-4">
              No spam. Unsubscribe anytime. Local Vegas content only.
            </p>
          </div>
        </section>

        {/* Blog Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Latest Automation Insights
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Practical advice, case studies, and step-by-step guides to help you automate and grow your Las Vegas business.
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category, index) => (
                <Button 
                  key={index}
                  variant={index === 0 ? "default" : "outline"} 
                  size="sm"
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Featured Posts */}
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {blogPosts.filter(post => post.featured).map((post, index) => (
                <Card key={index} className="border-border shadow-soft hover:shadow-medium transition-smooth overflow-hidden group">
                  <div className="aspect-video bg-gradient-subtle"></div>
                  <CardHeader>
                    <div className="flex items-center space-x-2 mb-2">
                      <Badge variant="outline">{post.category}</Badge>
                      <span className="text-sm text-muted-foreground">{post.readTime}</span>
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-smooth">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardFooter className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">{post.date}</span>
                    <Button variant="ghost" size="sm" className="group/btn">
                      Read More
                      <span className="ml-1 group-hover/btn:translate-x-1 transition-transform">→</span>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {/* All Posts */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.filter(post => !post.featured).map((post, index) => (
                <Card key={index} className="border-border shadow-soft hover:shadow-medium transition-smooth group">
                  <CardHeader>
                    <div className="flex items-center space-x-2 mb-2">
                      <Badge variant="outline" className="text-xs">{post.category}</Badge>
                      <span className="text-xs text-muted-foreground">{post.readTime}</span>
                    </div>
                    <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-smooth line-clamp-2">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground text-sm line-clamp-3">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardFooter className="flex justify-between items-center">
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                    <Button variant="ghost" size="sm" className="group/btn">
                      Read
                      <span className="ml-1 group-hover/btn:translate-x-1 transition-transform">→</span>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 md:py-24 gradient-subtle">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Get Started with Automation?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Stop reading about automation and start experiencing its benefits. Schedule your free consultation today.
            </p>
            <Button variant="hero" size="xl" className="group">
              Schedule Your Free Consultation
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Resources;
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Youtube, Code, Cloud, Server, Mail, ExternalLink, Play, Users, Calendar } from "lucide-react";

const Index = () => {
  const technologies = [
    { name: ".NET", icon: Code },
    { name: "Azure", icon: Cloud },
    { name: "AWS", icon: Server },
    { name: "React", icon: Code },
  ];

  const featuredVideos = [
    {
      title: "Remove DUPLICATE files with new PC Manager App from Microsoft!",
      description: "Life changing app release from Microsoft for managing duplicate files efficiently",
      thumbnail: "https://i.ytimg.com/vi/uRncMLX-V0Y/maxresdefault.jpg",
      duration: "8:25",
      views: "592",
      url: "https://www.youtube.com/watch?v=uRncMLX-V0Y"
    },
    {
      title: "How To: Convert ANY bike into a Mental 6000 watt Dual Motor E-BIKE!",
      description: "Detailed guide on fitting dual 3000watt electric hub motor wheels onto any hardtail mountain bike",
      thumbnail: "https://i.ytimg.com/vi/aSNGRDH6sHo/maxresdefault.jpg",
      duration: "18:42",
      views: "5.2K",
      url: "https://www.youtube.com/watch?v=aSNGRDH6sHo"
    },
    {
      title: "Finally HERE! Elon Musk Announces $6,375 Tesla Tiny House",
      description: "2026 Game-Changer Revealed! How the Tesla Tiny House makes you 100% energy independent",
      thumbnail: "https://i.ytimg.com/vi/5IDoI3qYJQA/maxresdefault.jpg",
      duration: "16:30",
      views: "8.1K",
      url: "https://www.youtube.com/watch?v=5IDoI3qYJQA"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Youtube className="h-8 w-8 text-destructive" />
              <span className="text-2xl font-bold">TechDudes</span>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
              <a href="#tutorials" className="text-foreground hover:text-primary transition-colors">Tutorials</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
            </div>
            <Button asChild>
              <a href="https://youtube.com/@techdudes3771?si=bD7mgSzgtsPKPkbC" target="_blank" rel="noopener noreferrer">
                <Youtube className="mr-2 h-4 w-4" />
                Subscribe
              </a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              TechDudes
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Senior .NET Developer sharing knowledge through comprehensive tutorials on .NET, Azure, AWS, and React
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {technologies.map((tech) => (
                <Badge key={tech.name} variant="secondary" className="px-4 py-2 text-lg">
                  <tech.icon className="mr-2 h-5 w-5" />
                  {tech.name}
                </Badge>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="https://youtube.com/@techdudes3771?si=bD7mgSzgtsPKPkbC" target="_blank" rel="noopener noreferrer">
                  <Youtube className="mr-2 h-5 w-5" />
                  Watch Latest Videos
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#tutorials">
                  <Play className="mr-2 h-5 w-5" />
                  Browse Tutorials
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">About TechDudes</h2>
            <p className="text-lg text-muted-foreground mb-12">
              Welcome to TechDudes! I'm a Senior .NET Developer with years of experience in enterprise software development. 
              Through this channel, I share my expertise and passion for technology by creating comprehensive tutorials 
              that help developers at all levels master modern development tools and practices.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <Code className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>.NET & C#</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Deep dive into .NET framework, C# best practices, and modern development patterns
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Cloud className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Cloud Platforms</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Master Azure and AWS services for scalable, enterprise-grade applications
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Code className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>React & Frontend</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Build modern, responsive web applications using React and modern JavaScript
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tutorials */}
      <section id="tutorials" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Tutorials</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredVideos.map((video, index) => (
                <Card key={index} className="group hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="relative">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Play className="h-12 w-12 text-white" />
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-sm">
                      {video.duration}
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="line-clamp-2">{video.title}</CardTitle>
                    <CardDescription className="line-clamp-3">{video.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {video.views} views
                      </span>
                      <Button size="sm" variant="ghost" asChild>
                        <a href={video.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button size="lg" asChild>
                <a href="https://youtube.com/@techdudes3771?si=bD7mgSzgtsPKPkbC" target="_blank" rel="noopener noreferrer">
                  <Youtube className="mr-2 h-5 w-5" />
                  View All Tutorials
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Get In Touch</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Have questions about a tutorial or want to suggest a topic? I'd love to hear from you!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="mailto:techdudesadda@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Email Me
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://youtube.com/@techdudes3771?si=bD7mgSzgtsPKPkbC" target="_blank" rel="noopener noreferrer">
                  <Youtube className="mr-2 h-5 w-5" />
                  YouTube Channel
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Youtube className="h-6 w-6 text-destructive" />
            <span className="text-xl font-bold">TechDudes</span>
          </div>
          <p className="text-muted-foreground">
            © 2025 TechDudes. Sharing knowledge, building the future.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

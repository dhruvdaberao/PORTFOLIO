import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, Github, Download, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-secondary/20 border-t border-border/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Get In Touch</h2>
          <p className="mt-2 text-muted-foreground max-w-xl mx-auto text-sm">
            Whether you have a job opportunity, a project collaboration, or just want to connect, my inbox is always open!
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            <div className="flex flex-wrap justify-center gap-4">
              <Card className="w-full md:w-[calc(50%-8px)] bg-card border border-accent/30 shadow-sm hover:border-accent hover:shadow-md transition-all duration-200">
                <CardContent className="flex items-center gap-4 p-5 h-full">
                  <div className="h-10 w-10 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-foreground">Email</div>
                    <a href="mailto:dhruvdaberao@gmail.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground text-xs font-medium transition-colors">
                      dhruvdaberao@gmail.com
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="w-full md:w-[calc(50%-8px)] bg-card border border-accent/30 shadow-sm hover:border-accent hover:shadow-md transition-all duration-200">
                <CardContent className="flex items-center gap-4 p-5 h-full">
                  <div className="h-10 w-10 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center shrink-0">
                    <Linkedin className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-foreground">LinkedIn</div>
                    <a href="https://www.linkedin.com/in/dhruvdaberao/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground text-xs font-medium transition-colors">
                      linkedin.com/in/dhruvdaberao/
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="w-full md:w-[calc(50%-8px)] bg-card border border-accent/30 shadow-sm hover:border-accent hover:shadow-md transition-all duration-200">
                <CardContent className="flex items-center gap-4 p-5 h-full">
                  <div className="h-10 w-10 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center shrink-0">
                    <Github className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-foreground">GitHub</div>
                    <a href="https://github.com/dhruvdaberao" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground text-xs font-medium transition-colors">
                      github.com/dhruvdaberao
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="w-full md:w-[calc(50%-8px)] bg-card border border-accent/30 shadow-sm hover:border-accent hover:shadow-md transition-all duration-200">
                <CardContent className="flex items-center gap-4 p-5 h-full">
                  <div className="h-10 w-10 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center shrink-0">
                    <Download className="h-5 w-5 text-accent" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-sm text-foreground">Resume</div>
                    <a 
                      href="/I2K221215_DhruvDaberao_Resume.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground text-xs font-medium transition-colors inline-flex items-center gap-1"
                    >
                      Download Placement Resume
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="w-full md:w-[calc(50%-8px)] bg-card border border-accent/30 shadow-sm hover:border-accent hover:shadow-md transition-all duration-200">
                <CardContent className="flex items-center gap-4 p-5 h-full">
                  <div className="h-10 w-10 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-foreground">WhatsApp / Phone</div>
                    <a href="https://wa.me/+919322417984" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground text-xs font-medium transition-colors">
                      +91 93224 17984
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

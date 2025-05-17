
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Linkedin, Github, Download } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    console.log("Form submitted");
    alert("Thanks for your message! I'll get back to you soon.");
  };

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">Get In Touch</h2>
          <div className="mt-2 h-1 w-20 bg-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="animate-in">
            <h3 className="text-xl font-medium mb-4">Contact Information</h3>
            <p className="mb-8 text-muted-foreground">
              Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
            </p>

            <div className="space-y-6">
              <Card>
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <div className="font-medium">Email</div>
                    <a href="mailto:dhruvdaberao@gmail.com" className="text-muted-foreground hover:text-accent">
                      dhruvdaberao@gmail.com
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <Linkedin className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <div className="font-medium">LinkedIn</div>
                    <a href="https://www.linkedin.com/in/dhruv-daberao-30976b25a/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent">
                      linkedin.com/in/dhruvdaberao-30976b25a
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <Github className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <div className="font-medium">GitHub</div>
                    <a href="https://github.com/dhruvdaberao" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent">
                      github.com/dhruvdaberao
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <Download className="h-5 w-5 text-accent" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">Resume</div>
                    <Button 
                      variant="link" 
                      className="p-0 h-auto text-muted-foreground hover:text-accent"
                      onClick={() => window.open("/resume.pdf", "_blank")}
                    >
                      Download my resume
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="animate-in animate-delay-100">
            <h3 className="text-xl font-medium mb-4">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input type="text" placeholder="Your Name" required />
              </div>
              <div>
                <Input type="email" placeholder="Your Email" required />
              </div>
              <div>
                <Input type="text" placeholder="Subject" required />
              </div>
              <div>
                <Textarea placeholder="Your Message" rows={5} required />
              </div>
              <div>
                <Button type="submit" className="w-full bg-accent hover:bg-accent/80">
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

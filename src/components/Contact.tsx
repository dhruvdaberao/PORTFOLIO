import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, Github, Download, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Get In Touch</h2>
          <div className="mt-2 h-1 w-20 bg-accent mx-auto"></div>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            <div className="animate-in">
              <p className="mb-6 text-center text-muted-foreground">
                Reach out for collaboration or inquiries.
              </p>

              <div className="space-y-4">
                <Card className="h-20">
                  <CardContent className="flex items-center gap-3 p-3">
                    <div className="h-8 w-8 rounded-full bg-accent/10 flex items-center justify-center">
                      <Mail className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <div className="font-medium text-sm">Email</div>
                      <a href="https://mail.google.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent text-sm">
                        dhruvdaberao@gmail.com
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="h-20">
                  <CardContent className="flex items-center gap-3 p-3">
                    <div className="h-8 w-8 rounded-full bg-accent/10 flex items-center justify-center">
                      <Linkedin className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <div className="font-medium text-sm">LinkedIn</div>
                      <a href="https://www.linkedin.com/in/dhruv-daberao-30976b25a/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent text-sm">
                        linkedin.com/in/dhruvdaberao-30976b25a
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="h-20">
                  <CardContent className="flex items-center gap-3 p-3">
                    <div className="h-8 w-8 rounded-full bg-accent/10 flex items-center justify-center">
                      <Github className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <div className="font-medium text-sm">GitHub</div>
                      <a href="https://github.com/dhruvdaberao" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent text-sm">
                        github.com/dhruvdaberao
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="h-20">
                  <CardContent className="flex items-center gap-3 p-3">
                    <div className="h-8 w-8 rounded-full bg-accent/10 flex items-center justify-center">
                      <Download className="h-4 w-4 text-accent" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-sm">Resume</div>
                      <a 
                        href="/DhruvDaberao-Resume.pdf" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-0 h-auto text-muted-foreground hover:text-accent text-sm"
                      >
                        Download my resume
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="h-20">
                  <CardContent className="flex items-center gap-3 p-3">
                    <div className="h-8 w-8 rounded-full bg-accent/10 flex items-center justify-center">
                      <Phone className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <div className="font-medium text-sm">WhatsApp</div>
                      <a href="https://wa.me/+919322417984" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent text-sm">
                        +91 93224 17984
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
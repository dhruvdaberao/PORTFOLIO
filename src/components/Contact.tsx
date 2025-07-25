// import React from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Mail, Linkedin, Github, Download } from "lucide-react";

// const Contact = () => {
//   return (
//     <section id="contact" className="py-20 bg-secondary/30">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl font-bold">Get In Touch</h2>
//           <div className="mt-2 h-1 w-20 bg-accent mx-auto"></div>
//         </div>

//         <div className="grid grid-cols-1 max-w-5xl mx-auto">
//           <div className="animate-in">
//             <h3 className="text-xl font-medium mb-4">Contact Information</h3>
//             <p className="mb-8 text-muted-foreground">
//               Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
//             </p>

//             <div className="space-y-6">
//               <Card>
//                 <CardContent className="flex items-center gap-4 p-4">
//                   <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center">
//                     <Mail className="h-5 w-5 text-accent" />
//                   </div>
//                   <div>
//                     <div className="font-medium">Email</div>
//                     <a href="https://mail.google.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent">
//                       dhruvdaberao@gmail.com
//                     </a>
//                   </div>
//                 </CardContent>
//               </Card>

//               <Card>
//                 <CardContent className="flex items-center gap-4 p-4">
//                   <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center">
//                     <Linkedin className="h-5 w-5 text-accent" />
//                   </div>
//                   <div>
//                     <div className="font-medium">LinkedIn</div>
//                     <a href="https://www.linkedin.com/in/dhruv-daberao-30976b25a/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent">
//                       linkedin.com/in/dhruvdaberao-30976b25a
//                     </a>
//                   </div>
//                 </CardContent>
//               </Card>

//               <Card>
//                 <CardContent className="flex items-center gap-4 p-4">
//                   <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center">
//                     <Github className="h-5 w-5 text-accent" />
//                   </div>
//                   <div>
//                     <div className="font-medium">GitHub</div>
//                     <a href="https://github.com/dhruvdaberao" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent">
//                       github.com/dhruvdaberao
//                     </a>
//                   </div>
//                 </CardContent>
//               </Card>

//               <Card>
//                 <CardContent className="flex items-center gap-4 p-4">
//                   <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center">
//                     <Download className="h-5 w-5 text-accent" />
//                   </div>
//                   <div className="flex-1">
//                     <div className="font-medium">Resume</div>
//                     <Button 
//                       variant="link" 
//                       className="p-0 h-auto text-muted-foreground hover:text-accent"
//                       onClick={() => window.open("/DhruvDaberao-Resume.pdf", "_blank")}
//                     >
//                       Download my resume
//                     </Button>
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>

//           {/* <div className="animate-in animate-delay-100">
//             <h3 className="text-xl font-medium mb-4">Send Me a Message</h3>
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div>
//                 <Input type="text" placeholder="Your Name" required />
//               </div>
//               <div>
//                 <Input type="email" placeholder="Your Email" required />
//               </div>
//               <div>
//                 <Input type="text" placeholder="Subject" required />
//               </div>
//               <div>
//                 <Textarea placeholder="Your Message" rows={5} required />
//               </div>
//               <div>
//                 <Button type="submit" className="w-full bg-accent hover:bg-accent/80">
//                   Send Message
//                 </Button>
//               </div>
//             </form>
//           </div> */}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;



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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="animate-in">
            <h3 className="text-xl font-medium mb-4">Contact Information</h3>
            <p className="mb-6 text-muted-foreground">
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
    </section>
  );
};

export default Contact;
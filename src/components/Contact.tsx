import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Mail, ArrowUpRight } from 'lucide-react';

const contactLinks = [
  {
    name: "Email",
    href: "mailto:nicolas@example.com",
    description: "nicolas@example.com"
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/nicolaslundin",
    description: "Connect with me"
  },
  {
    name: "Dribbble",
    href: "https://dribbble.com/nicolaslundin",
    description: "View my work"
  },
  {
    name: "Resume",
    href: "#",
    description: "Download PDF"
  }
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-8">Let's Connect</h2>
          
          <p className="text-muted-foreground mb-12 max-w-2xl leading-relaxed">
            I'm always interested in discussing new opportunities, especially those involving 
            design systems, fintech, or complex product challenges. Feel free to reach out if 
            you'd like to work together or just want to chat about design.
          </p>

          <div className="space-y-6">
            {contactLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ x: 10 }}
                className="group flex items-center justify-between py-4 border-b border-border hover:border-foreground transition-colors duration-200"
              >
                <div>
                  <div className="font-medium group-hover:text-muted-foreground transition-colors duration-200">
                    {link.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {link.description}
                  </div>
                </div>
                
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-8 h-8 flex items-center justify-center"
                >
                  <ArrowUpRight size={16} className="text-muted-foreground group-hover:text-foreground transition-colors duration-200" />
                </motion.div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
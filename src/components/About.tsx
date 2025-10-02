import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-8">About</h2>
          
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              I'm a Senior Product Designer from Santiago, Chile, with extensive experience 
              creating user-friendly solutions for digital products. I specialize in design systems, 
              fintech, and transforming complex processes into intuitive experiences.
            </p>
            
            <p>
              My approach focuses on systematic design thinking and cross-functional collaboration. 
              I excel at building scalable design systems from inception and leading design teams 
              to deliver consistent, high-quality user experiences.
            </p>
            
            <p>
              Throughout my career, I've worked across diverse industries including AI platforms, 
              cryptocurrency, cannabis tech, financial services, and insurtech. I'm passionate about 
              making complex technologies accessible and user-friendly.
            </p>
            
            <p>
              I believe in the power of design systems to scale quality and consistency, and I'm 
              always looking for opportunities to mentor other designers and share knowledge within 
              the design community.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 pt-8 border-t border-border"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
              <div>
                <h4 className="mb-3">Tools</h4>
                <div className="space-y-1 text-muted-foreground">
                  <p>Figma</p>
                  <p>Sketch</p>
                  <p>Principle</p>
                  <p>Adobe Creative Suite</p>
                </div>
              </div>
              
              <div>
                <h4 className="mb-3">Skills</h4>
                <div className="space-y-1 text-muted-foreground">
                  <p>User Research</p>
                  <p>Information Architecture</p>
                  <p>Interaction Design</p>
                  <p>Design Systems</p>
                </div>
              </div>
              
              <div>
                <h4 className="mb-3">Industries</h4>
                <div className="space-y-1 text-muted-foreground">
                  <p>AI & Machine Learning</p>
                  <p>Fintech & Crypto</p>
                  <p>Insurtech</p>
                  <p>Financial Services</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
import { motion } from 'motion/react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between"
        >
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {currentYear} Emily Chen. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-6 text-sm">
            <motion.a
              href="https://linkedin.com/in/emilychen"
              whileHover={{ y: -2 }}
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              LinkedIn
            </motion.a>
            <motion.a
              href="https://dribbble.com/emilychen"
              whileHover={{ y: -2 }}
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Dribbble
            </motion.a>
            <motion.a
              href="mailto:emily@example.com"
              whileHover={{ y: -2 }}
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Email
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
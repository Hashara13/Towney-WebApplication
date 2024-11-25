import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import logo from "../../assets/images/logos/lg-2.png";

function Footer() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <motion.footer 
      className="bg-gray-100 dark:bg-gray-900 pt-16 pb-8"
      initial="initial"
      animate="animate"
      variants={{
        animate: {
          transition: {
            staggerChildren: 0.05
          }
        }
      }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-8">
          <motion.div variants={fadeInUp} className="col-span-1 md:col-span-2 lg:col-span-1">
            <img src={logo} alt="Company Logo" className="h-30 w-auto mb-1" />
            {/* <p className="text-gray-600 dark:text-gray-400 mb-1">
              Empowering contents with innovative talents.
            </p> */}
         
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 ml-8">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/about">Find Crew</FooterLink>
              <FooterLink href="/services">Find Crew</FooterLink>
              <FooterLink href="/portfolio">Talent Groups</FooterLink>
              <FooterLink href="/contact">Join Towney</FooterLink>
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 ml-8">Services</h3>
            <ul className="space-y-2">
              <FooterLink href="/services/web-development">Script Publish</FooterLink>
              <FooterLink href="/services/mobile-apps">Find Proffesionals</FooterLink>
              <FooterLink href="/services/ui-ux-design">Assign Groups</FooterLink>
              <FooterLink href="/services/cloud-solutions">Book Talent Groups</FooterLink>
              <FooterLink href="/services/consulting">Content Consulting</FooterLink>
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-600 dark:text-gray-400">
                <MapPin size={16} className="mr-2" />
                123, 1st Street, Colombo 06, LK
              </li>
              <li>
                <a href="tel:+11234567890" className="flex items-center text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">
                  <Phone size={16} className="mr-2" />
                  +94 (123) 456-7890
                </a>
              </li>
              <li>
                <a href="mailto:info@example.com" className="flex items-center text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">
                  <Mail size={16} className="mr-2" />
                  info@towney.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div 
          variants={fadeInUp}
          className="mt-5 pt-8 border-t border-gray-200 dark:border-gray-700"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Towney. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <SocialIcon href="https://facebook.com" aria-label="Facebook">
                <Facebook size={20} />
              </SocialIcon>
              <SocialIcon href="https://twitter.com" aria-label="Twitter">
                <Twitter size={20} />
              </SocialIcon>
              <SocialIcon href="https://instagram.com" aria-label="Instagram">
                <Instagram size={20} />
              </SocialIcon>
              <SocialIcon href="https://linkedin.com" aria-label="LinkedIn">
                <Linkedin size={20} />
              </SocialIcon>
            </div>
            <div className="flex space-x-4">
              <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
              <FooterLink href="/terms-of-service">Terms of Service</FooterLink>
            </div>
          </div>
        </motion.div>

        <motion.div 
          variants={fadeInUp}
          className="mt-8 text-center"
        >
          <a 
            href="#top" 
            className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300"
          >
            Back to Top
            <ExternalLink size={16} className="ml-1" />
          </a>
        </motion.div>
      </div>
    </motion.footer>
  );
}

function SocialIcon({ children, href, ...props }) {
  return (
    <motion.a
      href={href}
      className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      {...props}
    >
      {children}
    </motion.a>
  );
}

function FooterLink({ children, href }) {
  return (
    <li>
      <motion.a
        href={href}
        className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400"
        whileHover={{ x: 5 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        {children}
      </motion.a>
    </li>
  );
}

export default Footer;
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Mail, ArrowUpRight, Heart, Zap } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { label: 'Email', href: 'mailto:yassine.fath@gmail.com', icon: Mail, isComponent: true },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/yassine-fathallah-qa-automatisation/', icon: '/linkedin.png', isComponent: false },
    { label: 'Malt', href: 'https://www.malt.fr/profile/yassinefathallahqaautomaticienfreelancecypress', icon: '/malt.png', isComponent: false },
    { label: 'Collective Work', href: 'https://app.collective.work/network-invitation/yassine-fathallah', icon: '/collective.png', isComponent: false },
    { label: 'Calendly', href: 'https://calendly.com/yassine-fath', icon: '/calendly.png', isComponent: false },
  ]

  const navLinks = [
    { id: 'about', label: 'À propos' },
    { id: 'skills', label: 'Compétences' },
    { id: 'experience', label: 'Expérience' },
    { id: 'education', label: 'Formation' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <footer className="relative border-t border-border/50 bg-gradient-to-b from-white to-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        
        {/* === GRID === */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 lg:gap-16 mb-14 sm:mb-16">
          
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="sm:col-span-2 lg:col-span-1"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-lg">YF</span>
              </div>
              <div>
                <h3 className="font-bold text-foreground">Yassine Fathallah</h3>
                <p className="text-xs text-muted-foreground">QA Automatisation</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Expert en frameworks E2E et stratégie de test. Transformez votre qualité logicielle.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(link.id)
                      element?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Liens */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              Connectez-vous
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                    className="group inline-flex items-center gap-2.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.isComponent ? (
                      <link.icon className="w-4 h-4 text-muted-foreground/50 group-hover:text-primary transition-colors" />
                    ) : (
                      <Image
                        src={link.icon as string}
                        alt={link.label}
                        width={16}
                        height={16}
                        className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity"
                      />
                    )}
                    <span>{link.label}</span>
                    {!link.href.startsWith('mailto:') && (
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border/50 to-transparent mb-8" />

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
        >
          <p className="text-xs sm:text-sm text-muted-foreground">
            &copy; {currentYear} Yassine Fathallah. Tous droits réservés.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
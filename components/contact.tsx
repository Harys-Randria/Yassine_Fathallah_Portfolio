'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Mail, ArrowUpRight, Sparkles, Calendar } from 'lucide-react'

export default function Contact() {
  const contactSecondary = [
    {
      label: 'Email',
      value: 'yassine.fath@gmail.com',
      href: 'mailto:yassine.fath@gmail.com',
      icon: Mail,
      isComponent: true,
      bg: 'hover:bg-blue-50',
      border: 'hover:border-blue-200/50',
      iconBg: 'bg-blue-50 group-hover:bg-blue-100',
      iconColor: 'text-blue-500',
      accent: 'group-hover:text-blue-600',
    },
    {
      label: 'LinkedIn',
      value: 'Voir mon profil',
      href: 'https://www.linkedin.com/in/yassine-fathallah-qa-automatisation/',
      icon: '/linkedin.png',
      isComponent: false,
      bg: 'hover:bg-sky-50',
      border: 'hover:border-sky-200/50',
      iconBg: 'bg-sky-50 group-hover:bg-sky-100',
      accent: 'group-hover:text-sky-600',
    },
    {
      label: 'Malt',
      value: 'Consulter mes missions',
      href: 'https://www.malt.fr/profile/yassinefathallahqaautomaticienfreelancecypress',
      icon: '/malt.png',
      isComponent: false,
      bg: 'hover:bg-orange-50',
      border: 'hover:border-orange-200/50',
      iconBg: 'bg-orange-50 group-hover:bg-orange-100',
      accent: 'group-hover:text-orange-600',
    },
    {
      label: 'Collective Work',
      value: 'Rejoindre mon réseau',
      href: 'https://app.collective.work/network-invitation/yassine-fathallah',
      icon: '/collective.png',
      isComponent: false,
      bg: 'hover:bg-violet-50',
      border: 'hover:border-violet-200/50',
      iconBg: 'bg-violet-50 group-hover:bg-violet-100',
      accent: 'group-hover:text-violet-600',
    },
  ]

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* === HEADER === */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-10 sm:mb-14 lg:mb-16"
        >
          <span className="inline-block text-xs sm:text-sm font-medium text-primary bg-primary/10 px-3 py-1.5 rounded-full mb-4">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Travaillons{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              ensemble
            </span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
            Disponible pour missions freelance, consulting ou CDI. Discutons de vos besoins QA.
          </p>
        </motion.div>

        <div className="space-y-4 sm:space-y-5">
          {/* === CALENDLY === */}
          <motion.a
            href="https://calendly.com/yassine-fath"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4 }}
            className="group relative block overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-blue-600 to-accent p-6 sm:p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-500"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
            <div className="absolute bottom-0 left-1/2 w-48 h-48 bg-black/10 rounded-full blur-3xl translate-y-1/2" />
            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[size:24px_24px]" />

            <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
              <div className="flex items-center gap-5">
                <div className="relative">
                  <div className="absolute inset-0 bg-white/30 rounded-2xl blur-md" />
                  <div className="relative w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                    <Image
                      src="/calendly.png"
                      alt="Calendly"
                      width={32}
                      height={32}
                      className="w-7 h-7 sm:w-8 sm:h-8"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2.5 mb-1">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                      Planifier un appel
                    </h3>
                    <Sparkles className="w-5 h-5 text-yellow-300 animate-pulse" />
                  </div>
                  <p className="text-white/75 text-sm sm:text-base leading-relaxed">
                    Choisissez un créneau qui vous convient — rapide et sans engagement
                  </p>
                </div>
              </div>
              <span className="inline-flex items-center gap-2.5 text-white font-semibold text-sm sm:text-base bg-white/20 backdrop-blur-sm border border-white/20 px-6 py-3.5 rounded-2xl group-hover:bg-white/30 group-hover:border-white/30 transition-all whitespace-nowrap shadow-lg">
                <Calendar className="w-4 h-4" />
                Réserver un créneau
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </span>
            </div>
          </motion.a>

          {/* === GRILLE === */}
          <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
            {contactSecondary.map((contact, index) => (
              <motion.a
                key={index}
                href={contact.href}
                target={contact.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={contact.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + index * 0.06, duration: 0.4 }}
                whileHover={{ y: -2 }}
                className={`group flex items-center gap-4 bg-white ${contact.bg} ${contact.border} border border-border/40 rounded-2xl p-4 sm:p-5 transition-all duration-300 hover:shadow-lg hover:border-transparent`}
              >
                <div className={`w-11 h-11 sm:w-12 sm:h-12 ${contact.iconBg} rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300`}>
                  {contact.isComponent ? (
                    <contact.icon className={`w-5 h-5 ${contact.iconColor}`} />
                  ) : (
                    <Image
                      src={contact.icon as string}
                      alt={contact.label}
                      width={24}
                      height={24}
                      className="w-5 h-5 sm:w-6 sm:h-6"
                    />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className={`text-sm sm:text-base font-semibold text-foreground transition-colors duration-300 ${contact.accent}`}>
                    {contact.label}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground truncate">
                    {contact.value}
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-muted/0 group-hover:bg-muted flex items-center justify-center flex-shrink-0 transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground/30 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
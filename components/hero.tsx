'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowDown, Download, Calendar, Mail } from 'lucide-react'

export default function Hero() {
  const scrollToNext = () => {
    const skills = document.getElementById('skills')
    if (skills) skills.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-b from-white via-blue-50/30 to-white">
      {/* Grid background subtil */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,black_20%,transparent_80%)]" />
      
      {/* Orbs décoratives */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      {/* Transition vers le bas */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />

      <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 lg:pt-36 pb-16 sm:pb-20">
        <div className="flex flex-col lg:grid lg:grid-cols-[1fr_340px] xl:grid-cols-[1fr_400px] gap-8 lg:gap-12 xl:gap-16 items-center">
          
          {/* === TEXTE === */}
          <div className="order-2 lg:order-1 space-y-5 sm:space-y-6 text-center lg:text-left">
            
            {/* Badge statut + localisation */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs sm:text-sm font-medium border border-emerald-200/50">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Disponible
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-muted text-muted-foreground text-xs sm:text-sm font-medium border border-border/50">
                Remote
              </span>
            </motion.div>

            {/* Titre */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-2"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight text-foreground leading-[1.05]">
                <span className="block">Yassine{' '}</span>
                <span className="bg-gradient-to-r from-primary via-blue-600 to-accent bg-clip-text text-transparent">
                  Fathallah
                </span>
              </h1>
            </motion.div>

            {/* Sous-titre */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg sm:text-xl xl:text-2xl text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              Ingénieur QA Automatisation —{' '}
              <span className="font-semibold text-foreground">11+ ans</span>
              {' '}à fiabiliser des applications critiques pour des clients exigeants.
            </motion.p>

            {/* Stats rapides - mobile friendly */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="flex items-center justify-center lg:justify-start gap-4 sm:gap-6 pt-2"
            >
              {[
                { value: '11+', label: 'Années' },
                { value: '5', label: 'Freelance' },
                { value: '30+', label: 'Clients' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="text-xl sm:text-2xl font-bold text-primary">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-3 pt-3 justify-center lg:justify-start"
            >
              <a
                href="/CV-Yassine-Fathallah.pdf"
                download
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-foreground text-white text-sm font-medium rounded-2xl hover:bg-foreground/90 transition-all hover:shadow-lg hover:shadow-foreground/10 active:scale-95"
              >
                <Download className="w-4 h-4" />
                Télécharger CV
              </a>
              <a
                href="https://calendly.com/yassine-fath"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-foreground text-sm font-medium rounded-2xl border border-border/50 hover:border-primary/30 hover:text-primary transition-all active:scale-95"
              >
                <Calendar className="w-4 h-4" />
                Planifier un appel
              </a>
            </motion.div>

            {/* Liens rapides - mobile optimisé */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="flex items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <a
                href="mailto:yassine.fath@gmail.com"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Email</span>
              </a>
              <span className="w-1 h-1 rounded-full bg-border" />
              <a
                href="https://linkedin.com/in/yassine-fathallah-qa-automatisation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
            </motion.div>
          </div>

          {/* === PHOTO === */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2 relative mx-auto w-48 sm:w-56 lg:w-full max-w-[320px] lg:max-w-none"
          >
            {/* Glow derrière la photo */}
            <div className="absolute -inset-6 sm:-inset-8 bg-gradient-to-br from-primary/20 via-accent/10 to-transparent rounded-[2rem] sm:rounded-[2.5rem] blur-2xl" />
            
            {/* Conteneur photo */}
            <div className="relative rounded-2xl sm:rounded-[2rem] overflow-hidden border-2 border-white/80 shadow-xl shadow-black/5">
              <Image
                src="/yassine.jpg"
                alt="Yassine Fathallah"
                width={400}
                height={400}
                className="w-full h-auto object-cover aspect-[3/4] sm:aspect-square"
                priority
              />
            </div>

            {/* Badge flottant */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 bg-white rounded-xl sm:rounded-2xl px-3 py-2 sm:px-4 sm:py-3 shadow-lg border border-border/50 backdrop-blur-sm"
            >
              <p className="text-lg sm:text-2xl font-bold text-primary">11+</p>
              <p className="text-[10px] sm:text-xs text-muted-foreground whitespace-nowrap">ans d'expérience</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs font-medium">Découvrir</span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="w-4 h-4" />
          </motion.span>
        </motion.button>
      </div>
    </section>
  )
}
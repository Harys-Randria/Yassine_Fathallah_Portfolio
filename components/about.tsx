'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { Wrench, LineChart, Globe } from 'lucide-react'

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)

  const competencies = [
    {
      title: 'Automatisation',
      subtitle: 'From Scratch',
      icon: Wrench,
      gradient: 'from-blue-500 to-blue-600',
      bgLight: 'bg-blue-50',
      borderLight: 'border-blue-200/50',
      dotColor: 'bg-blue-500',
      description: 'Expert en création de frameworks de test pour web et mobile.',
      items: [
        'Frameworks Cypress, Playwright, Selenium, Appium',
        'Migration WebDriver → Cypress',
        'Smoke Tests & non-régression',
        'Intégration CI/CD Jenkins, GitLab',
      ],
    },
    {
      title: 'Stratégie',
      subtitle: '& Pilotage',
      icon: LineChart,
      gradient: 'from-violet-500 to-purple-600',
      bgLight: 'bg-violet-50',
      borderLight: 'border-violet-200/50',
      dotColor: 'bg-violet-500',
      description: 'Structuration de stratégies de test et KPIs en environnements Agile.',
      items: [
        'Plans de test Agile/Scrum',
        'KPIs de couverture et qualité',
        'Gestion des anomalies',
        'Campagnes fonctionnelles',
      ],
    },
    {
      title: 'Autonomie',
      subtitle: 'Freelance',
      icon: Globe,
      gradient: 'from-emerald-500 to-teal-600',
      bgLight: 'bg-emerald-50',
      borderLight: 'border-emerald-200/50',
      dotColor: 'bg-emerald-500',
      description: '5 ans de freelance avec intégration rapide en équipes internationales.',
      items: [
        'Intégration équipes internationales',
        'Support technique & coaching',
        'Reprises d\'environnements',
        'Méthodologie structurée',
      ],
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-16 sm:py-20 lg:py-28 bg-white"
    >
      {/* Transition d'entrée depuis le Hero */}
      <div className="absolute top-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-b from-blue-50/30 to-white" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* === HEADER === */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs sm:text-sm font-medium text-primary bg-primary/10 px-3 py-1.5 rounded-full">
              À propos
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Qui suis-<span className="text-primary">je</span> ?
          </h2>
          
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-4xl">
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Ingénieur QA Automatisation avec{' '}
              <span className="font-semibold text-foreground">11 ans d'expérience</span>
              {' '}dont 5 en freelance. Spécialisé en automatisation E2E et fiabilisation des livraisons.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Références :{' '}
              <span className="font-medium text-foreground">M6 Publicité, Adobe Stock, HUBSIDE, Weborama, Availpro</span>.
            </p>
          </div>
        </motion.div>

        {/* === COMPETENCIES === */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {competencies.map((comp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="group relative"
            >
              <div className={`relative h-full ${comp.bgLight} rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-7 border ${comp.borderLight} transition-all duration-300 group-hover:shadow-xl group-hover:shadow-${comp.dotColor}/5`}>
                
                {/* Icon */}
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br ${comp.gradient} flex items-center justify-center mb-4 sm:mb-5 shadow-lg shadow-${comp.dotColor}/20`}>
                  <comp.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1">
                  {comp.title}
                </h3>
                <p className={`text-sm font-semibold bg-gradient-to-r ${comp.gradient} bg-clip-text text-transparent mb-3`}>
                  {comp.subtitle}
                </p>
                
                {/* Description */}
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                  {comp.description}
                </p>

                {/* List */}
                <ul className="space-y-2.5">
                  {comp.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm text-foreground/80">
                      <span className={`w-1.5 h-1.5 ${comp.dotColor} rounded-full mt-2 flex-shrink-0`} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

       {/* Transition de sortie vers la section suivante */}
        <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-b from-white to-white pointer-events-none" />

        {/* Clients banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="relative mt-12 sm:mt-16 lg:mt-20 text-center bg-white py-10 sm:py-14 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8"
        >
          <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-5 font-medium tracking-wide uppercase">
            Ils m'ont fait confiance
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8">
            {['M6 Publicité', 'Adobe Stock', 'HUBSIDE', 'Weborama', 'Availpro'].map((client) => (
              <span
                key={client}
                className="text-sm sm:text-base font-semibold text-muted-foreground/60 hover:text-foreground transition-colors cursor-default px-3 py-2"
              >
                {client}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
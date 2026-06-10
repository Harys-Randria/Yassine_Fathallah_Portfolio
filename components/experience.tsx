'use client'

import { motion } from 'framer-motion'
import { Building2, Calendar, ChevronRight } from 'lucide-react'

export default function Experience() {
  const experiences = [
    {
      company: 'M6 Publicité',
      role: 'Ingénieur Automatisation QA',
      period: 'Août 2021 - Aujourd\'hui',
      highlight: true,
      description: 'Évolution au sein d\'équipes Scrum pluridisciplinaires avec supervision de l\'automatisation des tests sur deux projets : application web interne et application web/API pour clients externes.',
      details: [
        'Élaboration de la stratégie de test pour applications web internes et externes',
        'Création d\'un framework de test pour APIs/applications web avec Cypress',
        'Gestion et mise à jour des scripts d\'automatisation',
        'Remontée de bugs suite aux campagnes de non-régression et suivi des corrections',
        'Mise en place des KPI pour suivre l\'avancement de l\'automatisation',
        'Réduction d\'environ 70% des bugs grâce aux tests automatisés from scratch',
      ],
      technologies: ['Cypress', 'TypeScript', 'GitLab', 'Jenkins', 'Postman', 'Squash TM', 'Spring Boot', 'Angular'],
    },
    {
      company: 'HUBSIDE',
      role: 'Ingénieur Automatisation QA',
      period: 'Juin 2020 - Août 2021',
      highlight: false,
      description: 'Automatisation des tests d\'un site web vitrine et e-commerce au sein d\'une équipe Scrum pluridisciplinaire.',
      details: [
        'Gestion des données de test',
        'Élaboration de la stratégie de test',
        'Exécution des campagnes de tests fonctionnels et de non-régression',
        'Création d\'un framework de test from scratch avec Cypress + Cucumber',
        'Support technique sur l\'automatisation des tests',
      ],
      technologies: ['Cypress', 'Cucumber', 'TypeScript', 'GitLab', 'Postman', 'Angular'],
    },
    {
      company: 'Adobe Stock',
      role: 'Ingénieur Automatisation QA',
      period: 'Octobre 2017 - Avril 2020',
      highlight: false,
      description: 'Équipe internationale de 12 QA automation engineers répartis entre Europe, États-Unis et Inde. Synchronisation hebdomadaire pour aligner les priorités et harmoniser les pratiques.',
      details: [
        'Création et maintenance des tests web avec Selenium WebDriver + TestNG',
        'Tests dédiés aux microservices (REST Assured + Java)',
        'Migration des tests de Selenium WebDriver vers Cypress',
        'Suivi et analyse des anomalies sur Jira',
      ],
      technologies: ['Selenium', 'TestNG', 'REST Assured', 'Cypress', 'Java', 'Jenkins', 'Docker', 'React', 'Node.js'],
    },
    {
      company: 'WEBORAMA',
      role: 'Ingénieur Automatisation QA',
      period: 'Juillet 2016 - Septembre 2017',
      highlight: false,
      description: 'Structuration et automatisation des tests sur plusieurs applications web internes et produits clients.',
      details: [
        'Élaboration d\'un plan de tests fonctionnels',
        'Développement d\'un Framework de tests avec Selenium WebDriver + Java',
        'Mise en place d\'une suite de Smoke Tests',
      ],
      technologies: ['Selenium', 'Java', 'Redmine', 'JUnit', 'Jenkins', 'Docker', 'BrowserStack'],
    },
    {
      company: 'Availpro',
      role: 'Ingénieur Automatisation QA',
      period: 'Août 2014 - Juin 2016',
      highlight: false,
      description: 'Assurance qualité du channel manager et des moteurs de réservation au sein de trois équipes Scrum.',
      details: [
        'Analyse et évaluation des exigences utilisateurs',
        'Création d\'un framework d\'automatisation avec Selenium WebDriver et C#',
        'Création de tests automatisés pour les services web avec SOAPUI (Groovy)',
        'Planification et exécution des campagnes de non-régression',
      ],
      technologies: ['Selenium', 'C#', 'SOAPUI', 'Groovy', 'Jenkins', 'Jira', 'ASP .NET'],
    },
  ]

  return (
    <section id="experience" className="py-16 sm:py-20 lg:py-24">
      {/* === HEADER === */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="mb-10 sm:mb-14 lg:mb-16"
      >
        <span className="inline-block text-xs sm:text-sm font-medium text-primary bg-primary/10 px-3 py-1.5 rounded-full mb-4">
          Carrière
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
          Expérience{' '}
          <span className="text-primary">Professionnelle</span>
        </h2>
      </motion.div>

      {/* === TIMELINE === */}
      <div className="relative">
        {/* Ligne verticale */}
        <div className="absolute left-[19px] sm:left-[23px] top-2 bottom-2 w-0.5 bg-border" />

        <div className="space-y-8 sm:space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: index * 0.08, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative pl-12 sm:pl-16"
            >
              {/* Point sur la timeline */}
              <div className={`absolute left-[12px] sm:left-[15px] top-1.5 w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 border-white shadow-sm ${
                exp.highlight 
                  ? 'bg-primary ring-4 ring-primary/20' 
                  : 'bg-muted-foreground/30'
              }`} />

              {/* Carte */}
              <div className={`rounded-2xl sm:rounded-3xl border p-5 sm:p-6 lg:p-7 transition-all duration-300 hover:shadow-md ${
                exp.highlight
                  ? 'bg-blue-50/60 border-blue-100/50'
                  : 'bg-white border-border/50 hover:border-border'
              }`}>
                
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Building2 className="w-4 h-4 text-primary" />
                      <h3 className="text-base sm:text-lg font-bold text-foreground">
                        {exp.company}
                      </h3>
                      {exp.highlight && (
                        <span className="text-[10px] sm:text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                          Actuel
                        </span>
                      )}
                    </div>
                    <p className="text-sm sm:text-base font-semibold text-muted-foreground">
                      {exp.role}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground bg-muted/50 px-3 py-1.5 rounded-lg w-fit">
                    <Calendar className="w-3.5 h-3.5" />
                    {exp.period}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
                  {exp.description}
                </p>

                {/* Détails */}
                <ul className="space-y-2 mb-5">
                  {exp.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-foreground/80">
                      <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium text-muted-foreground bg-muted/50 px-2.5 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
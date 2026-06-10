'use client'

import { motion } from 'framer-motion'
import { GraduationCap, MapPin, Calendar, Globe, Award } from 'lucide-react'

export default function Education() {
  const educations = [
    {
      degree: 'Master Informatique',
      school: 'Université de Franche-Comté',
      year: '2012-2014',
      location: 'France',
      highlight: true,
    },
    {
      degree: 'Licence Informatique',
      school: 'Université de Franche-Comté',
      year: '2012',
      location: 'France',
      highlight: false,
    },
    {
      degree: 'Licence Mathématique Informatique',
      school: 'Faculté des sciences de Rabat',
      year: '2011',
      location: 'Maroc',
      highlight: false,
    },
  ]

  const languages = [
    { name: 'Français', level: 'Courant', percentage: 100 },
    { name: 'Arabe', level: 'Natif', percentage: 100 },
    { name: 'Anglais', level: 'Professionnel', percentage: 75 },
  ]

  return (
    <section id="education" className="py-16 sm:py-20 lg:py-24">
      {/* === HEADER === */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="mb-10 sm:mb-14 lg:mb-16"
      >
        <span className="inline-block text-xs sm:text-sm font-medium text-primary bg-primary/10 px-3 py-1.5 rounded-full mb-4">
          Formation
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
          Éducation &{' '}
          <span className="text-primary">Langues</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-8 sm:gap-10 lg:gap-16">
        
        {/* === DIPLÔMES === */}
        <div>
          <div className="flex items-center gap-2.5 mb-6 sm:mb-8">
            <GraduationCap className="w-5 h-5 text-primary" />
            <h3 className="text-lg sm:text-xl font-bold text-foreground">Diplômes</h3>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[15px] sm:left-[17px] top-3 bottom-3 w-0.5 bg-border" />

            <div className="space-y-5 sm:space-y-6">
              {educations.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-20px' }}
                  transition={{ delay: index * 0.1, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="relative pl-10 sm:pl-12"
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-[8px] sm:left-[10px] top-1.5 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border-2 border-white shadow-sm ${
                    edu.highlight 
                      ? 'bg-primary ring-4 ring-primary/15' 
                      : 'bg-muted-foreground/25'
                  }`} />

                  {/* Card */}
                  <div className={`rounded-2xl border p-4 sm:p-5 transition-all duration-300 hover:shadow-sm ${
                    edu.highlight
                      ? 'bg-blue-50/50 border-blue-100/50'
                      : 'bg-white border-border/40'
                  }`}>
                    <div className="flex items-start gap-1.5 mb-2">
                      {edu.highlight && <Award className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />}
                      <h4 className="text-sm sm:text-base font-bold text-foreground">
                        {edu.degree}
                      </h4>
                    </div>
                    <p className="text-sm font-semibold text-primary mb-2.5">
                      {edu.school}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {edu.year}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {edu.location}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* === LANGUES === */}
        <div>
          <div className="flex items-center gap-2.5 mb-6 sm:mb-8">
            <Globe className="w-5 h-5 text-primary" />
            <h3 className="text-lg sm:text-xl font-bold text-foreground">Langues</h3>
          </div>

          <div className="space-y-4 sm:space-y-5">
            {languages.map((lang, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ delay: index * 0.1, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white border border-border/40 rounded-2xl p-4 sm:p-5 transition-all duration-300 hover:shadow-sm"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm sm:text-base font-semibold text-foreground">
                    {lang.name}
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                    {lang.level}
                  </span>
                </div>
                
                {/* Progress bar */}
                <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${lang.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
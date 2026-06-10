'use client'

import { motion } from 'framer-motion'
import { 
  Code2, 
  Terminal, 
  GitBranch, 
  Users, 
  Layers, 
  BarChart3 
} from 'lucide-react'

export default function Skills() {
  const skillCategories = [
    {
      category: 'Frameworks & Outils',
      icon: Code2,
      gradient: 'from-blue-500 to-blue-600',
      bgLight: 'bg-blue-50/70',
      borderLight: 'border-blue-100/50',
      tagBg: 'bg-white/80',
      tagHover: 'hover:bg-blue-100/80 hover:text-blue-700',
      skills: ['Cypress', 'Playwright', 'Selenium', 'Appium', 'REST Assured', 'TestNG', 'JUnit', 'SOAPUI', 'Cucumber', 'Postman', 'Squash TM'],
    },
    {
      category: 'Langages',
      icon: Terminal,
      gradient: 'from-violet-500 to-purple-600',
      bgLight: 'bg-violet-50/70',
      borderLight: 'border-violet-100/50',
      tagBg: 'bg-white/80',
      tagHover: 'hover:bg-violet-100/80 hover:text-violet-700',
      skills: ['JavaScript', 'TypeScript', 'Java', 'C#', 'Groovy'],
    },
    {
      category: 'CI/CD & DevOps',
      icon: GitBranch,
      gradient: 'from-emerald-500 to-teal-600',
      bgLight: 'bg-emerald-50/70',
      borderLight: 'border-emerald-100/50',
      tagBg: 'bg-white/80',
      tagHover: 'hover:bg-emerald-100/80 hover:text-emerald-700',
      skills: ['Jenkins', 'GitLab', 'Git', 'Docker', 'BrowserStack'],
    },
    {
      category: 'Méthodologies',
      icon: Users,
      gradient: 'from-orange-500 to-amber-600',
      bgLight: 'bg-orange-50/70',
      borderLight: 'border-orange-100/50',
      tagBg: 'bg-white/80',
      tagHover: 'hover:bg-orange-100/80 hover:text-orange-700',
      skills: ['Agile', 'Scrum', 'TDD', 'BDD', 'Test Strategy'],
    },
    {
      category: 'Stacks Techniques',
      icon: Layers,
      gradient: 'from-rose-500 to-pink-600',
      bgLight: 'bg-rose-50/70',
      borderLight: 'border-rose-100/50',
      tagBg: 'bg-white/80',
      tagHover: 'hover:bg-rose-100/80 hover:text-rose-700',
      skills: ['Angular', 'React', 'Node.js', 'Spring Boot', 'ASP .NET'],
    },
    {
      category: 'Gestion',
      icon: BarChart3,
      gradient: 'from-cyan-500 to-sky-600',
      bgLight: 'bg-cyan-50/70',
      borderLight: 'border-cyan-100/50',
      tagBg: 'bg-white/80',
      tagHover: 'hover:bg-cyan-100/80 hover:text-cyan-700',
      skills: ['Jira', 'Redmine', 'KPI qualité', 'Gestion anomalies', 'Test Planning'],
    },
  ]

  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24">
      {/* === HEADER === */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="mb-10 sm:mb-14 lg:mb-16"
      >
        <span className="inline-block text-xs sm:text-sm font-medium text-primary bg-primary/10 px-3 py-1.5 rounded-full mb-4">
          Compétences
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
          Stack <span className="text-primary">Technique</span>
        </h2>
      </motion.div>

      {/* === GRID === */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
        {skillCategories.map((category, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: i * 0.06, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className={`${category.bgLight} ${category.borderLight} border rounded-2xl sm:rounded-3xl p-5 sm:p-6 transition-all duration-300 hover:shadow-md`}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center shadow-md`}>
                <category.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-foreground">
                {category.category}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, j) => (
                <span
                  key={j}
                  className={`${category.tagBg} ${category.tagHover} text-xs sm:text-sm text-foreground/70 px-3 py-1.5 rounded-lg border border-border/30 transition-colors cursor-default`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
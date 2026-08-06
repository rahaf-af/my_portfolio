import React from 'react'
import Hero from '../components/Hero'
import Projects from '../components/projectsSection/Projects'
import Skills from '../components/skillsSection/Skills'
import Experience from '../components/Experience'
import ContactForm from '../components/ContactForm'
import About from '../components/About'
import Certificates from '../components/certificateSection/Certificates'
export default function Main({ lang }) {
  return (
    <>
      <Hero lang={lang} />
      <About lang={lang} />
      <Projects lang={lang} />
      <Skills lang={lang} />
      <Experience lang={lang} />
      <Certificates lang={lang} />
      <ContactForm lang={lang} />

    </>
  )
}

import React from 'react'

import ArticlesSection from './ArticlesSection'
import { Container } from 'components/Shared/Container'
import SEO from 'components/Shared/SEO'
import Hero from './Hero'
import DefaultLayout from 'layouts/DefaultLayout'
import AboutSection from './AboutSection'
import ProjectsSection from './ProjectsSection'

export default function HomePage() {
  return (
    <DefaultLayout>
      <SEO title="Home" />

      <Container>
        <Hero />
        <ArticlesSection />
        <ProjectsSection />
        <AboutSection />
      </Container>
    </DefaultLayout>
  )
}

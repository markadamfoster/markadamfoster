import React from 'react'

import ArticlesSection from './ArticlesSection'
import { Container } from 'components/Shared/Container'
import Hero from './Hero'
import DefaultLayout from 'layouts/DefaultLayout'
import AboutSection from './AboutSection'
import ProjectsSection from './ProjectsSection'
import SEO from 'components/Shared/SEO'

export const Head = () => <SEO title="Home" />

export default function HomePage() {
  return (
    <DefaultLayout>
      <Container>
        <Hero />
        <ArticlesSection />
        <ProjectsSection />
        <AboutSection />
      </Container>
    </DefaultLayout>
  )
}

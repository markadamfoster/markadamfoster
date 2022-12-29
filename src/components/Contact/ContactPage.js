import React from 'react'
import styled from 'styled-components'

import DefaultLayout from 'layouts/DefaultLayout'
import { Container } from 'components/Shared/Container'
import SEO from 'components/Shared/SEO'
import ContactForm from 'components/Shared/ContactForm'

export const Head = () => <SEO title="Contact" />

function ContactPage() {
  return (
    <DefaultLayout>
      <Container>
        <h1>Contact</h1>
        <Spacer />
        <ContactForm formLocation="Contact Page" />
      </Container>
    </DefaultLayout>
  )
}

export default ContactPage

const Spacer = styled.div`
  height: 30px;
`

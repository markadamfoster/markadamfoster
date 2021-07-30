import React from 'react'
import styled from 'styled-components'

import { Container } from 'styles/Container'
import ContactForm from 'components/Shared/ContactForm'

function ContactPageContent() {
  return (
    <Container>
      <h1>Contact</h1>
      <Spacer />
      <ContactForm formLocation="Contact Page" />
    </Container>
  )
}

export default ContactPageContent

const Spacer = styled.div`
  height: 30px;
`

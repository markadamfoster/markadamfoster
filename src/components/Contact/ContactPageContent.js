import React from 'react'
import styled from 'styled-components'

import { Container } from 'styles/Container'
import { OutlineExtLinkButton, PrimaryExtLinkButton } from 'styles/Buttons'

function ContactPageContent() {
  return (
    <Container>
      <h1>Contact</h1>
      <Content>
        <p>
          Don&apos;t hesitate to reach out! I&apos;m super friendly, and love
          meeting new people.
        </p>
      </Content>
      <Buttons>
        <EmailButton
          href="mailto:foster154@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Email Me
        </EmailButton>
        <OutlineExtLinkButton
          href="https://twitter.com/messages/compose?recipient_id=16048318"
          target="_blank"
          rel="noopener noreferrer"
        >
          Message via Twitter
        </OutlineExtLinkButton>
      </Buttons>
    </Container>
  )
}

export default ContactPageContent

const Content = styled.div`
  text-align: center;
  max-width: 720px;
  margin: 4vw auto;
`

const Buttons = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 450px) {
    flex-direction: column;
  }
`

const EmailButton = styled(PrimaryExtLinkButton)`
  width: auto;
  padding: 0 50px;
  margin-right: 20px;

  @media (max-width: 450px) {
    margin-right: 0;
    margin-bottom: 20px;
  }
`

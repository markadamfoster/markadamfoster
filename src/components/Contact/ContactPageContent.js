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
          I’m excited to hear about your project! To start the process, just
          shoot me an email or message me on Twitter. I&apos;d love to hear
          about your business and we&apos;ll explore if I&apos;m the right fit.
        </p>
      </Content>
      <Buttons>
        <EmailButton
          href="mailto:foster154@gmail.com?subject=Available for hire?"
          target="_blank"
          rel="noopener noreferrer"
        >
          Email Me
        </EmailButton>
        <OutlineExtLinkButton
          href="https://twitter.com/messages/compose?recipient_id=16048318&text=Hi%20Mark,%20are%20you%20currently%20available%20for%20hire?"
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

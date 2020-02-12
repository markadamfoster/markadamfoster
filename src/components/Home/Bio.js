import React from 'react'
import styled from 'styled-components'

import bioImgSrc from 'assets/mark_foster_bio.jpg'
import { Container } from 'styles/Container'
import { PrimaryLinkButton } from 'styles/Buttons'

function Bio() {
  return (
    <Container>
      <Content>
        <Aside>
          <img src={bioImgSrc} alt="Mark Foster" />
        </Aside>
        <Text>
          <p>
            Hi, I&apos;m Mark{' '}
            <span role="img" aria-label="hand waving">
              👋
            </span>
          </p>
          <p>
            I&apos;m a software developer, specializing in building websites and
            custom apps for clients and friends. I build whatever we need to
            help grow your business.
          </p>
          <p>
            Along with freelancing, I keep my skills sharp by launching small
            indie products. My most recent is Photo Invoice.
          </p>
          <Divider />
          <p>
            When starting your project, we&apos;ll sit down to thoroughly
            explore the desired outcomes. From there we&apos;ll outline the best
            path forward, get buy-in from all necessary parties, and clearly
            document the project roadmap, timeline, and deliverables.
          </p>
          <p>
            You can expect excellent communication, on-time delivery, and
            rock&#8209;solid digital work that moves your business forward.
          </p>
          <PrimaryLinkButton to="/about">Contact</PrimaryLinkButton>
        </Text>
      </Content>
    </Container>
  )
}

export default Bio

const Content = styled.div`
  margin: 4vw 0;
  display: flex;
  justify-content: space-between;
`

const Aside = styled.aside`
  width: 36%;

  img {
    max-width: 100%;
    border-radius: 6px;
    box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2);
  }
`

const Text = styled.div`
  width: 58%;

  p {
    font-size: 1.9rem;
    line-height: 1.5em;
    margin: 0 0 1.5em;
  }
`

const Divider = styled.div`
  margin: 40px 0 35px;
  height: 1px;
  border-bottom: 1px solid #d8d8d8;
  width: 200px;
`

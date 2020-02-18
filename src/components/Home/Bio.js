import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import bioImgSrc from 'assets/mark_foster_bio.jpg'
import { PrimaryLinkButton } from 'styles/Buttons'

function Bio() {
  return (
    <Wrapper>
      <Aside>
        <Img src={bioImgSrc} alt="Mark Foster" />
      </Aside>

      <Text>
        <p>
          Hi, I&apos;m Mark!{' '}
          <span role="img" aria-label="hand waving">
            👋
          </span>
        </p>
        <p>
          I&apos;m a software developer, designer, and digital strategist. I
          partner with clients to help plan and build their next website, app,
          or digital asset.
        </p>
        <p>
          Along with client work, I sharpen my skills by building and launching
          indie products (my most recent is{' '}
          <Link to="/projects/photo-invoice">Photo Invoice</Link>).
        </p>
        <Divider />
        <p>
          <strong>Looking to hire for your next website or app?</strong>
        </p>
        <p>
          You can expect excellent communication, on-time delivery, and
          rock&#8209;solid development that moves your business forward.
        </p>
        <PrimaryLinkButton to="/contact">Contact Me</PrimaryLinkButton>
      </Text>
    </Wrapper>
  )
}

export default Bio

const Wrapper = styled.div`
  margin: 4vw 0;
  display: flex;
  justify-content: space-between;

  @media (max-width: 700px) {
    display: block;
  }
`

const Aside = styled.aside`
  width: 34%;
  min-width: 130px;
  margin: 0 20px 10px 0;

  @media (max-width: 700px) {
    float: left;
  }
`

const Img = styled.img`
  max-width: 100%;
  border-radius: 6px;
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2);
`

const Text = styled.div`
  width: 60%;

  p {
    font-size: 1.9rem;
    line-height: 1.5em;
    margin: 0 0 1.5em;

    @media (max-width: 900px) {
      font-size: 1.6rem;
    }

    @media (max-width: 600px) {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 700px) {
    width: 100%;
  }
`

const Divider = styled.div`
  margin: 40px 0 35px;
  height: 1px;
  border-bottom: 1px solid #d8d8d8;
  width: 200px;
`

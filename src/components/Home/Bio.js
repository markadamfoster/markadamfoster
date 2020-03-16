import React from 'react'
import styled from 'styled-components'

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
          <span role="img" aria-label="hand waving">
            👋
          </span>{' '}
          Hi, I&apos;m Mark!
        </p>
        <p>
          I&apos;m an energetic and constantly-learning web developer and
          product creator.
        </p>
        <p>
          I started hacking on Angelfire and Geocities sites back in the day,
          took a break in college to study psychology, and then wandered back
          into the world of tech.
        </p>
        <p>
          I work full time as a frontend engineer, study an hour a day, and
          build indie products in the nights and weekends.
        </p>
        <p>
          When I&apos;m not in front of a screen, I&apos;m with my family or
          exploring the Idaho backcountry on a mountain bike or pair of skis.
        </p>
        <Divider />
        <p>
          <strong>
            Need help with a project? I&apos;d love to hear about it!
          </strong>
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
  max-width: 400px;
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

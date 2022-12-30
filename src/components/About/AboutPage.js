import React from 'react'
import styled from 'styled-components'

import DefaultLayout from 'layouts/DefaultLayout'
import { Container } from 'components/Shared/Container'
import SEO from 'components/Shared/SEO'
import profileImg from 'assets/Mark_Foster_Freelance_Develper.png'
import Photos from './Photos'
import ContactForm from 'components/Shared/ContactForm'

// Photos
import youngMark from 'assets/about/young-mark.jpg'
import computerBaby from 'assets/about/computer-baby.jpg'
import computerWine from 'assets/about/computer-wine.jpg'
import mtb from 'assets/about/mtb.jpg'
import markSkiing from 'assets/about/mark-skiing.jpg'
import family from 'assets/about/family.jpg'

export const Head = () => <SEO title="About" />

export default function AboutPage() {
  return (
    <DefaultLayout>
      <Container>
        <Wrapper>
          <h1>About</h1>

          <ProfileTop>
            <ProfileImg src={profileImg} />
            <div>
              <Greeting>
                Hi there!{' '}
                <span role="img" aria-label="wave">
                  👋
                </span>
              </Greeting>
              I&apos;m Mark- a software developer, designer, and digital maker.
            </div>
          </ProfileTop>
          <Bio>
            <p>
              When you grow up in a computer lab, helping your dad fix Apple
              IIGS machines during school holidays, you&apos;re probably
              destined to end up doing something in the tech world.
            </p>

            <Photos
              photos={[
                {
                  src: youngMark,
                  alt: 'Young Mark sitting at a computer',
                  caption:
                    'Little Mark with the whole world in front of him...',
                },
              ]}
            />

            <p>
              And while it was a roundabout journey for me (with forays into
              psychology, Spanish, ecology, and bird research), eventually I
              landed back in the world of computers and software development.
            </p>

            <p>
              My start in tech was as a support rep (which is the perfect place
              to begin). I learned how non-techy people use the web and how to
              design products that are beautiful yet simple. After 3 years of
              support, I had gained the superpower of spotting issues that would
              cause support tickets before they were even launched.
            </p>

            <p>
              While answering calls I worked one desk over from our developers.
              I would talk to customers, report bugs and feature requests, and
              watch as they built the product. It didn&apos;t take long to
              realize I wanted to be the one doing the building.
            </p>

            <p>
              I spent the next 3 years of early mornings and late nights
              learning how to code. I built a custom web app for tracking our
              support cases. Then I created custom pricing calculaters and usage
              estimate tools for our sales website. Eventually I started seeking
              out projects from friends, other clients, and building my own
              products.
            </p>

            <Photos
              photos={[
                {
                  src: computerBaby,
                  alt: 'Mark holding a baby while coding',
                },
                {
                  src: computerWine,
                  alt: 'laptop with wine glass',
                },
              ]}
            />

            <p>
              Fast forward for a few years, and I&apos;ve had the chance to
              build beautiful products for amazing companies. I gradually began
              to specialize in React web development and React Native mobile
              development. I&apos;ve served clients of all sizes, and love
              becoming a trusted resource for my clients.
            </p>

            <p>
              I would love for my next project to be for business. Drop me a
              note below, and I&apos;ll get back to you within 24 hours.
            </p>

            <hr />

            <p>
              When I&apos;m not behind a screen, you&apos;ll find me spending
              time with my wife and three daughters, mountain biking, and
              skiing.
            </p>
            <Photos
              photos={[
                {
                  src: family,
                  alt: 'Mark with family',
                },
                {
                  src: mtb,
                  alt: 'mountain bike',
                },
                {
                  src: markSkiing,
                  alt: 'skiier looking into distance',
                },
              ]}
            />
          </Bio>

          <hr />

          <Spacer />
          <ContactForm formLocation="About Page" />
        </Wrapper>
      </Container>
    </DefaultLayout>
  )
}

const Wrapper = styled.div``

const ProfileTop = styled.div`
  display: flex;
  align-items: center;
  background-color: #e7e7e7;
  padding: 10px 26px;
  border-radius: 10px;
  max-width: 520px;
  margin: 30px auto 60px;
  font-size: 19px;

  @media (max-width: 500px) {
    font-size: 16px;
    flex-direction: column;
    text-align: center;
    margin-bottom: 20px;
  }
`

const ProfileImg = styled.img`
  height: 200px;
  width: 200px;
  margin: 0 auto;
  flex-shrink: 0;

  @media (max-width: 500px) {
    margin-bottom: 10px;
    height: 180px;
    width: 180px;
  }
`

const Greeting = styled.div`
  margin-bottom: 10px;
  span {
    font-size: 24px;
  }
`

const Bio = styled.div`
  margin: 40px 0;
  font-size: 18px;

  p {
    margin: 30px 0;
  }

  @media (max-width: 500px) {
    font-size: 16px;
  }
`

const Spacer = styled.div`
  height: 50px;
`

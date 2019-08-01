import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import styled, { keyframes } from 'styled-components'
import { fadeIn, bounceIn } from 'react-animations'

import TechBadges from '../ProjectsShared/TechBadges'

class IntroSection extends Component {
  static propTypes = {
    project: PropTypes.object.isRequired,
  }

  render() {
    const { project } = this.props
    return (
      <Wrapper>
        <Title>
          <TitleSmall>Project: </TitleSmall>
          {project.name}
        </Title>
        <FadeIn>
          <Content>
            <ColumnLeft>
              <Summary>{project.summary}</Summary>
              <BounceIn>
                <TechBadges badges={project.badges} size={56} />
              </BounceIn>
            </ColumnLeft>
            <ColumnRight>
              <Cover src={project.cover} />
            </ColumnRight>
          </Content>
        </FadeIn>
      </Wrapper>
    )
  }
}

export default IntroSection

const Wrapper = styled.div`
  width: 100%;
`

const Title = styled.h1`
  font-size: 68px;
  margin: 0;
  padding: 40px 0 20px;
  text-align: center;

  @media (max-width: 850px) {
    font-size: 56px;
  }

  @media (max-width: 600px) {
    font-size: 38px;
  }
`

const TitleSmall = styled.span`
  font-size: 28px;
  font-weight: 400;
  opacity: 0.3;

  @media (max-width: 850px) {
    font-size: 24px;
  }

  @media (max-width: 600px) {
    font-size: 16px;
    display: block;
  }
`

const fadeInAnimation = keyframes`${fadeIn}`

const FadeIn = styled.div`
  animation: 500ms ${fadeInAnimation};
`

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1000px;
  max-width: 100%;
  margin: 20px auto;

  @media (max-width: 850px) {
    flex-direction: column;
  }
`

const ColumnLeft = styled.div`
  width: 48%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (max-width: 850px) {
    width: 90%;
    margin: 0 auto;
  }
`

const ColumnRight = styled.div`
  width: 48%;

  @media (max-width: 850px) {
    width: 90%;
    box-sizing: border-box;
    margin: 10px auto 0;
  }
`

const bounceInAnimation = keyframes`${bounceIn}`

const BounceIn = styled.div`
  animation: 800ms ${bounceInAnimation};
`

const Summary = styled.div`
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 30px;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`

const Cover = styled.img`
  max-width: 100%;
  border: 5px solid white;
`

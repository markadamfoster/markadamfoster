import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { headlineFont } from 'styles/Fonts'
import { OutlineLinkButton } from 'styles/Buttons'

class PortfolioItem extends Component {
  static propTypes = {
    project: PropTypes.object.isRequired,
  }

  render() {
    const { project } = this.props

    return (
      <Wrapper>
        <Background bg={project.featuredBgColor} />
        <Info>
          <Title>{project.name}</Title>
          <Summary>{project.summary}</Summary>
          <OutlineLinkButton to={`/projects/${project.slug}`}>
            Details →
          </OutlineLinkButton>
        </Info>
        <ImageWrapper bg={project.featuredBgColor}>
          <Cover src={project.cover} />
        </ImageWrapper>
      </Wrapper>
    )
  }
}

export default PortfolioItem

const Wrapper = styled.div`
  position: relative;
  margin: 40px 0;
  padding: 20px 20px 20px 0;
  display: flex;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
    padding: 0;
  }
`

const Background = styled.div`
  background-color: ${({ bg }) => bg};
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 75%;
  z-index: 1;

  @media (max-width: 600px) {
    display: none;
  }
`

const Info = styled.div`
  position: relative;
  width: 40%;
  padding-right: 30px;
  z-index: 100;

  @media (max-width: 600px) {
    width: 100%;
    z-index: auto;
  }
`

const Title = styled.div`
  ${headlineFont}
  font-size: 24px;
  font-weight: 900;
  margin-top: 5px;

  @media (max-width: 600px) {
    font-size: 19px;
  }
`

const Summary = styled.div`
  margin: 2.4rem 0;
  font-size: 16px;
  line-height: 2.6rem;

  @media (max-width: 800px) {
    font-size: 14px;
    margin: 10px 0 8px;
  }
`

const ImageWrapper = styled.div`
  width: 60%;
  align-self: flex-start;

  @media (max-width: 600px) {
    margin-top: 14px;
    width: 100%;
    padding: 20px;
    background-color: ${({ bg }) => bg};
  }
`

const Cover = styled.img`
  width: 100%;
  position: relative;
  transition: transform 250ms;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.14);
  z-index: 100;
`

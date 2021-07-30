import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

PortfolioItem.propTypes = {
  title: PropTypes.string,
  summary: PropTypes.string,
  description: PropTypes.string,
}

export default function PortfolioItem({ title, summary, description }) {
  return (
    <Wrapper>
      <Image />
      <Text>
        <Title>{title}</Title>
        <Summary>{summary}</Summary>
        <Description>{description}</Description>
      </Text>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  margin: 50px 0;
`

const Image = styled.div`
  height: 200px;
  width: 150px;
  background-color: #ccc;
  flex-shrink: 0;
`

const Text = styled.div`
  flex: 1;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
`

const Title = styled.div`
  font-size: 28px;
  font-weight: 900;
  margin-bottom: 15px;
`

const Summary = styled.div`
  font-size: 17px;
  font-weight: 900;
  margin-bottom: 10px;
`

const Description = styled.div`
  font-size: 17px;
`

import React from 'react'
import styled from 'styled-components'
import { colors } from 'src/Constants'

const renderScreenshots = (width, data) => {
  return data.map((screenshot, index) => {
    return (
      <Screenshot key={index} width={width}>
        <Caption>{screenshot.caption}</Caption>
        <Image src={screenshot.image} />
      </Screenshot>
    )
  })
}

const Screenshots = ({ width, data }) => (
  <Wrapper>{renderScreenshots(width, data)}</Wrapper>
)

export default Screenshots

Screenshots.defaultProps = {
  width: '1000px',
}

const Wrapper = styled.div`
  background-color: ${colors.richBlack};
  padding: 30px 0;
`

const Screenshot = styled.div`
  width: ${props => props.width};
  max-width: 92%;
  margin: 30px auto 70px;
`

const Caption = styled.div`
  color: white;
  font-size: 1.2em;
  text-align: center;
  margin: 40px auto 40px;
`

const Image = styled.img`
  max-width: 100%;
`

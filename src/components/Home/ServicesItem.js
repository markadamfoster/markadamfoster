import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

ServicesItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}

export default function ServicesItem({ title, description }) {
  return (
    <Wrapper>
      <Image />
      <Text>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Text>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 50px 0;
`

const Image = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 100%;
  background-color: #ccc;
  flex-shrink: 0;
`

const Text = styled.div`
  margin-left: 20px;
`

const Title = styled.div`
  font-size: 28px;
  font-weight: 900;
`

const Description = styled.div`
  font-size: 17px;
`

import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

ServicesItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.object,
}

export default function ServicesItem({ title, description, img }) {
  return (
    <Wrapper>
      <Image src={img} />
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

const Image = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 100%;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  background-color: rgba(234, 234, 323, 0.3);
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

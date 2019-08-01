import React from 'react'
import styled from 'styled-components'

const Screenshot = ({img}) => (
  <Wrapper>
    <Image src={img} />
  </Wrapper>
)

export default Screenshot

const Wrapper = styled.div`

`

const Image = styled.img`

`

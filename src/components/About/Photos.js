import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

Photos.propTypes = {
  photos: PropTypes.array,
}

export default function Photos({ photos }) {
  return (
    <Wrapper>
      {photos.map((photo, i) => (
        <PhotoWrapper key={i}>
          <Img src={photo.src} alt={photo.alt} />
        </PhotoWrapper>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 -10px;
`

const PhotoWrapper = styled.div`
  margin: 0 10px;
  width: 32%;
`

const Img = styled.img`
  width: 100%;
  max-width: 400px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  margin: 0 auto;
`

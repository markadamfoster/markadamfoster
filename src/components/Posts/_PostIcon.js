import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const PostIcon = ({ icon }) => {
  const [iconSrc, setIconSrc] = useState('')

  useEffect(() => {
    if (icon) {
      import(`src/assets/article-icons/${icon}.png`).then(icon => {
        setIconSrc(icon.default)
      })
    }
  }, [icon])

  if (!iconSrc) return <Spacer />
  return <Img src={iconSrc} />
}

export default PostIcon

PostIcon.propTypes = {
  icon: PropTypes.string,
}

const Img = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 10px;
`

const Spacer = styled.div`
  width: 32px;
  height: 32px;
  margin-right: 10px;
`

import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ArticleIcon = ({ icon }) => {
  const [iconSrc, setIconSrc] = useState('')

  useEffect(() => {
    if (icon) {
      import(`assets/article-icons/${icon}.png`).then(icon => {
        setIconSrc(icon.default)
      })
    }
  }, [icon])

  if (!iconSrc) return <Spacer />
  return <Img src={iconSrc} />
}

export default ArticleIcon

ArticleIcon.propTypes = {
  icon: PropTypes.string,
}

const Img = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 10px;

  @media (max-width: 460px) {
    height: 24px;
    width: 24px;
  }
`

const Spacer = styled.div`
  width: 32px;
  height: 32px;
  margin-right: 10px;

  @media (max-width: 460px) {
    height: 24px;
    width: 24px;
  }
`

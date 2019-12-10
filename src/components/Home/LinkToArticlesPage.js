import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const LinkToArticlesPage = () => {
  return <LinkStyled to="/articles">All Articles →</LinkStyled>
}

export default LinkToArticlesPage

const LinkStyled = styled(Link)`
  margin-left: 45px;
`

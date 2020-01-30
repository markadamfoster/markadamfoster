import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Link from 'gatsby-link'

import ArticleIcon from './ArticleIcon'
import { colors } from 'Constants'

class ArticleListItem extends Component {
  static propTypes = {
    article: PropTypes.object,
  }

  render() {
    const { article } = this.props

    return (
      <Wrapper>
        <ArticleIcon icon={article.frontmatter.icon} />
        <Link to={article.fields.slug}>
          <Title>{article.frontmatter.title}</Title>
        </Link>
      </Wrapper>
    )
  }
}

export default ArticleListItem

const Wrapper = styled.li`
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 2px solid #ddd;

  @media (max-width: 460px) {
    padding-bottom: 10px;
    margin-bottom: 10px;
  }
`

const Title = styled.h3`
  font-family: Lato;
  margin: 5px 0;
  font-size: 18px;
  line-height: 32px;
  font-weight: 400;
  color: ${colors.textDark};
  transition: color 250ms;

  &:hover {
    color: ${colors.action};
  }

  @media (max-width: 600px) {
    font-size: 17px;
    line-height: 23px;
  }

  @media (max-width: 460px) {
    font-size: 16px;
  }
`

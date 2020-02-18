import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Link from 'gatsby-link'

import { headlineFont, bodyFont } from 'styles/Fonts'
import { colors } from 'Constants'

class ArticleListItem extends Component {
  static propTypes = {
    article: PropTypes.object,
  }

  render() {
    const { article } = this.props
    const { excerpt } = article
    const { slug } = article.fields
    const { date, tags, title } = article.frontmatter

    console.log('article:', article)

    return (
      <Wrapper>
        <Link to={slug}>
          <Tags>{tags.join(', ')}</Tags>
          <Title>{title}</Title>
          <Summary>{excerpt}</Summary>
          <Date>{date}</Date>
        </Link>
      </Wrapper>
    )
  }
}

export default ArticleListItem

const Wrapper = styled.li`
  display: flex;
  align-items: center;
  margin: 0 0 4vw;
`

const Tags = styled.div`
  ${headlineFont};
  color: ${colors.action};
  font-size: 1.4rem;

  @media (max-width: 600px) {
    font-size: 1.3rem;
  }
`

const Title = styled.h3`
  ${bodyFont};
  font-size: 3rem;
  line-height: 1.4em;
  font-weight: 700;
  margin: 5px 0;
  color: ${colors.textDark};
  transition: color 250ms;

  @media (max-width: 600px) {
    font-size: 2.4rem;
  }

  @media (max-width: 460px) {
    font-size: 1.8rem;
  }
`

const Summary = styled.div`
  margin: 0.7vw 0;
  color: ${colors.textDark};

  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`

const Date = styled.div`
  margin: 0.5vw 0;
  ${headlineFont};
  color: ${colors.textMedium};
  font-size: 1.4rem;

  @media (max-width: 600px) {
    font-size: 1.3rem;
  }
`

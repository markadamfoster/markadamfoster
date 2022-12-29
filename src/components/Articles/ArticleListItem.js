import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { colors } from 'Constants'

ArticleListItem.propTypes = {
  article: PropTypes.object,
}

function ArticleListItem({ article }) {
  const { excerpt } = article
  const { slug } = article.fields
  const { date, tags, title } = article.frontmatter

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

export default ArticleListItem

const Wrapper = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 50px;

  @media (max-width: 600px) {
    margin-bottom: 30px;
  }
`

const Tags = styled.div`
  color: ${colors.action};
  font-size: 0.8rem;

  @media (max-width: 600px) {
    font-size: 0.75rem;
  }
`

const Title = styled.h3`
  font-size: 1.4rem;
  line-height: 1.4em;
  font-weight: 700;
  margin: 5px 0;
  color: ${colors.textDark};
  transition: color 250ms;

  @media (max-width: 600px) {
    font-size: 1.2rem;
  }

  @media (max-width: 460px) {
    font-size: 1rem;
  }
`

const Summary = styled.div`
  margin: 10px 0;
  color: ${colors.textDark};

  @media (max-width: 600px) {
    margin: 6px 0;
    font-size: 0.9rem;
  }
`

const Date = styled.div`
  margin: 0.5vw 0;
  color: ${colors.textMedium};
  font-size: 1.4rem;

  @media (max-width: 600px) {
    font-size: 1.3rem;
  }
`

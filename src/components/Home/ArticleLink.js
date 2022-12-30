import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { colors } from 'Constants'

ArticleLink.propTypes = {
  article: PropTypes.object.isRequired,
}

export default function ArticleLink({ article }) {
  const { slug } = article.fields
  const { title, date, tags } = article.frontmatter

  const displayDate = new Date(date).toLocaleDateString('en-us', {
    year: 'numeric',
    month: 'short',
  })

  const getTags = () => {
    return tags.map((t) => t).join(', ')
  }

  return (
    <Wrapper>
      <LinkWrapper to={slug}>
        <Title>{title}</Title>
        <Meta>
          <ArticleDate>{displayDate}</ArticleDate>
          <Tags>{getTags()}</Tags>
        </Meta>
      </LinkWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.li`
  border-radius: 8px;
  a {
    color: ${colors.textDark};

    &:hover {
      color: ${colors.action};
    }
  }
`

const LinkWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #e2e2e2;
  border-radius: 10px;
  padding: 20px;
  font-size: 17px;
  transition: background 0.2, color 0.2, scale 0.2;

  &:hover {
    background: #0c74891a;
    scale: 1.02;
  }
`

const ArticleDate = styled.div`
  font-size: 13px;
  /* color: ${colors.teal}; */
  opacity: 0.8;
`

const Title = styled.div`
  margin-bottom: 20px;
`

const Tags = styled.div`
  font-size: 13px;
  opacity: 0.5;
`

const Meta = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-bottom;
`

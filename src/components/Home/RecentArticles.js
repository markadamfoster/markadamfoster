import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ArticleListItem from 'components/Articles/ArticleListItem'
import { OutlineLinkButton } from 'styles/Buttons'

const RecentArticles = ({ articles }) => {
  const recentArticles = articles
    .filter(post => post.node.frontmatter.published)
    .slice(0, 5)

  return (
    <Wrapper>
      <List>
        {recentArticles.map(({ node: article }) => {
          return <ArticleListItem key={article.fields.slug} article={article} />
        })}
        <ButtonWrapper>
          <OutlineLinkButton to="/articles">All Articles →</OutlineLinkButton>
        </ButtonWrapper>
      </List>
    </Wrapper>
  )
}

export default RecentArticles

RecentArticles.propTypes = {
  articles: PropTypes.array,
}

const Wrapper = styled.div`
  max-width: 720px;
  margin: 0 auto;
`

const List = styled.ol`
  display: block;
  margin: 4vw 0;
  padding: 0;
  list-style-type: none;

  @media (max-width: 460px) {
    margin: 10px 0;
  }
`

const ButtonWrapper = styled.div`
  text-align: center;
`

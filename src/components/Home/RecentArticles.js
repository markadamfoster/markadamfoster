import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ArticleListItem from 'components/Articles/ArticleListItem'
import LinkToArticlesPage from './LinkToArticlesPage'

const RecentArticles = ({ articles }) => {
  const recentArticles = articles
    .filter(post => post.node.frontmatter.published)
    .slice(0, 5)

  return (
    <List>
      {recentArticles.map(({ node: article }) => {
        return <ArticleListItem key={article.fields.slug} article={article} />
      })}
      <LinkToArticlesPage />
    </List>
  )
}

export default RecentArticles

RecentArticles.propTypes = {
  articles: PropTypes.array,
}

const List = styled.ol`
  display: block;
  margin: 40px 0;
  padding: 0;
  list-style-type: none;

  @media (max-width: 460px) {
    margin: 10px 0;
  }
`

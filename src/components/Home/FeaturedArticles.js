import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ArticleListItem from 'components/Articles/ArticleListItem'
import LinkToArticlesPage from './LinkToArticlesPage'

const FeaturedArticles = ({ articles }) => {
  const recentArticles = articles.filter(
    articles =>
      articles.node.frontmatter.published && articles.node.frontmatter.featured
  )

  return (
    <List>
      {recentArticles.map(({ node: article }) => {
        return <ArticleListItem key={article.fields.slug} article={article} />
      })}
      <LinkToArticlesPage />
    </List>
  )
}

export default FeaturedArticles

FeaturedArticles.propTypes = {
  articles: PropTypes.array,
}

const List = styled.ol`
  display: block;
  margin: 40px 0;
  padding: 0;
  list-style-type: none;
`

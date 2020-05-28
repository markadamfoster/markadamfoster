import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

import { OutlineLinkButton } from 'styles/Buttons'
import ArticleLink from './ArticleLink'

Articles.propTypes = {
  articles: PropTypes.array,
}

function Articles() {
  const data = useStaticQuery(graphql`
    query ArticlesQuery {
      allMdx(
        sort: { fields: frontmatter___date, order: DESC }
        filter: { frontmatter: { published: { eq: true } } }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              popular
            }
          }
        }
      }
    }
  `)

  const articles = data.allMdx.edges
  const popularArticles = articles
    .filter((post) => post.node.frontmatter.popular)
    .slice(0, 3)

  const recentArticles = articles.slice(0, 5)

  return (
    <Wrapper>
      <h3>Most Popular</h3>
      <List>
        {popularArticles.map(({ node: article }) => (
          <ArticleLink
            key={article.fields.slug}
            slug={article.fields.slug}
            title={article.frontmatter.title}
          />
        ))}
      </List>

      <h3>Most Recent</h3>
      <List>
        {recentArticles.map(({ node: article }) => (
          <ArticleLink
            key={article.fields.slug}
            slug={article.fields.slug}
            title={article.frontmatter.title}
          />
        ))}
      </List>

      <OutlineLinkButton to="/articles">All Articles →</OutlineLinkButton>
    </Wrapper>
  )
}

export default Articles

const Wrapper = styled.div`
  margin: 30px 0;

  h3 {
    margin-top: 30px;
    font-size: 1.25rem;
  }
`

const List = styled.ul`
  display: block;
  margin: 20px 0 30px 20px;
  padding: 0;
  list-style-type: disc;
`

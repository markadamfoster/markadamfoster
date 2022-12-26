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
              date
              tags
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

  const recentArticles = articles.slice(0, 3)

  return (
    <Wrapper>
      <h3>Popular Articles</h3>
      <List>
        {popularArticles.map(({ node: article }) => (
          <ArticleLink key={article.fields.slug} article={article} />
        ))}
      </List>
      <LatestHeader>
        <h3>Latest Articles</h3>
        <div>
          <OutlineLinkButton to="/articles">All Articles →</OutlineLinkButton>
        </div>
      </LatestHeader>
      <List>
        {recentArticles.map(({ node: article }) => (
          <ArticleLink key={article.fields.slug} article={article} />
        ))}
      </List>
    </Wrapper>
  )
}

export default Articles

const Wrapper = styled.div`
  margin: 30px 0;

  h3 {
    margin-top: 30px;
    font-size: 2rem;
  }
`

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(1, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;

  flex-wrap: wrap;
  margin: 20px 0 30px;
  padding: 0;
  list-style-type: none;
`

const LatestHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`

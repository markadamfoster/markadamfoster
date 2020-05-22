import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

import ArticleListItem from './ArticleListItem'

function ArticlesPageContent() {
  const data = useStaticQuery(graphql`
    query ArticlesPageQuery {
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
              tags
            }
            excerpt
          }
        }
      }
    }
  `)

  console.log('data:', data)

  const articles = data.allMdx.edges

  return (
    <Wrapper>
      <Title>Articles</Title>

      <List>
        {articles.map(({ node: article }) => {
          return <ArticleListItem key={article.fields.slug} article={article} />
        })}
      </List>
    </Wrapper>
  )
}

export default ArticlesPageContent

ArticlesPageContent.propTypes = {
  articles: PropTypes.array,
}

const Wrapper = styled.div`
  max-width: 700px;
  padding: 0 20px;
  margin: 0 auto;
`

const Title = styled.h1``

const List = styled.ol`
  display: block;
  margin: 40px 0;
  padding: 0;
  list-style-type: none;
`

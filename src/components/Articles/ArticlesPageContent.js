import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

import ArticleListItem from './ArticleListItem'
import Videos from '../Videos/Videos'
// import SectionTitle from './SectionTitle'

function ArticlesPageContent() {
  const data = useStaticQuery(graphql`
    query ArticlesPageQuery {
      allMdx(
        sort: { frontmatter: { date: DESC } }
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

  const articles = data.allMdx.edges

  return (
    <Wrapper>
      <h1>Articles</h1>

      <List>
        {articles.map(({ node: article }) => {
          return <ArticleListItem key={article.fields.slug} article={article} />
        })}
      </List>

      <Videos />
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

const List = styled.ol`
  display: block;
  margin: 40px 0;
  padding: 0;
  list-style-type: none;
`

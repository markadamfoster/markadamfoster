import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ArticleListItem from './ArticleListItem'

class ArticlesList extends Component {
  static propTypes = {
    articles: PropTypes.array,
  }

  render() {
    const { articles } = this.props
    return (
      <List>
        {articles
          .filter(article => article.node.frontmatter.published)
          .map(({ node: article }) => {
            return (
              <ArticleListItem key={article.fields.slug} article={article} />
            )
          })}
      </List>
    )
  }
}

export default ArticlesList

const List = styled.ol`
  display: block;
  margin: 40px 0;
  padding: 0;
  list-style-type: none;
`

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import PostListItem from './PostListItem'

class PostsList extends Component {
  static propTypes = {
    posts: PropTypes.array,
  }

  render() {
    const { posts } = this.props
    return (
      <List>
        {posts
          .filter(post => post.node.frontmatter.published)
          .map(({ node: post }) => {
            return <PostListItem key={post.fields.slug} post={post} />
          })}
      </List>
    )
  }
}

export default PostsList

const List = styled.ol`
  display: block;
  width: 700px;
  max-width: 90%;
  margin: 40px auto;
  padding: 0;
  list-style-type: none;
`

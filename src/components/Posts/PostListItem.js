import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Link from 'gatsby-link'

import PostIcon from './_PostIcon'
import { colors } from 'src/Constants'

class PostListEntry extends Component {
  static propTypes = {
    post: PropTypes.object,
  }

  render() {
    const { post } = this.props

    return (
      <Wrapper>
        <PostIcon icon={post.frontmatter.icon} />
        <Link to={post.fields.slug}>
          <Title>{post.frontmatter.title}</Title>
        </Link>
      </Wrapper>
    )
  }
}

export default PostListEntry

const Wrapper = styled.li`
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 2px solid #dddddd;

  :last-child {
    border-bottom: none;
  }
`

const Title = styled.h3`
  font-family: Lato;
  margin: 5px 0;
  font-size: 19px;
  line-height: 32px;
  font-weight: 400;
  color: ${colors.textDark};
  transition: color 250ms;

  &:hover {
    color: ${colors.action};
  }

  @media (max-width: 600px) {
    font-size: 17px;
    line-height: 23px;
  }
`

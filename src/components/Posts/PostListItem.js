import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Link from 'gatsby-link'

// import Tags from './_Tags'
import { colors } from 'src/Constants'

class PostListEntry extends Component {
  static propTypes = {
    post: PropTypes.object,
  }

  render() {
    const { post } = this.props
    // const date = new Date(post.frontmatter.date)
    return (
      <Wrapper>
        <Link to={post.fields.slug}>
          <Title>{post.frontmatter.title}</Title>
        </Link>

        <Info>
          {/* <PostDate>{date.toLocaleDateString('en-US')}</PostDate> */}
          {/* <Tags tags={post.frontmatter.tags} /> */}
        </Info>
      </Wrapper>
    )
  }
}

export default PostListEntry

const Wrapper = styled.li`
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 2px solid #dddddd;

  :last-child {
    border-bottom: none;
  }
`

const Title = styled.h3`
  font-family: Lato;
  margin: 5px 0 2px;
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

const Info = styled.div`
  display: flex;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`

const PostDate = styled.span`
  font-size: 14px;
  color: ${colors.textMedium};
  margin-right: 20px;

  @media (max-width: 600px) {
    margin-bottom: 10px;
  }
`

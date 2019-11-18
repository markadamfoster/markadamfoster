import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import styled from 'styled-components'

import 'src/styles/prismjs-theme.css'

import DefaultLayout from '../layouts/DefaultLayout'
import { colors } from 'src/Constants'
import { EmailSignup } from '../components/EmailSignup'

class BlogPostTemplate extends React.Component {
  static propTypes = {
    // gatsby-node.js
    data: PropTypes.object,
    pageContext: PropTypes.object,
    // router
    location: PropTypes.object,
  }

  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const siteDescription = post.excerpt
    const { previous, next } = this.props.pageContext

    return (
      <DefaultLayout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${post.frontmatter.title} | ${siteTitle}`}
        />
        <Post className="blog-post">
          <Title>{post.frontmatter.title}</Title>
          <Date>{post.frontmatter.date}</Date>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />

          <hr style={{ margin: '40px 0' }} />

          <EmailSignup />

          <hr style={{ margin: '40px 0' }} />

          <ul
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              listStyle: 'none',
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </Post>
      </DefaultLayout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`

const Post = styled.div`
  font-size: 18px;
  line-height: 1.5;
  width: 800px;
  max-width: 90%;
  margin: 0 auto;
  overflow-wrap: break-word;
  word-wrap: break-word;

  @media (max-width: 600px) {
    font-size: 16px;
  }

  img {
    border: 1px solid #ddd;
    max-width: 100%;
  }
`

const Title = styled.h1`
  text-align: center;
  line-height: 1.2;
  font-size: 36px;
  margin: 40px 0;

  @media (max-width: 800px) {
    font-size: 32px;
  }

  @media (max-width: 600px) {
    margin: 40px 0 20px;
    font-size: 24px;
  }
`

const Date = styled.div`
  text-align: center;
  margin-bottom: 40px;
  color: ${colors.textMedium};
  font-size: 15px;

  @media (max-width: 600px) {
    margin-bottom: 20px;
  }
`

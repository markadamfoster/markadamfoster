import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import DefaultLayout from './DefaultLayout'
import { colors } from 'Constants'
import { EmailSignup } from '../components/EmailSignup'

import 'styles/prismjs-theme.css'

ArticleLayout.propTypes = {
  data: PropTypes.object,
}

export default function ArticleLayout({ data }) {
  console.log('data:', data)
  const { excerpt, body } = data.mdx
  const { title, date } = data.mdx.frontmatter
  const siteTitle = data.site.siteMetadata.title

  return (
    <DefaultLayout>
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        meta={[{ name: 'description', content: excerpt }]}
        title={`${title} | ${siteTitle}`}
      />

      <Post className="blog-post">
        <Title>{title}</Title>
        <Date>{date}</Date>

        <MDXRenderer>{body}</MDXRenderer>

        <hr style={{ margin: '40px 0' }} />
        <EmailSignup />
        <hr style={{ margin: '40px 0' }} />
      </Post>
    </DefaultLayout>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(id: { eq: $id }) {
      id
      body
      excerpt
      frontmatter {
        title
        date(formatString: "MMM D, YYYY")
      }
    }
  }
`

const Post = styled.div`
  font-size: 18px;
  line-height: 1.6;
  width: 700px;
  max-width: 94%;
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

  li {
    margin-bottom: 10px;
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

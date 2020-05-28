import React from 'react'
import { graphql, Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { PostContent } from 'components/Shared/PostContent'
import { colors } from 'Constants'
import DefaultLayout from './DefaultLayout'
import { EmailSignup } from 'components/EmailSignup'

import 'styles/prismjs-theme.css'

ArticleLayout.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
}

export default function ArticleLayout(props) {
  const { data, pageContext } = props
  const { excerpt, body } = data.mdx
  const { title, date } = data.mdx.frontmatter
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <DefaultLayout>
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        meta={[{ name: 'description', content: excerpt }]}
        title={`${title} | ${siteTitle}`}
      />

      <PostWrapper>
        <PostContent className="blog-post">
          <Title>{title}</Title>
          <Date>{date}</Date>

          <MDXRenderer>{body}</MDXRenderer>

          <EmailSignup />

          <PrevNext>
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
          </PrevNext>
        </PostContent>
      </PostWrapper>
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

const PostWrapper = styled.div`
  width: 700px;
  max-width: 94%;
  margin: 0 auto;
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

const PrevNext = styled.ul`
  display: flex !important;
  flex-wrap: wrap !important;
  justify-content: space-between !important;
  list-style: none !important;
  padding: 0 !important;
  font-size: 15px !important;
`

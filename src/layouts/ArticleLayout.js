import React from 'react'
import { graphql } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import SEO from 'components/Shared/SEO'
import { PostContent } from 'components/Shared/PostContent'
import { colors } from 'Constants'
import DefaultLayout from './DefaultLayout'
import { EmailSignup } from 'components/EmailSignup'

import 'styles/prismjs-theme.css'

ArticleLayout.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
  children: PropTypes.object,
}

/* eslint-disable react/prop-types */
export const Head = ({ data }) => (
  <SEO title={data.mdx.frontmatter.title} description={data.mdx.excerpt} />
)
/* eslint-enable */

export default function ArticleLayout({ data, children }) {
  const { title, date } = data.mdx.frontmatter

  return (
    <DefaultLayout>
      <PostWrapper>
        <PostContent className="blog-post">
          <Title>{title}</Title>
          <Date>{date}</Date>

          <MDXProvider>{children}</MDXProvider>

          <EmailSignup />
        </PostContent>
      </PostWrapper>
    </DefaultLayout>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
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

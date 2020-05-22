// import React from 'react'
// import PropTypes from 'prop-types'
// import { Helmet } from 'react-helmet'
// import { Link, graphql, useStaticQuery } from 'gatsby'
// import styled from 'styled-components'

// import 'styles/prismjs-theme.css'

// import DefaultLayout from './DefaultLayout'
// import { colors } from 'Constants'
// import { EmailSignup } from '../components/EmailSignup'

// ArticleLayout.propTypes = {
//   // gatsby-node.js
//   data: PropTypes.object,
//   pageContext: PropTypes.object,
//   // router
//   location: PropTypes.object,
// }

// function ArticleLayout(props) {
//   console.log('ArticleTemplate props:', props)

//   const data = useStaticQuery(graphql`
//     query ArticleLayoutQuery {
//       site {
//         siteMetadata {
//           title
//         }
//       }
//       allMdx(
//         sort: { fields: frontmatter___date, order: DESC }
//         filter: { frontmatter: { published: { eq: true } } }
//       ) {
//         edges {
//           node {
//             fields {
//               slug
//             }
//             frontmatter {
//               title
//               popular
//               tags
//             }
//             excerpt
//           }
//         }
//       }
//     }
//   `)

//   console.log('data:', data)

//   const siteTitle = data.site.siteMetadata.title
//   const siteDescription = '(post excerpt missing)' // post.excerpt // TODO: Get the post excerpt!
//   console.log('siteDescription:', siteDescription)
//   const postTitle = props.pageContext.frontmatter.title
//   const postDate = props.pageContext.frontmatter.date

//   return (
//     <DefaultLayout location={props.location}>
//       <Helmet
//         htmlAttributes={{ lang: 'en' }}
//         meta={[{ name: 'description', content: siteDescription }]}
//         title={`${postTitle} | ${siteTitle}`}
//       />
//       <Post className="blog-post">
//         <Title>{postTitle}</Title>
//         <Date>{postDate}</Date>
//         <PostContent>
//           {props.children}

//           <hr style={{ margin: '40px 0' }} />

//           <EmailSignup />

//           <hr style={{ margin: '40px 0' }} />
//         </PostContent>
//       </Post>
//     </DefaultLayout>
//   )
// }

// export default ArticleLayout

// const Post = styled.div`
//   font-size: 18px;
//   width: 800px;
//   max-width: 96%;
//   margin: 0 auto;
//   overflow-wrap: break-word;
//   word-wrap: break-word;

//   @media (max-width: 600px) {
//     font-size: 16px;
//   }

//   img {
//     border: 1px solid #ddd;
//     max-width: 100%;
//   }
// `

// const PostContent = styled.div`
//   width: 700px;
//   max-width: 90%;
//   margin: 0 auto;
//   line-height: 1.6;

//   li {
//     margin-bottom: 10px;
//   }
// `

// const Title = styled.h1`
//   text-align: center;
//   line-height: 1.2;
//   font-size: 36px;
//   margin: 40px 0;

//   @media (max-width: 800px) {
//     font-size: 32px;
//   }

//   @media (max-width: 600px) {
//     margin: 40px 0 20px;
//     font-size: 24px;
//   }
// `

// const Date = styled.div`
//   text-align: center;
//   margin-bottom: 40px;
//   color: ${colors.textMedium};
//   font-size: 15px;

//   @media (max-width: 600px) {
//     margin-bottom: 20px;
//   }
// `

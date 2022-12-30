import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import VideoEntry from './VideoEntry'

export default function Videos() {
  const data = useStaticQuery(graphql`
    query HomePageVideosQuery {
      allMdx(
        sort: { frontmatter: { date: DESC } }
        filter: {
          frontmatter: { templateKey: { eq: "video" }, featured: { eq: true } }
        }
        limit: 3
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              popular
              featuredImage {
                childImageSharp {
                  gatsbyImageData(width: 630)
                }
              }
            }
          }
        }
      }
    }
  `)

  const videos = data.allMdx.edges

  return (
    <div className="flex flex-col sm:flex-row justify-between">
      {videos.map(({ node: video }) => (
        <VideoEntry key={video.fields.slug} video={video} />
      ))}
    </div>
  )
}

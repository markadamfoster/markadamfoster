import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import PlayIcon from 'react-feather/dist/icons/play'

VideoEntry.propTypes = {
  video: PropTypes.object,
}

function VideoEntry({ video }) {
  const { title, featuredImage } = video.frontmatter
  const { slug } = video.fields
  const image = getImage(featuredImage)

  return (
    <div className="sm:w-1/3 my-6">
      <div className="hover:bg-red-200 transition-all duration-200 p-3 rounded-lg">
        <Link to={slug}>
          <ImageWrapper>
            <GatsbyImage image={image} alt={title} />
            <Icon size={54} color="white" />
          </ImageWrapper>

          <div className="text-base sm:text-sm md:text-base mt-2 text-gray-900">
            {title}
          </div>
        </Link>
      </div>
    </div>
  )
}

export default VideoEntry

const Icon = styled(PlayIcon)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const ImageWrapper = styled.div`
  position: relative;
  img {
    border-radius: 8px;
  }
`

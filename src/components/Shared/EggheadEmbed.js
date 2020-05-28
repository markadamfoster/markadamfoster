import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

EggheadEmbed.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

function EggheadEmbed({ link, title }) {
  return (
    <>
      <EmbedWrapper>
        <iframe
          title={`Video: ${title}`}
          src={`${link}/embed`}
          scrolling="no"
          width="100%"
          height="100%"
          allowFullScreen
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
          }}
        />
      </EmbedWrapper>

      <div className="text-sm mt-1 italic">
        Or view on <a href={link}>egghead.io</a>
      </div>
    </>
  )
}

export default EggheadEmbed

const EmbedWrapper = styled.div`
  position: relative;
  overflow: hidden;
  padding-bottom: 56.2%;
`

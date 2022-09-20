import React from 'react'
import PropTypes from 'prop-types'

Emoji.propTypes = {
  emoji: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}

export default function Emoji({ emoji, label }) {
  return (
    <span role="img" aria-label={label}>
      {emoji}
    </span>
  )
}

import React from 'react'
import PropTypes from 'prop-types'
import { animated, useSpring, config } from 'react-spring'

import { colors } from 'Constants'

const openedTransformationConfig = {
  top: 'translate(2, 7) rotate(0)',
  center: 'translate(2, 19) rotate(0)',
  bottom: 'translate(2, 31) rotate(0)',
  color: colors.action,
}

const closedTransformationConfig = {
  top: 'translate(5, 32) rotate(-45)',
  center: 'translate(10, 4) rotate(45)',
  bottom: 'translate(5, 32) rotate(-45)',
  color: colors.richBlack,
}

export default function MenuIcon({ isOpen }) {
  const { top, center, bottom, color } = useSpring({
    to: isOpen ? closedTransformationConfig : openedTransformationConfig,
    config: config.stiff,
  })

  return (
    <animated.svg
      width="24"
      height="24"
      viewBox="0 0 44 44"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <animated.rect width="40" height="6" rx="3" transform={top} />
      <animated.rect width="40" height="6" rx="3" transform={center} />
      <animated.rect width="40" height="6" rx="3" transform={bottom} />
    </animated.svg>
  )
}

MenuIcon.propTypes = {
  isOpen: PropTypes.bool.isRequired,
}

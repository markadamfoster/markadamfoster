import React from 'react'
import PropTypes from 'prop-types'
import { Menu, X } from 'react-feather'

import { colors } from 'Constants'

export function MenuIcon({ isOpen }) {
  if (isOpen) {
    return <X color={colors.textDark} />
  } else {
    return <Menu style={{ opacity: 0.4 }} />
  }
}

MenuIcon.propTypes = {
  isOpen: PropTypes.bool.isRequired,
}

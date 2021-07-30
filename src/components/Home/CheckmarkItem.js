import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

CheckmarkItem.propTypes = {
  children: PropTypes.string,
  Icon: PropTypes.func,
}

export default function CheckmarkItem({ children, Icon }) {
  return (
    <li className="flex items-center my-6">
      <IconWrapper className="h-12 w-12 rounded-full mr-3 flex-shrink-0 flex justify-center items-center">
        <Icon className="h-6 w-6 text-maf-teal" />
      </IconWrapper>
      <Text className="text-lg leading-relaxed">{children}</Text>
    </li>
  )
}

const IconWrapper = styled.div`
  background: #247ba02b;
`

const Text = styled.div`
  @media (max-width: 500px) {
    font-size: 16px;
  }
`

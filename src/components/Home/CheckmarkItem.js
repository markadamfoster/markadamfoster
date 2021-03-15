import React from 'react'
import PropTypes from 'prop-types'

CheckmarkItem.propTypes = {
  children: PropTypes.string,
}

export default function CheckmarkItem({ children }) {
  return (
    <li className="flex items-center my-6">
      <div className="bg-gray-200 h-12 w-12 rounded-full mr-3 flex-shrink-0"></div>
      <div className="text-lg leading-relaxed">{children}</div>
    </li>
  )
}

import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { colors } from 'Constants'

ArticleLink.propTypes = {
  slug: PropTypes.string,
  title: PropTypes.string,
}

export default function ArticleLink({ slug, title }) {
  return (
    <Wrapper className="mb-4">
      <Link to={slug} className="text-base lg:text-lg">
        {title}
      </Link>
    </Wrapper>
  )
}

const Wrapper = styled.li`
  a {
    color: ${colors.textDark};

    &:hover {
      color: ${colors.action};
    }
  }
`

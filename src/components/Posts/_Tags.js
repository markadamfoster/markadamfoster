import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import TagIcon from './_TagIcon'
import { colors } from 'src/Constants'

class Tags extends Component {
  static propTypes = {
    tags: PropTypes.array,
    includeLinks: PropTypes.bool,
  }

  static defaultProps = {
    includeLinks: false,
  }

  render() {
    const { tags } = this.props

    return (
      <Wrapper>
        {tags.map(tag => {
          return (
            <Tag key={tag}>
              <TagIcon size="16" style={{ marginRight: 3 }} /> {tag}
            </Tag>
          )
        })}
      </Wrapper>
    )
  }
}

export default Tags

const Wrapper = styled.div`
  display: flex;
`

const Tag = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
  margin-right: 8px;
  color: #747373;
  transition: color 250ms;

  &:hover {
    color: ${props => (props.showHoverColor ? colors.action : '#747373')};
  }
`

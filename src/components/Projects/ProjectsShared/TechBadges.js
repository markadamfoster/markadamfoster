import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'

// Project badge icons
import bootstrapIcon from 'assets/projects/badges/bootstrap.png'
import cssIcon from 'assets/projects/badges/css3.png'
import expoIcon from 'assets/projects/badges/expo.png'
import gulpIcon from 'assets/projects/badges/gulp.png'
import htmlIcon from 'assets/projects/badges/html5.png'
import jqueryIcon from 'assets/projects/badges/jquery.png'
import jsIcon from 'assets/projects/badges/js.png'
import mongoIcon from 'assets/projects/badges/mongo.png'
import railsIcon from 'assets/projects/badges/rubyonrails.png'
import reactIcon from 'assets/projects/badges/react.png'
import reduxIcon from 'assets/projects/badges/redux.png'
import sassIcon from 'assets/projects/badges/sass.png'
import sketchIcon from 'assets/projects/badges/sketch.png'
import styledComponents from 'assets/projects/badges/styled-components.png'
import webpackIcon from 'assets/projects/badges/webpack.png'
import wordpressIcon from 'assets/projects/badges/wordpress.png'

const renderBadges = ({ badges, size }) => {
  return badges.map((badge) => {
    switch (badge) {
      case 'bootstrap':
        return (
          <Badge
            key={`${badge}`}
            style={{ height: size, width: size }}
            src={bootstrapIcon}
          />
        )
      case 'css':
        return (
          <Badge
            key={`${badge}`}
            style={{ height: size, width: size }}
            src={cssIcon}
          />
        )
      case 'expo':
        return (
          <Badge
            key={`${badge}`}
            style={{ height: size, width: size }}
            src={expoIcon}
          />
        )
      case 'gulp':
        return (
          <Badge
            key={`${badge}`}
            style={{ height: size, width: size }}
            src={gulpIcon}
          />
        )
      case 'html':
        return (
          <Badge
            key={`${badge}`}
            style={{ height: size, width: size }}
            src={htmlIcon}
          />
        )
      case 'jquery':
        return (
          <Badge
            key={`${badge}`}
            style={{ height: size, width: size }}
            src={jqueryIcon}
          />
        )
      case 'js':
        return (
          <Badge
            key={`${badge}`}
            style={{ height: size, width: size }}
            src={jsIcon}
          />
        )
      case 'mongo':
        return (
          <Badge
            key={`${badge}`}
            style={{ height: size, width: size }}
            src={mongoIcon}
          />
        )
      case 'rails':
        return (
          <Badge
            key={`${badge}`}
            style={{ height: size, width: size }}
            src={railsIcon}
          />
        )
      case 'react':
        return (
          <Badge
            key={`${badge}`}
            style={{ height: size, width: size }}
            src={reactIcon}
          />
        )
      case 'redux':
        return (
          <Badge
            key={`${badge}`}
            style={{ height: size, width: size }}
            src={reduxIcon}
          />
        )
      case 'sass':
        return (
          <Badge
            key={`${badge}`}
            style={{ height: size, width: size }}
            src={sassIcon}
          />
        )
      case 'sketch':
        return (
          <Badge
            key={`${badge}`}
            style={{ height: size, width: size }}
            src={sketchIcon}
          />
        )
      case 'styled-components':
        return (
          <Badge
            key={`${badge}`}
            style={{ height: size, width: size }}
            src={styledComponents}
          />
        )
      case 'webpack':
        return (
          <Badge
            key={`${badge}`}
            style={{ height: size, width: size }}
            src={webpackIcon}
          />
        )
      case 'wordpress':
        return (
          <Badge
            key={`${badge}`}
            style={{ height: size, width: size }}
            src={wordpressIcon}
          />
        )
      default:
        return null
    }
  })
}

class TechBadges extends Component {
  static propTypes = {
    badges: PropTypes.array,
    size: PropTypes.number,
  }

  static defaultProps = {
    badges: [],
    size: 36,
  }

  render() {
    const { badges, size } = this.props
    return <Wrapper>{renderBadges({ badges, size })}</Wrapper>
  }
}

export default TechBadges

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`

const Badge = styled.img`
  height: 36px;
  width: 36px;
  margin: 12px 4px 8px;
`

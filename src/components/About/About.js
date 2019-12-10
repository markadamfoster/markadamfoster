import React, { Component } from 'react'
import styled from 'styled-components'

import MailIcon from 'react-feather/dist/icons/mail'
import TwitterIcon from 'react-feather/dist/icons/twitter'
import { colors } from 'Constants'

class About extends Component {
  static propTypes = {}

  render() {
    return (
      <Wrapper>
        <Bio>
          <>
            When I'm not behind a screen, you'll find me spending time with my
            wife and daughters, working on a house project, and mountain biking
            in the Boise foothills.
          </>
        </Bio>
        <Connect>
          <a href="mailto:foster154@gmail.com">
            <MailIcon size={42} color={colors.teal} />
          </a>

          <a href="https://twitter.com/markadamfoster">
            <TwitterIcon size={42} color={colors.teal} />
          </a>
        </Connect>
      </Wrapper>
    )
  }
}

export default About

const Wrapper = styled.div``

const Bio = styled.p`
  margin: 40px auto;
  width: 500px;
  max-width: 90%;
`

const Connect = styled.div`
  margin: 30px auto;
  text-align: center;

  svg {
    margin: 0 10px;
    transition: transform 250ms;
  }

  svg:hover {
    transform: scale(1.1);
  }
`

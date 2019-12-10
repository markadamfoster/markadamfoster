import React from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'
import { colors } from 'Constants'

const ProjectLinks = ({ liveSite, code }) => (
  <Wrapper>
    {liveSite && (
      <ProjectLink href={liveSite} target="_blank">
        <Icon className="fa fa-desktop" /> View Live Site
      </ProjectLink>
    )}
    {code && (
      <ProjectLink href={code} target="_blank">
        <Icon className="fa fa-github" /> View Code
      </ProjectLink>
    )}
  </Wrapper>
)

export default ProjectLinks

ProjectLinks.propTypes = {
  liveSite: PropTypes.string,
  code: PropTypes.string,
}

const Wrapper = styled.div`
  margin: 50px auto 30px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

const ProjectLink = styled.a`
  text-decoration: none;
  font-weight: 600;
  color: white;
  width: 250px;
  min-width: 200px;
  background-color: ${colors.action};
  border-radius: 34px;
  text-align: center;
  padding: 20px 20px;
  margin: 5px;
  font-size: 18px;
  transition: background-color 0.2s;

  &:hover {
    color: white;
    background-color: ${colors.actionHover};
  }
`

const Icon = styled.span`
  margin-right: 6px;
`

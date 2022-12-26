import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { Monitor, Info } from 'react-feather'

import { colors } from 'Constants'

ProjectEntry.propTypes = {
  title: PropTypes.string,
  summary: PropTypes.string,
  description: PropTypes.string,
  bg: PropTypes.string,
  img: PropTypes.object,
  liveSiteUrl: PropTypes.string,
  learnMoreUrl: PropTypes.string,
}

export default function ProjectEntry({
  title,
  summary,
  description,
  bg = '#e2e2e2',
  img,
  liveSiteUrl,
  learnMoreUrl,
}) {
  return (
    <Wrapper bg={bg}>
      <Header>
        <Text>
          <Title>{title}</Title>
          <Summary>{summary}</Summary>
        </Text>

        <Image>
          <img src={img} alt={title} />
        </Image>
      </Header>

      <Description>{description}</Description>
      <LinkSection>
        {liveSiteUrl ? (
          <ProjectLink to={liveSiteUrl}>
            <Monitor size={16} /> Live Site
          </ProjectLink>
        ) : null}
        {learnMoreUrl ? (
          <ProjectLink to={learnMoreUrl}>
            <Info size={16} /> About This Project
          </ProjectLink>
        ) : null}
      </LinkSection>
    </Wrapper>
  )
}

const Wrapper = styled.li`
  border-radius: 8px;
  display: flex;
  position: relative;
  flex-direction: column;
  height: 100%;
  background: ${({ bg }) => bg};
  border-radius: 10px;
  padding: 20px 30px;
  font-size: 17px;
  color: ${colors.textDark};
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`

const Image = styled.div`
  height: 120px;
  flex-shrink: 0;

  img {
    max-height: 100%;
  }
`

const Text = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
`

const Title = styled.div`
  font-size: 28px;
  font-weight: 900;
  margin-bottom: 15px;
`

const Summary = styled.div`
  font-size: 17px;
  font-weight: 900;
  margin-bottom: 10px;
`

const Description = styled.div`
  font-size: 17px;
  margin-top: 10px;
`

const LinkSection = styled.div`
  display: flex;
  margin-top: 14px;
`

const ProjectLink = styled(Link)`
  display: flex;
  align-items: center;
  margin-right: 20px;

  svg {
    margin-right: 5px;
  }

  &:hover {
    transform: scale(1.05);
  }
`

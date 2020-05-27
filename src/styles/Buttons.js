import styled, { css } from 'styled-components'
import Link from 'gatsby-link'

import { colors } from 'Constants'

const buttonBaseStyles = css`
  font-size: 14px;
  display: inline-block;
  padding: 0 20px;
  font-weight: 700;
  height: 2.8rem;
  line-height: 2.8rem;
  text-align: center;
  border: none;
  border-radius: 6px;
  cursor: pointer;
`

const primaryStyles = css`
  background-color: ${colors.action};
  color: white;
  transition: background-color 200ms;

  &:hover {
    background-color: ${colors.actionHover};
    color: white;
  }
`

const outlineStyles = css`
  color: ${colors.action};
  background-color: transparent;
  box-shadow: inset 0 0 0 2px ${colors.action};
  transition: color 200ms, box-shadow 200ms;

  &:hover {
    color: ${colors.actionHover};
    box-shadow: inset 0 0 0 2px ${colors.actionHover};
  }
`

/* ########################
Primary Buttons
######################## */

export const PrimaryButton = styled.button`
  ${buttonBaseStyles}
  ${primaryStyles}
`

/* for internal links */
export const PrimaryLinkButton = styled(Link)`
  ${buttonBaseStyles}
  ${primaryStyles}
`

/* for external links */
export const PrimaryExtLinkButton = styled.a`
  ${buttonBaseStyles}
  ${primaryStyles}
`

/* ########################
Outline Buttons
######################## */

export const OutlineButton = styled.button`
  ${buttonBaseStyles}
  ${outlineStyles}
`

/* for internal links */
export const OutlineLinkButton = styled(Link)`
  ${buttonBaseStyles}
  ${outlineStyles}
`

/* for external links */
export const OutlineExtLinkButton = styled.a`
  ${buttonBaseStyles}
  ${outlineStyles}
`

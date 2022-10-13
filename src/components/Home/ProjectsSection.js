import React from 'react'
import styled from 'styled-components/macro'

import PortfolioItem from './PortfolioItem'

export default function ProjectsSection() {
  return (
    <Wrapper className="my-20">
      <h3 className="text-5xl">Recent Projects</h3>
      <ul className="my-10">
        <PortfolioItem
          title="PhotoInvoice"
          summary="Vivamus congue cursus consectetur integer sed"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dignissim commodo odio sed tempus. Sed ac ligula tristique, imperdiet arcu ac, vulputate enim. Vivamus congue cursus consectetur. Integer sed purus nec nibh dictum dapibus et id ipsum. Aenean vel lectus sem. Proin velit massa, bibendum ac tristique ut, interdum ut nisi. "
        />
        <PortfolioItem
          title="Admin Console"
          summary="Vivamus congue cursus consectetur integer sed"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dignissim commodo odio sed tempus. Sed ac ligula tristique, imperdiet arcu ac, vulputate enim. Vivamus congue cursus consectetur. Integer sed purus nec nibh dictum dapibus et id ipsum. Aenean vel lectus sem. Proin velit massa, bibendum ac tristique ut, interdum ut nisi. "
        />
        <PortfolioItem
          title="Mobile Printing Kiosk"
          summary="Vivamus congue cursus consectetur integer sed"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dignissim commodo odio sed tempus. Sed ac ligula tristique, imperdiet arcu ac, vulputate enim. Vivamus congue cursus consectetur. Integer sed purus nec nibh dictum dapibus et id ipsum. Aenean vel lectus sem. Proin velit massa, bibendum ac tristique ut, interdum ut nisi. "
        />
      </ul>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  h3 {
    margin-top: 30px;
    font-size: 2rem;
  }
`

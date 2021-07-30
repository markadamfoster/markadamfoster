import React from 'react'

import PortfolioItem from './PortfolioItem'

export default function PortfolioSection() {
  return (
    <div className="my-20">
      <h2 className="text-5xl">Portfolio</h2>
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
    </div>
  )
}

import React from 'react'

import ServicesItem from './ServicesItem'

export default function ServicesSection() {
  return (
    <div className="my-20">
      <h2 className="text-5xl">Services</h2>
      <ul className="my-10">
        <ServicesItem
          title="Web Development"
          description="Full-stack development for web platforms, marketing pages and everything in between."
        />
        <ServicesItem
          title="Cross-platform mobile development"
          description="Full-stack development for web platforms, marketing pages and everything in between."
        />
        <ServicesItem
          title="React Coaching &amp; Consulting"
          description="Full-stack development for web platforms, marketing pages and everything in between."
        />
      </ul>
    </div>
  )
}

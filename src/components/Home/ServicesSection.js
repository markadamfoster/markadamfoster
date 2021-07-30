import React from 'react'

import ServicesItem from './ServicesItem'
import webDevImgSrc from 'assets/home/web-development.jpg'
import mobileDevImgSrc from 'assets/home/mobile-dev.jpg'
import coachingImgSrc from 'assets/home/coaching.jpg'

export default function ServicesSection() {
  return (
    <div className="my-20">
      <h2 className="text-5xl">Services</h2>
      <ul className="my-10">
        <ServicesItem
          title="Web Development"
          description="Full-stack development for web platforms, marketing pages and everything in between."
          img={webDevImgSrc}
        />
        <ServicesItem
          title="Cross-platform mobile development"
          description="Full-stack development for web platforms, marketing pages and everything in between."
          img={mobileDevImgSrc}
        />
        <ServicesItem
          title="React Coaching &amp; Consulting"
          description="Full-stack development for web platforms, marketing pages and everything in between."
          img={coachingImgSrc}
        />
      </ul>
    </div>
  )
}

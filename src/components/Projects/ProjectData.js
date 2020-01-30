import leapCharitiesCover from 'assets/projects/covers/leap-charities.jpg'
import photoInvoiceCover from 'assets/projects/covers/photo-invoice.jpg'
import checkinCover from 'assets/projects/covers/check-in.jpg'
import adminConsoleCover from 'assets/projects/covers/admin-console.jpg'
import printhubSetupCover from 'assets/projects/covers/printhub-setup.jpg'
import showAndTourCover from 'assets/projects/covers/showtour.jpg'
import panoractivesCover from 'assets/projects/covers/panoractives.jpg'
import bsuYoungLifeCover from 'assets/projects/covers/bsu-younglife.jpg'
import brooksideCover from 'assets/projects/covers/brookside-dentistry.jpg'
import supportTrackerCover from 'assets/projects/covers/support-tracker.jpg'
import rentBuyCover from 'assets/projects/covers/rentbuy.jpg'

/*
Tags: 
  bootstrap,
  expo,  
  gulp, 
  jquery,
  rails,
  react, 
  redux, 
  sass,
  styled-components,
*/

export const projectData = [
  {
    name: 'Photo Invoice',
    featured: true,
    featuredBgColor: 'rgba(65, 196, 243, 0.15)',
    slug: 'photo-invoice',
    cover: photoInvoiceCover,
    subtitle: 'SaaS Web App: Upfront Invoicing for Real Estate Photographers',
    summary:
      'Designed and developed the sales website (GatsbyJS), web application (React) and backend (Node/MongoDB) for a full-featured SaaS startup.',
    // summary:
    //   'The best way for photographers to invoice clients. A React-based web application with an ExpressJS & MongoDB backend, featuring integration with Stripe and Amazon S3.',
    badges: ['react', 'redux', 'styled-components'],
  },
  {
    name: 'Check-In',
    slug: 'check-in',
    cover: checkinCover,
    subtitle: "Web App: Secure Children's Check-In",
    summary:
      'A full-featured, internationalization-ready single-page React web application for processing child check-ins for churches, daycares, and other child care organizations. Built using React, Redux, Styled Components, and more.',
    badges: ['react', 'redux', 'styled-components'],
  },
  {
    name: 'Admin Console',
    featured: true,
    featuredBgColor: 'rgba(135, 195, 138, 0.15)',
    slug: 'admin-console',
    cover: adminConsoleCover,
    subtitle: "Mobile App: Live Roster for Children's Check-In",
    summary:
      'A mobile app for iOS and Android built with React Native, the Expo framework, and Redux for application state management.',
    badges: ['react', 'redux', 'expo'],
  },
  {
    name: 'PrintHub Setup App',
    slug: 'printhub-setup',
    cover: printhubSetupCover,
    summary:
      'A jQuery web application for setting up and customizing a Raspberry PI-based print server device. Includes custom HTML/CSS theming, integration with a remote API, styling with Sass, and a Gulp-based build process.',
    badges: ['jquery', 'gulp', 'sass'],
  },
  {
    name: 'Show and Tour',
    slug: 'show-and-tour',
    cover: showAndTourCover,
    subtitle: 'SaaS Web App: Real Estate Virtual Tours',
    summary:
      'This Ruby on Rails based web app allows real estate photographers and agents to create virtual tours highlighting their listings. Includes S3-hosted image uploads, Stripe integration, and multiple themes.',
    badges: ['rails', 'sass', 'bootstrap'],
  },
  {
    name: 'Panoractives',
    featured: true,
    featuredBgColor: 'rgba(54, 168, 213, 0.15)',
    slug: 'panoractives',
    cover: panoractivesCover,
    subtitle: 'Website & Business: Real Estate Photography',
    summary:
      'A mobile-friendly WordPress site displaying full-page imagery, photo galleries, and online scheduling. Uses a child theme for needed customizations.',
    badges: ['wordpress'],
  },
  {
    name: 'LEAP Charities',
    slug: 'leap-charities',
    cover: leapCharitiesCover,
    subtitle: 'Refugee Housing Nonprofit',
    summary: 'A responsive WordPress website for a local non-profit.',
    badges: ['wordpress'],
  },
  {
    name: 'Boise State Young Life',
    slug: 'boise-state-young-life',
    cover: bsuYoungLifeCover,
    summary:
      'A clean, friendly website built with WordPress for a local college ministry. Featuring an Instagram feed, embedded videos, and 100% mobile-friendly.',
    badges: ['wordpress'],
  },
  {
    name: 'Brookside Dentistry',
    slug: 'brookside-dentistry',
    cover: brooksideCover,
    subtitle: 'Award-Winning Dental Office',
    summary:
      'A professional WordPress-based website built for an award-winning dental office. This site includes embedded reviews and videos, as well as downloadable patient forms.',
    badges: ['wordpress'],
  },
  {
    name: 'Support Tracker',
    slug: 'support-tracker',
    cover: supportTrackerCover,
    summary:
      'This is a full-featured, database-backed support ticket management web app. It features calendar and list views, a tagging system, metrics, and follow-up reminders.  ',
    badges: ['rails', 'sass', 'bootstrap'],
  },
  {
    name: 'My Rent Will Buy',
    slug: 'my-rent-will-buy',
    cover: rentBuyCover,
    summary:
      'A Ruby on Rails web app for getting a mortgage qualification estimate. Backed with a PostgreSQL database and featuring automatic email notifications.',
    badges: ['rails', 'sass', 'bootstrap'],
  },
]

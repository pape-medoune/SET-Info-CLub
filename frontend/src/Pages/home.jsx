import React, { useState } from 'react'
import HeroSection from '../components/home page/HeroSection'
import { Podcast } from '../components/home page/Podcast'
import Events from '../components/home page/Events'
import Blog from '../components/home page/SceanceTutorat'
import Subby from '../components/home page/Subby'
import DiscussionForum from '../components/home page/DiscussionForum'
import Testimonial from '../components/home page/Testimonial'
import Partenaire from '../components/home page/Partenaire'

function Home() {
  return (
    <div>
      <HeroSection />
      <Podcast />
      <Events />
      <Blog />
      <Subby />
      <DiscussionForum />
      <Testimonial />
      <Partenaire />
    </div >
  )
}

export default Home
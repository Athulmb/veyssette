import React from 'react'
import HeroHome from '../components/home/HeroHome'
import Costem from '../components/home/Costem'
import PassionFor from '../components/home/PassionFor'
import HowIt from '../components/home/HowIt'
import Menus from '../components/home/Menus'
import Experences from '../components/home/Experences'
import RedyTo from '../components/home/RedyTo'
import Our from '../components/home/Our'

const HomePage = () => {
  return (
    <div>
        <HeroHome/>
        <Costem/>
        <PassionFor/>
        <Our/>
        <HowIt/>
        <Menus/>
        <Experences/>
        <RedyTo/>
        
      
    </div>
  )
}

export default HomePage

import React from 'react';
import HeroAbout from '../components/about/HeroAbout';
import OurStory from '../components/about/OurStory';
import WhatGuides from '../components/about/WhatGuides';
import MeetYour from '../components/about/MeetYour';
import WhatOur from '../components/about/WhatOur';

const AboutPage = () => {
  return (

    <div>
        <HeroAbout/>
        <OurStory/>
        <WhatGuides/>
        <MeetYour/>
        <WhatOur/>
    </div>
  );
};

export default AboutPage;
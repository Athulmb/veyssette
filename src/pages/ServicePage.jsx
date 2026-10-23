import React from 'react';
import ServiceHero from '../components/service/ServiceHero';
import WhatWe from '../components/service/WhatWe';
import How from '../components/service/How';

const ServicePage = () => {
  return (
    <main>
      <ServiceHero />
      <WhatWe />
      <How />
    </main>
  );
};

export default ServicePage;
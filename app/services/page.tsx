import Sustainable1Image from '@/assets/cards/sustainable1.jpg';
import Sustainable2Image from '@/assets/cards/sustainable2.webp';
import Sustainable3Image from '@/assets/cards/sustainable3.jpg';

import backgroundImage from '@/assets/images/background2.jpg';
import CardExplore from '@/components/common/CardExplore';
import Hero from '@/components/common/Hero';
import HeroImage from '@/components/common/HeroImage';
import Section from '@/components/common/Section';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Geotech Services',
  description:
    'Geotech S.A. offers specialized services and in situ support, evaluation, exploitation and management of Groundwater resources, Ground Renewable Energy sources, Mining Resources, and Geotechnical and Environmental applications.',
};

function page() {
  return (
    <>
      <Hero
        footage={<HeroImage backgroundImage={backgroundImage} />}
        title={pageData.hero.title}
        text={pageData.hero.text}
      />

      <Section title={pageData.geothermal.title} text={pageData.geothermal.text}>
        <div className="w-full flex justify-center items-center flex-wrap gap-10">
          <CardExplore image={Sustainable1Image} text={pageData.geothermal.explore.card1} />
          <CardExplore image={Sustainable2Image} text={pageData.geothermal.explore.card2} />
          <CardExplore image={Sustainable3Image} text={pageData.geothermal.explore.card3} />
        </div>
      </Section>

      <Section
        title="Oil and Gas Services"
        text="Geotech S.A. offers specialized services and in situ support, evaluation, exploitation and management of Groundwater resources, Ground Renewable Energy sources, Mining Resources, and Geotechnical and Environmental applications."
      ></Section>
    </>
  );
}

export default page;

const pageData = {
  hero: {
    title: 'The Future of Energy',
    text: 'Geotech is focused on delivering environmentally friendly energy solutions worldwide that surpass conventional energy sources.',
  },
  geothermal: {
    title: 'Geothermal Energy Solutions',
    text: 'Geotech is focused on delivering environmentally friendly energy solutions worldwide that surpass conventional energy sources.',
    explore: {
      card1: {
        title: 'Geothermal Energy',
        content:
          "Geothermal Services involve the utilization of the heat energy stored in the Earth's subsurface to generate electricity or provide direct heating and cooling.",
        url: '/services/geothermal-energy',
      },
      card2: {
        title: 'CO2 Storage',
        content:
          'CO2 Storage services involve the safe and secure storage of carbon dioxide (CO2) in subsurface geological formations.',
        url: '/services/co2-storage',
      },
      card3: {
        title: 'Hydrogen',
        content:
          'Hydrogen services involve the production of hydrogen from renewable energy sources and its storage in subsurface geological formations.',
        url: '/services/hydrogen',
      },
    },
  },
};

import Geotechnical1Image from '@/assets/cards/geotechnical1.png';
import Geotechnical2Image from '@/assets/cards/geotechnical2.png';
import Geotechnical3Image from '@/assets/cards/geotechnical3.jpg';
import Geotechnical4Image from '@/assets/cards/geotechnical4.png';
import Groundwater1Image from '@/assets/cards/groundwater1.png';
import Groundwater2Image from '@/assets/cards/groundwater2.png';
import Groundwater3Image from '@/assets/cards/groundwater3.png';
import OilAndGas1Image from '@/assets/cards/oilandgas1.png';
import OilAndGas2Image from '@/assets/cards/oilandgas2.jpg';
import OilAndGas3Image from '@/assets/cards/oilandgas3.png';
import Sustainable1Image from '@/assets/cards/sustainable1.jpg';
import Sustainable2Image from '@/assets/cards/sustainable2.webp';
import Sustainable3Image from '@/assets/cards/sustainable3.jpg';

import backgroundImage from '@/assets/images/background2.jpg';
import CardExplore from '@/components/common/CardExplore';
import CardExploreDark from '@/components/common/CardExploreDark';
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

      <Section title={pageData.oilandgas.title} text={pageData.oilandgas.text}>
        <div className="w-full flex flex-col justify-start items-center gap-10">
          <div className="w-full flex justify-center items-stretch flex-wrap gap-10">
            <CardExploreDark image={OilAndGas1Image} text={pageData.oilandgas.explore.card1} />
            <CardExploreDark image={OilAndGas2Image} text={pageData.oilandgas.explore.card2} />
          </div>
          <div className="w-full flex justify-center items-stretch flex-wrap gap-10">
            <CardExploreDark image={OilAndGas3Image} text={pageData.oilandgas.explore.card3} />
          </div>
        </div>
      </Section>

      <Section title={pageData.groundwater.title} text={pageData.groundwater.text}>
        <div className="w-full flex justify-center items-center flex-wrap gap-10">
          <CardExplore image={Groundwater1Image} text={pageData.groundwater.explore.card1} />
          <CardExplore image={Groundwater2Image} text={pageData.groundwater.explore.card2} />
          <CardExplore image={Groundwater3Image} text={pageData.groundwater.explore.card3} />
        </div>
      </Section>

      <Section title={pageData.geotechnical.title} text={pageData.geotechnical.text}>
        <div className="w-full flex flex-col justify-start items-center gap-10">
          <div className="w-full flex justify-center items-center flex-wrap gap-10">
            <CardExplore image={Geotechnical1Image} text={pageData.geotechnical.explore.card1} />
            <CardExplore image={Geotechnical2Image} text={pageData.geotechnical.explore.card2} />
          </div>
          <div className="w-full flex justify-center items-center flex-wrap gap-10">
            <CardExplore image={Geotechnical3Image} text={pageData.geotechnical.explore.card3} />
            <CardExplore image={Geotechnical4Image} text={pageData.geotechnical.explore.card3} />
          </div>
        </div>
      </Section>
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
  oilandgas: {
    title: 'Oil and Gas Services',
    text: 'Geotech S.A. offers specialized services and in situ support, evaluation, exploitation and management of Groundwater resources, Ground Renewable Energy sources, Mining Resources, and Geotechnical and Environmental applications.',
    explore: {
      card1: {
        title: 'Wireline Services',
        content:
          'We provide specialized solutions for the measurement, evaluation, and intervention of oil and gas wells. Our services include wireline logging, perforating, and intervention operations, providing clients with accurate and reliable information about their wells.',
        button: 'EXPLORE WIRELINE',
        url: '/services/wireline',
      },
      card2: {
        title: 'Slickline Services',
        content:
          'We provide specialized solutions for the measurement, evaluation, and intervention of oil and gas wells. Our services include wireline logging, perforating, and intervention operations, providing clients with accurate and reliable information about their wells.',
        button: 'EXPLORE SLICKLINE',
        url: '/services/slickline',
      },
      card3: {
        title: 'Coiled Tubing Services',
        content:
          'Our Coiled Tubing Services provide specialized solutions for the drilling, completion, and intervention of oil and gas wells. Coiled tubing is a continuous length of small-diameter metal pipe, used in various well operations to perform tasks such as drilling, completing, and maintaining wells. Our team of experts is equipped with the latest coiled tubing technology and has extensive experience in this field, allowing us to provide cost-effective and reliable solutions to clients in the oil and gas industry.',
        button: 'EXPLORE COILED TUBING',
        url: '/services/coiled-tubing',
      },
    },
  },
  groundwater: {
    title: 'Groundwater Services',
    text: 'We offer comprehensive solutions for the assessment, management, and protection of groundwater resources. Our services include groundwater testing, monitoring, analysis, and customized management programs, ensuring that clients receive accurate and reliable results. Our team of experts has extensive knowledge and experience in the field, and is committed to delivering high-quality, cost-effective services to clients in various industries.',
    explore: {
      card1: {
        title: 'Surface Geophysics',
        content:
          'Surface Geophysics services involve the use of non-invasive techniques to study subsurface geological features and materials.',
        url: '/services/surface-geophysics',
      },
      card2: {
        title: 'Well Logging',
        content:
          'Well Logging services involve the use of specialized instruments to obtain detailed information about subsurface geological formations and fluid conditions within a well.',
        url: '/services/well-logging',
      },
      card3: {
        title: 'Well Construction',
        content:
          'Our company provides Water Well Construction services, which involve the design and construction of wells for the extraction of ground water.',
        url: '/services/well-construction',
      },
    },
  },
  geotechnical: {
    title: 'Geotechnical Services',
    text: 'We offer comprehensive solutions for the assessment, management, and protection of groundwater resources. Our services include groundwater testing, monitoring, analysis, and customized management programs, ensuring that clients receive accurate and reliable results. Our team of experts has extensive knowledge and experience in the field, and is committed to delivering high-quality, cost-effective services to clients in various industries.',
    explore: {
      card1: {
        title: 'Surface Geophysics',
        content:
          'Surface Geophysics services involve the use of non-invasive techniques to study subsurface geological features and materials.',
        url: '/services/surface-geophysics',
      },
      card2: {
        title: 'Borehole Logging',
        content:
          'Well Logging services involve the use of specialized instruments to obtain detailed information about subsurface geological formations and fluid conditions within a well.',
        url: '/services/borehole-logging',
      },
      card3: {
        title: 'Pile Integrity Test',
        content:
          'Pile Integrity Test services involve the use of specialized instruments to obtain detailed information about subsurface geological formations and fluid conditions within a well.',
        url: '/services/pile-integrity-test',
      },
      card4: {
        title: 'Analysis and Technical Report',
        content:
          'Pile Integrity Test services involve the use of specialized instruments to obtain detailed information about subsurface geological formations and fluid conditions within a well.',
        url: '/services/analysis-and-technical-report',
      },
    },
  },
};

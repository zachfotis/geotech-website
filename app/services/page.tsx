import BackgroundImage from '@/assets/images/background2.jpg';
import Hero from '@/components/common/Hero';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Geotech Services',
  description:
    'Geotech S.A. offers specialized services and in situ support, evaluation, exploitation and management of Groundwater resources, Ground Renewable Energy sources, Mining Resources, and Geotechnical and Environmental applications.',
};

function page() {
  return (
    <>
      <Hero backgroundImage={BackgroundImage} title={homeData.hero.title} text={homeData.hero.text} />
    </>
  );
}

export default page;

const homeData = {
  hero: {
    title: 'The Future of Energy',
    text: 'Geotech is focused on delivering environmentally friendly energy solutions worldwide that surpass conventional energy sources.',
  },
};

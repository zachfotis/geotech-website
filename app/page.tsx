import BackgroundImage from '@/assets/images/background1.jpg';
import Hero from '@/components/common/Hero';

function page() {
  return (
    <>
      <Hero
        backgroundImage={BackgroundImage}
        title={homeData.hero.title}
        text={homeData.hero.text}
        button={{
          exists: true,
          text: 'Explore Services',
          variant: 'underlined',
          url: '/services',
        }}
      />
    </>
  );
}

export default page;

const homeData = {
  hero: {
    title: 'Geotech Energy Services',
    text: 'Geotech S.A. is the 1st and only service company in Greece to provide Wireline Logging Services for Oil & Gas, Groundwater and Geothermal wells.',
  },
};

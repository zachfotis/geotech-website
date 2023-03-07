import BackgroundImage from '@/assets/images/background1.jpg';
import Hero from '@/components/common/Hero';
import ImageText from '@/components/common/ImageText';
import Section from '@/components/common/Section';

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
      <Section
        title="About Us"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
      >
        <ImageText />
      </Section>
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

import backgroundImage from '@/assets/images/background3.webp';
import Hero from '@/components/common/Hero';
import HeroImage from '@/components/common/HeroImage';

function page() {
  return (
    <>
      <Hero
        footage={<HeroImage backgroundImage={backgroundImage} />}
        title={homeData.hero.title}
        text={homeData.hero.text}
      />
    </>
  );
}

export default page;

const homeData = {
  hero: {
    title: 'CO2 Storage',
    text: 'Geotech is focused on delivering environmentally friendly energy solutions worldwide that surpass conventional energy sources.',
  },
};

import BackgroundImage from '@/assets/images/background3.webp';
import Hero from '@/components/common/Hero';

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
    title: 'CO2 Storage',
    text: 'Geotech is focused on delivering environmentally friendly energy solutions worldwide that surpass conventional energy sources.',
  },
};

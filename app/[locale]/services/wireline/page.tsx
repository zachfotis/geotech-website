import backgroundImage from '@/assets/images/hero2.jpg';
import Hero from '@/components/common/Hero';
import HeroImage from '@/components/common/HeroImage';

function page() {
  return (
    <>
      <Hero
        footage={<HeroImage backgroundImage={backgroundImage} lowContrast />}
        title={homeData.hero.title}
        text={homeData.hero.text}
      />
    </>
  );
}

export default page;

const homeData = {
  hero: {
    title: 'Wireline Services',
    text: 'We provide a wide range of wireline services to the oil and gas industry.',
  },
};

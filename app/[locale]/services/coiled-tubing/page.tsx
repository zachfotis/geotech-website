import backgroundImage from '@/assets/cards/oilandgas3.png';
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
    title: 'Wireline Services',
    text: 'We provide a wide range of wireline services to the oil and gas industry.',
  },
};

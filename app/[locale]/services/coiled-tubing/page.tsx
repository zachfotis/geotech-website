import backgroundImage from '@/assets/images/coiled-tubing.jpg';
import Hero from '@/components/common/Hero';
import HeroImage from '@/components/common/HeroImage';

function page() {
  return (
    <>
      <Hero footage={<HeroImage backgroundImage={backgroundImage} />} title={data.hero.title} text={data.hero.text} />
    </>
  );
}

export default page;

const data = {
  hero: {
    title: 'Coiled Tubing Services',
    text: 'We provide a wide range of coiled tubing services to the oil and gas industry.',
  },
};

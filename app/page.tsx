import Stats1Image from '@/assets/cards/stats1.png';
import Stats2Image from '@/assets/cards/stats2.png';
import Stats3Image from '@/assets/cards/stats3.png';
import BackgroundImage from '@/assets/images/background1.jpg';
import SelectedImage from '@/assets/logos/logo.png';
import Hero from '@/components/common/Hero';
import ImageText from '@/components/common/ImageText';
import Section from '@/components/common/Section';
import StatCard from '@/components/common/StatCard';
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
      <Section title={homeData.sectionAboutUs.title} text={homeData.sectionAboutUs.text}>
        <ImageText selectedImage={SelectedImage} text={homeData.sectionAboutUs.innerText} />
        <div className="w-full flex justify-between items-stretch gap-10 flex-wrap">
          <StatCard image={Stats1Image} text={homeData.sectionAboutUs.stats.card1} />
          <StatCard image={Stats2Image} text={homeData.sectionAboutUs.stats.card2} />
          <StatCard image={Stats3Image} text={homeData.sectionAboutUs.stats.card3} />
        </div>
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
  sectionAboutUs: {
    title: 'About Us',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    innerText:
      'GEOTECH S.A. is an integrated Oil, Gas and Underground Energy Resources Services provider with Main Offices in Kavala, Greece. Founded in 1993, it has set the goal to be competent, competitive and productive, where professionalism is the key role from its 1st spark on the course. Providing Engineering Solutions and Services through the newest and most efficient applications and yet perceived as such, GEOTECH S.A. became a trusted service provider across the country. GEOTECH S.A. also extended its geographical reach across the Europe, Middle East and Africa. The Company has consistently delivered success and achieved its Clients goals with standing quality and reputation.',
    stats: {
      card1: {
        value: new Date().getFullYear() - 1993,
        label: 'Years of Experience',
      },
      card2: {
        //add 1 every month
        value: 543 + Math.floor((new Date().getTime() - new Date(2023, 0, 1).getTime()) / 1000 / 60 / 60 / 24 / 30),
        label: 'Kilometers of Logging',
      },
      card3: {
        value: 320,
        label: 'Projects Completed',
      },
    },
  },
};

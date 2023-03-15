import Activity1Image from '@/assets/cards/activity1.jpg';
import Activity2Image from '@/assets/cards/activity2.png';
import Activity3Image from '@/assets/cards/activity3.jpg';
import Activity4Image from '@/assets/cards/activity4.jpg';
import Stats1Image from '@/assets/cards/stats1.png';
import Stats2Image from '@/assets/cards/stats2.png';
import Stats3Image from '@/assets/cards/stats3.png';
import QualityImage from '@/assets/images/IMS.png';
import ISO1Image from '@/assets/images/iso1.png';
import ISO2Image from '@/assets/images/iso2.png';
import ISO3Image from '@/assets/images/iso3.png';
import SelectedImage from '@/assets/logos/logo.png';
import Hero from '@/components/common/Hero';
import HeroVideo from '@/components/common/HeroVideo';
import ImageText from '@/components/common/ImageText';
import Map from '@/components/common/Map';
import Section from '@/components/common/Section';
import StatCard from '@/components/common/StatCard';
import Clients from '@/components/home/Clients';
import Image from 'next/image';

function page() {
  return (
    <>
      <Hero
        footage={<HeroVideo src="/videos/wind-turbines.mp4" />}
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
          <StatCard image={Stats1Image} text={homeData.sectionAboutUs.stats.card1} textLG />
          <StatCard image={Stats2Image} text={homeData.sectionAboutUs.stats.card2} textLG />
          <StatCard image={Stats3Image} text={homeData.sectionAboutUs.stats.card3} textLG />
        </div>
      </Section>

      <Section title={homeData.sectionOurActivity.title} text={homeData.sectionOurActivity.text}>
        <div className="relative w-full h-[600px]">
          <Map coords={cities} zoom={6} scroll={false} />
        </div>
      </Section>

      <Section title={homeData.sectionSolutions.title} text={homeData.sectionSolutions.text}>
        <div className="w-full flex justify-between items-stretch gap-10 flex-wrap">
          <StatCard image={Activity1Image} text={homeData.sectionSolutions.stats.card1} />
          <StatCard image={Activity2Image} text={homeData.sectionSolutions.stats.card2} />
          <StatCard image={Activity3Image} text={homeData.sectionSolutions.stats.card3} />
          <StatCard image={Activity4Image} text={homeData.sectionSolutions.stats.card4} />
        </div>
      </Section>

      <Section title={homeData.sectionQuality.title} text={homeData.sectionQuality.text}>
        <ImageText
          selectedImage={QualityImage}
          text={homeData.sectionQuality.innerText}
          imagePositionLeft={false}
          quotes={false}
        />
        <div className="w-full flex justify-center items-center gap-20 flex-wrap">
          <Image src={ISO1Image} width={100} height={100} alt="ISO 9001" />
          <Image src={ISO2Image} width={100} height={100} alt="ISO 14001" />
          <Image src={ISO3Image} width={100} height={100} alt="ISO 45001" />
        </div>
      </Section>

      <Section title={homeData.sectionClients.title} text={homeData.sectionClients.text}>
        <Clients />
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
    innerText: {
      __html:
        'GEOTECH S.A. is an integrated Oil, Gas and Underground Energy Resources Services provider with Main Offices in Kavala, Greece. Founded in 1993, it has set the goal to be competent, competitive and productive, where professionalism is the key role from its 1st spark on the course. Providing Engineering Solutions and Services through the newest and most efficient applications and yet perceived as such, GEOTECH S.A. became a trusted service provider across the country. GEOTECH S.A. also extended its geographical reach across the Europe, Middle East and Africa. The Company has consistently delivered success and achieved its Clients goals with standing quality and reputation.',
    },
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
  sectionOurActivity: {
    title: 'Our Activity',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
  },
  sectionSolutions: {
    title: 'Energy Solutions',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    stats: {
      card1: {
        value: 'Oil and Gas Services',
        label: 'We provide wireline logging services for oil and gas wells, from exploration to production.',
      },
      card2: {
        value: 'Groundwater Services',
        label: 'We provide wireline logging services for groundwater wells, from exploration to production.',
      },
      card3: {
        value: 'Geotechnical Services',
        label: 'We provide wireline logging services for groundwater wells, from exploration to production.',
      },
      card4: {
        value: 'Sustainable Energy Solutions',
        label: 'We provide wireline logging services for groundwater wells, from exploration to production.',
      },
    },
  },
  sectionQuality: {
    title: 'Quality Assurance',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    innerText: {
      __html: `GEOTECH S.A. quality policy is to achieve sustained, profitable growth by providing services, which consistently satisfy the needs and expectations of its customers. This level of quality is achieved through adoption of an Integrated Management System that reflect the competence of the company to existing customers, potential customers, and independent auditing authorities. Achievement of this policy involves all staff, who is individually responsible for the quality of their work, resulting in a continually improving working environment for all.
      </br>
      </br>
      <strong>Integrated Management System:</strong>
      </br>
      </br> 
      <ul>
        <li>- Quality Management System (<strong>ISO 9001:2015</strong>)</li>
        <li>- Environmental Management System (<strong>ISO 14001:2015</strong>)</li>
        <li>- Occupational Health and Safety Management System (<strong>ISO 45001:2018</strong>)</li>
      </ul>
      `,
    },
  },
  sectionClients: {
    title: 'Clients Who Trust Us',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
  },
};

const cities = [
  {
    name: 'NΟΜΟΣ ΑΙΤΩΛΟΚΑΡΝΑΝΙΑΣ',
    coord: {
      lat: 38.43650746138648,
      lng: 21.353721762180847,
    },
  },
  {
    name: 'NΟΜΟΣ ΑΡΚΑΔΙΑΣ',
    coord: {
      lat: 37.522274535145996,
      lng: 22.37289644286303,
    },
  },
  {
    name: 'NΟΜΟΣ ΑΤΤΙΚΗΣ',
    coord: {
      lat: 37.99893518725359,
      lng: 23.721747827937,
    },
  },
  {
    name: 'NΟΜΟΣ ΑΧΑΙΑΣ',
    coord: {
      lat: 38.125770753931185,
      lng: 21.970140256469882,
    },
  },
  {
    name: 'NΟΜΟΣ ΒΟΙΩΤΙΑΣ',
    coord: {
      lat: 38.37361884889718,
      lng: 23.10447225651705,
    },
  },
  {
    name: 'NΟΜΟΣ ΓΡΕΒΕΝΩΝ',
    coord: {
      lat: 40.084116169819474,
      lng: 21.42751806654497,
    },
  },
  {
    name: 'NΟΜΟΣ ΙΩΑΝΝΙΝΩΝ',
    coord: {
      lat: 39.66643453554719,
      lng: 20.85319498513307,
    },
  },
  {
    name: 'NΟΜΟΣ ΔΡΑΜΑΣ',
    coord: {
      lat: 41.15016907464537,
      lng: 24.146191610902363,
    },
  },
  {
    name: 'NΟΜΟΣ ΕΒΡΟΥ',
    coord: {
      lat: 41.23172301358438,
      lng: 26.132036502115323,
    },
  },
  {
    name: 'NΟΜΟΣ ΕΥΒΟΙΑΣ',
    coord: {
      lat: 38.533600843064264,
      lng: 23.859155123163024,
    },
  },
  {
    name: 'NΟΜΟΣ ΘΕΣΠΡΩΤΙΑΣ',
    coord: {
      lat: 39.49048168474666,
      lng: 20.367109293377442,
    },
  },
  {
    name: 'NΟΜΟΣ ΗΜΑΘΙΑΣ',
    coord: {
      lat: 40.5964513910664,
      lng: 22.15060508539313,
    },
  },
  {
    name: 'NΟΜΟΣ ΗΡΑΚΛΕΙΟΥ',
    coord: {
      lat: 35.30009259343706,
      lng: 25.143825362280083,
    },
  },
  {
    name: 'NΟΜΟΣ ΘΕΣΣΑΛΟΝΙΚΗΣ',
    coord: {
      lat: 40.60310883286814,
      lng: 22.98630843728605,
    },
  },
  {
    name: 'NΟΜΟΣ ΚΕΦΑΛΛΗΝΙΑΣ',
    coord: {
      lat: 38.19913277569868,
      lng: 20.566963955879856,
    },
  },
  {
    name: 'NΟΜΟΣ ΚΑΒΑΛΑΣ',
    coord: {
      lat: 40.94901024912229,
      lng: 24.427484757874353,
    },
  },
  {
    name: 'NΟΜΟΣ ΚΑΡΔΙΤΣΑΣ',
    coord: {
      lat: 39.36484070374383,
      lng: 21.921387600472737,
    },
  },
  {
    name: 'NΟΜΟΣ ΚΙΛΚΙΣ',
    coord: {
      lat: 40.993852333183035,
      lng: 22.87380900781885,
    },
  },
  {
    name: 'NΟΜΟΣ ΚΟΖΑΝΗΣ',
    coord: {
      lat: 40.281463615978225,
      lng: 21.78873288661876,
    },
  },
  {
    name: 'NΟΜΟΣ ΚΟΡΙΝΘΙΑΣ',
    coord: {
      lat: 37.942979691581215,
      lng: 22.60564564992257,
    },
  },
  {
    name: 'NΟΜΟΣ ΛΑΚΩΝΙΑΣ',
    coord: {
      lat: 37.06432685877403,
      lng: 22.438175872743372,
    },
  },
  {
    name: 'NΟΜΟΣ ΛΑΡΙΣΗΣ',
    coord: {
      lat: 39.636423764633186,
      lng: 22.41762256798015,
    },
  },
  {
    name: 'NΟΜΟΣ ΜΑΓΝΗΣΙΑΣ',
    coord: {
      lat: 39.37202645180913,
      lng: 22.909913824569497,
    },
  },
  {
    name: 'NΟΜΟΣ ΜΕΣΣΗΝΙΑΣ',
    coord: {
      lat: 37.06838393505621,
      lng: 21.999248915841363,
    },
  },
  {
    name: 'ΝΟΜΟΣ ΚΥΚΛΑΔΩΝ',
    coord: {
      lat: 36.67996264013333,
      lng: 24.376318449330608,
    },
  },
  {
    name: 'ΝΟΜΟΣ ΚΕΡΚΥΡΑΣ',
    coord: {
      lat: 39.61012941972539,
      lng: 19.836290038604453,
    },
  },
  {
    name: 'NΟΜΟΣ ΣΕΡΡΩΝ',
    coord: {
      lat: 40.90893580383521,
      lng: 23.499863720184937,
    },
  },
  {
    name: 'NΟΜΟΣ ΞΑΝΘΗΣ',
    coord: {
      lat: 40.90893580383521,
      lng: 23.499863720184937,
    },
  },
  {
    name: 'NΟΜΟΣ ΠΕΛΛΑΣ',
    coord: {
      lat: 0.95781000775332,
      lng: 22.06887664752494,
    },
  },
  {
    name: 'NΟΜΟΣ ΠΙΕΡΙΑΣ',
    coord: {
      lat: 40.26810622223032,
      lng: 22.465050797032156,
    },
  },
  {
    name: 'NΟΜΟΣ ΡΕΘΥΜΝΟΥ',
    coord: {
      lat: 35.36472278802503,
      lng: 24.490737105408158,
    },
  },
  {
    name: 'NΟΜΟΣ ΡΟΔΟΠΗΣ',
    coord: {
      lat: 41.1667585328777,
      lng: 25.400902899744892,
    },
  },
  {
    name: 'NΟΜΟΣ ΤΡΙΚΑΛΩΝ',
    coord: {
      lat: 39.55111476347776,
      lng: 21.76516231397934,
    },
  },
  {
    name: 'NΟΜΟΣ ΦΘΙΩΤΙΔΟΣ',
    coord: {
      lat: 38.88380118387963,
      lng: 22.42350037021561,
    },
  },
  {
    name: 'NΟΜΟΣ ΦΛΩΡΙΝΑΣ',
    coord: {
      lat: 40.783240047264336,
      lng: 21.41059684211864,
    },
  },
  {
    name: 'NΟΜΟΣ ΧΑΛΚΙΔΙΚΗΣ',
    coord: {
      lat: 40.26846619165557,
      lng: 23.631356857571728,
    },
  },
  {
    name: 'NΟΜΟΣ ΧΑΝΙΩΝ',
    coord: {
      lat: 35.511897728151254,
      lng: 24.017787596392854,
    },
  },
];

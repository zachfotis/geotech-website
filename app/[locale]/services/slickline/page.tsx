import backgroundImage from '@/assets/images/hero2.jpg';
import Hero from '@/components/common/Hero';
import HeroImage from '@/components/common/HeroImage';
import Section from '@/components/common/Section';
import SectionFullDark from '@/components/common/SectionFullDark';
import { TiTick } from 'react-icons/ti';

function page() {
  return (
    <>
      <Hero
        footage={<HeroImage backgroundImage={backgroundImage} lowContrast />}
        title={data.hero.title}
        text={data.hero.text}
      />

      <Section title={data.applicationsSection.title} text={data.applicationsSection.text}>
        <ul className="text-text w-full space-y-3">
          {data.applicationsList.map((item, index) => (
            <li key={index} className="flex justify-start items-center gap-2 group">
              <TiTick className="text-primary text-h4 group-hover:scale-110 transform transition-all" />
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <SectionFullDark>
        <h1 className="text-h3 text-center">{data.sectionFullDark.title}</h1>
      </SectionFullDark>

      <Section title={data.mechanicalSection.title} text={data.mechanicalSection.text} withLine={false}>
        <ul className="text-text w-full space-y-3">
          {data.mechanicalSection.list.map((item, index) => (
            <li key={index} className="flex justify-start items-center gap-2 group">
              <TiTick className="text-primary text-h4 group-hover:scale-110 transform transition-all" />
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section title={data.remedialSection.title} text={data.remedialSection.text} withLine={false}>
        <ul className="text-text w-full space-y-3">
          {data.remedialSection.list.map((item, index) => (
            <li key={index} className="flex justify-start items-center gap-2 group">
              <TiTick className="text-primary text-h4 group-hover:scale-110 transform transition-all" />
              {item}
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}

export default page;

const data = {
  hero: {
    title: 'Slickline Services',
    text: 'We provide a wide range of slickline services to the oil and gas industry.',
  },
  applicationsSection: {
    title: 'Slickline Applications',
    text: 'Slickline services in the oil and gas industry refer to the specialized operations and interventions performed using slickline equipment. Slickline services are conducted to maintain, assess, and optimize the performance of oil and gas wells. These services involve the use of a long, flexible wireline, known as slickline, which is deployed downhole to perform various tasks.',
  },
  applicationsList: [
    'Depth Determination',
    'BHP/BHT Record',
    'Bailing',
    'Pulling & Setting subsurface Safety Devices',
    'Gas Lift Operations',
    'Tubing leak test',
    'Tubing Gauge Calibration',
    'Fishing Operation',
    'Memory Cased Hole Services',
    'Well bore inspection',
    'Open & Close Sliding Sleeves',
  ],
  sectionFullDark: {
    title:
      'GEOTECH S.A. is committed to ensure, with speed and flexibility, high quality expertise and integrated services with solutions to complex technical problems and delivering accurate results.',
  },
  mechanicalSection: {
    title: 'Mechanical Actions',
    text: 'Slickline is utilized for mechanical operations such as setting or retrieving plugs, shifting sliding sleeves, installing or removing valves, and manipulating downhole safety devices. These interventions are crucial for well maintenance, stimulation, and remediation. It also includes:',
    list: ['Setting of Bridge plugs', 'Frac plugs', 'All type of Packers', 'Pack-off / Straddle systems'],
  },
  remedialSection: {
    title: 'Remedial Actions',
    text: 'Slickline can be used for remedial operations, including fishing operations to retrieve stuck tools or equipment, perforating additional zones, and deploying chemical treatments or explosives to enhance well productivity or address wellbore challenges. It also includes:',
    list: [
      'Gauge cutting (wax & scale removal)',
      'Fishing equipment',
      'Dump bailers',
      'Junk baskets',
      'Cement retainers',
    ],
  },
};

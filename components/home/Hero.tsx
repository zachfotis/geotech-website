import ServiceCard from './ServiceCard';
import GeothermalIcon from '../../assets/icons/volcano.png';
import OilAndGasIcon from '../../assets/icons/oil-rig.png';
import GroundwaterIcon from '../../assets/icons/water-well.png';
import Link from 'next/link';
import BackgroundImage from '../BackgroundImage';
import HeroImage from '../../assets/images/hero.jpg';

function Hero() {
  return (
    <div className="relative flex-shrink-0 w-full min-h-full overflow-x-hidden px-5 pb-5">
      <div className="w-full max-w-[1280px] mx-auto flex flex-col justify-start items-start gap-5">
        <h1 className="text-4xl font-[700] leading-normal">
          <span className="text-3xl font-[500]">Welcome to</span> <br /> Geotech Energy Services
        </h1>
        <p className="text-xl ml-1 max-w-[800px]">
          Geotech S.A. is the 1st and only service company in Greece to provide Wireline Logging Services for Oil & Gas,
          Groundwater and Geothermal wells.
        </p>
        <Link
          href="services"
          className="mt-5 px-5 py-2 bg-primary text-white rounded-lg shadow-md font-[600] text-lg hover:scale-105
          transition-all duration-300 ease-in-out"
        >
          Explore Services
        </Link>
        <div className="relative w-full mt-20 flex justify-start items-stretch gap-10 laptop:overflow-scroll snap-x tablet:mt-10">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              text={service.text}
              icon={service.icon}
              link={service.link}
            />
          ))}
        </div>
      </div>
      <BackgroundImage image={HeroImage} />
    </div>
  );
}

export default Hero;

const services = [
  {
    title: 'Geothermal Energy',
    text: 'We execute geothermal development programs, from characterization and drilling to stimulation and production.',
    icon: GeothermalIcon,
    link: '/geothermal',
  },
  {
    title: 'Oil and Gas Wells',
    text: 'We provide wireline logging services for oil and gas wells, from exploration to production.',
    icon: OilAndGasIcon,
    link: '/oil-and-gas',
  },
  {
    title: 'Groundwater',
    text: 'We provide wireline logging services for groundwater wells, from exploration to production.',
    icon: GroundwaterIcon,
    link: '/groundwater',
  },
];

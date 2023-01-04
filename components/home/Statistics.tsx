'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import ExperienceIcon from '../../assets/icons/experience.png';
import LoggingIcon from '../../assets/icons/measuring.png';
import ProjectsIcon from '../../assets/icons/project.png';
import SurveyIcon from '../../assets/icons/depth.png';

function Statistics() {
  return (
    <div className="w-full max-w-[1280px] mx-auto flex justify-between items-stretch flex-wrap gap-20 mt-5 px-5">
      {statistics.map((statistic) => (
        <motion.div
          key={statistic.text}
          className="relative flex flex-col justify-center items-center gap-3 shadow-lg rounded-xl px-5 py-10 w-[250px] bg-ghost-100 overflow-hidden
            before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-[3px] before:bg-primary before:z-[-1] before:rounded-xl
          "
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        >
          {statistic.icon}
          <h1 className="text-6xl font-[600]">{statistic.number}</h1>
          <p className="text-lg text-[500]">{statistic.text}</p>
        </motion.div>
      ))}
    </div>
  );
}

export default Statistics;

const iconClasses = 'w-[25px] h-auto object-cover absolute top-3 right-3';

const statistics = [
  {
    icon: <Image src={ExperienceIcon} width={50} height={50} alt="icon" className={iconClasses} />,
    number: new Date().getFullYear() - 1993,
    text: 'Years of Experience',
  },
  {
    icon: <Image src={LoggingIcon} width={50} height={50} alt="icon" className={iconClasses} />,
    number: 1024,
    text: 'km of Logging',
  },
  {
    icon: <Image src={ProjectsIcon} width={50} height={50} alt="icon" className={iconClasses} />,
    number: 80,
    text: 'Projects',
  },
  {
    icon: <Image src={SurveyIcon} width={50} height={50} alt="icon" className={iconClasses} />,
    number: 1253,
    text: 'km of Surveys',
  },
];

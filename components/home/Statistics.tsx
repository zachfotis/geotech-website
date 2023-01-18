'use client';

import { motion } from 'framer-motion';
import Card from '../Card';

import ExperienceImage from '../../assets/images/experience.jpg';
import LoggingImage from '../../assets/images/logging.jpg';
import ProjectsImage from '../../assets/images/projects.webp';

function Statistics() {
  return (
    <motion.div
      className="w-full max-w-[1280px] mx-auto mt-10 flex flex-col justify-start items-start gap-14 px-5 tablet:px-5"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="relative text-3xl font-[500] leading-normal">
        What we have done!
        <span className="absolute w-[250px] mobile:w-full h-[5px] bg-primary bottom-[-10px] left-0 shadow-lg"></span>
      </h1>
      <div className="w-full h-[600px] flex justify-start items-stretch snap-x laptop:overflow-x-auto rounded-lg overflow-hidden">
        <Card
          image={ExperienceImage}
          title="30"
          text="Years of Experience"
          titleClass="text-[96px] font-[500]"
          subTitleClass="text-[36px] font-[300]"
          isRounded={false}
        />
        <Card
          image={LoggingImage}
          title="543"
          text="Km of Logging"
          titleClass="text-[96px] font-[500]"
          subTitleClass="text-[36px] font-[300]"
          isRounded={false}
        />
        <Card
          image={ProjectsImage}
          title="320"
          text="Projects Completed"
          titleClass="text-[96px] font-[500]"
          subTitleClass="text-[36px] font-[300]"
          isRounded={false}
        />
      </div>
    </motion.div>
  );
}

export default Statistics;

const iconClasses = 'w-[25px] h-auto object-cover absolute top-3 right-3';

const statistics = [
  {
    number: new Date().getFullYear() - 1993,
    text: 'Years of Experience',
  },
  {
    number: 543,
    text: 'km of Logging',
  },
  {
    number: 80,
    text: 'Projects',
  },
];

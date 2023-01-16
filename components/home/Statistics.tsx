'use client';

import { motion } from 'framer-motion';
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';
import Prinos from '../../assets/images/prinos.jpg';

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
      <ParallaxProvider>
        <ParallaxBanner layers={[{ image: Prinos.src, speed: -15 }]} className="w-full h-[600px] rounded-md">
          <div className="w-full h-full max-w-[1280px] mx-auto flex justify-between items-stretch flex-wrap snap-x laptop:flex-nowrap laptop:overflow-scroll">
            {statistics.map((statistic) => (
              <div
                key={statistic.text}
                className="flex-1 flex-shrink-0 flex flex-col justify-center items-center overflow-hidden snap-center snap-proximity
                      laptop:w-full laptop:min-w-full"
              >
                <div
                  className="w-full backdrop-blur-lg backdrop-brightness-110 border-y border-y-1 border-y-secondary
                      flex flex-col justify-center items-center gap-2 py-5 text-accent"
                >
                  <h1 className="text-6xl font-[600]">{statistic.number}</h1>
                  <p className="text-lg text-[500]">{statistic.text}</p>
                </div>
              </div>
            ))}
          </div>
        </ParallaxBanner>
      </ParallaxProvider>
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

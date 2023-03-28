'use client';

import { motion } from 'framer-motion';
import Balancer from 'react-wrap-balancer';

interface SectionProps {
  title: string;
  text?: string;
  children?: React.ReactNode;
}

function Section({ title, text = '', children }: SectionProps) {
  return (
    <motion.section
      className="my-[50px] w-full px-20 mobile:px-5"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-[1280px] mx-auto flex flex-col justify-start items-start gap-[10px]">
        <h1 className="w-full relative text-black text-h1 font-[500]">
          <Balancer>{title}</Balancer>
          {/* Left Green Line */}
          <span
            className="absolute -top-[5px] -left-[20px] mobile:hidden
            w-[6px] h-[40px] bg-secondary rounded-b-sm"
          />
          {/* Top Green Line */}
          <span
            className="absolute -top-[5px] -left-[20px] mobile:left-0 mobile:w-[60px]
            w-[40px] h-[6px] bg-secondary rounded-r-sm"
          />
        </h1>
        {text && <p className="w-full text-text">{text}</p>}
        <div className="w-full flex flex-col justify-start items-center gap-20 mt-10">{children}</div>
      </div>
    </motion.section>
  );
}

export default Section;

'use client';

import { motion } from 'framer-motion';

interface SectionFullDarkProps {
  children: React.ReactNode;
}

function SectionFullDark({ children }: SectionFullDarkProps) {
  return (
    <motion.section
      className="my-[50px] w-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="mx-auto bg-gradient-to-r from-black to-secondary"
        // animate gradient
        initial={{ backgroundPosition: '0% 50%', backgroundSize: '200% 200%' }}
        animate={{ backgroundPosition: '100% 100%', backgroundSize: '200% 200%' }}
        transition={{ duration: 10, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }}
      >
        <div className="max-w-[1280px] mx-auto text-justify w-full flex flex-col justify-start items-center gap-10 mobile:px-10 py-20 text-white text-[300]">
          {children}
        </div>
      </motion.div>
    </motion.section>
  );
}

export default SectionFullDark;

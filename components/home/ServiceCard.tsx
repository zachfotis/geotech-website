'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';

interface FeatureCardProps {
  title: string;
  text: string;
  icon: StaticImageData;
  link: string;
}

function FeatureCard({ title, text, icon, link }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: '1000px' }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative flex-1 flex min-w-[350px] p-7 snap-center snap-proximity bg-slate-50 bg-opacity-70 shadow-md rounded-lg overflow-hidden 
      before:absolute before:top-0 before:left-0 before:w-full before:h-[5px] before:bg-primary before:z-10 before:opacity-100
      mobile:min-w-full mobile:bg-opacity-100 mobile:border mobile:border-1 mobile:border-primary"
    >
      <Link href={link} className="flex justify-center items-center gap-10">
        <Image src={icon} alt={title} width={150} height={150} className="w-[70px]" />
        <div className="flex flex-col justify-start items-start gap-1">
          <h1 className="text-lg font-[700]">{title}</h1>
          <p className="text-sm">{text}</p>
        </div>
      </Link>
    </motion.div>
  );
}
export default FeatureCard;

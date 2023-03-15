'use client';

import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';

interface ClientLogoProps {
  src: StaticImageData;
  alt: string;
  bg?: string;
}

function ClientLogo({ src, alt, bg = '' }: ClientLogoProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      className="relative max-w-[250px] max-h-[150px] flex items-center"
    >
      <Image src={src} alt={alt} className={`h-full object-contain ${bg && bg + ' p-1 rounded-md'}`} />
    </motion.div>
  );
}

export default ClientLogo;

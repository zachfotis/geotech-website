'use client';
import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';

interface RotatingImageProps {
  src: StaticImageData;
  width?: number;
  height?: number;
  alt?: string;
  delay?: number;
}

function RotatingImage({ src, width = 80, height = 80, alt = 'Animation Image', delay = 0 }: RotatingImageProps) {
  return (
    <motion.div
      initial={{ rotate: 0, x: '-30vw', opacity: 0 }}
      whileInView={{ rotate: 360, x: 0, opacity: 1 }}
      transition={{ duration: 3, ease: 'easeInOut', delay: delay }}
    >
      <Image
        src={src}
        width={width}
        height={height}
        alt={alt}
        className="hover:scale-110 transform transition duration-500 ease-in-out"
      />
    </motion.div>
  );
}

export default RotatingImage;

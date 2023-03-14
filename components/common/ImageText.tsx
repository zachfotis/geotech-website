'use client';

import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';
import Balancer from 'react-wrap-balancer';

interface ImageTextProps {
  selectedImage: StaticImageData;
  text: string;
}

function ImageText({ selectedImage, text }: ImageTextProps) {
  return (
    <article className="w-full flex justify-center items-center gap-10 mobile:flex-col">
      <motion.div
        className="h-full"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Image src={selectedImage} alt="Text Image" width={200} height={200} className="h-full" />
      </motion.div>
      <div className="flex-1 w-full px-7 py-5 leading-loose">
        <h1 className="relative w-full text-text font-[400]">
          <RiDoubleQuotesL className="text-black text-textLG absolute -top-5 -left-6" />
          <Balancer>{text}</Balancer>
          <RiDoubleQuotesR className="text-black text-textLG absolute -bottom-5 -right-5" />
        </h1>
      </div>
    </article>
  );
}

export default ImageText;

'use client';

import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

interface ServicesCardProps {
  image: StaticImageData;
  title: string;
  text: string;
  titleClass?: string;
  subTitleClass?: string;
  isRounded?: boolean;
}

function Card({
  image,
  title,
  text,
  titleClass = 'text-4xl font-[500]',
  subTitleClass = 'text-lg font-[300] mt-10',
  isRounded = true,
}: ServicesCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: '1000px' }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
      className={`group relative w-full h-full bg-blue-50 overflow-hidden cursor-pointer snap-center snap-mandatory laptop:flex-shrink-0 ${
        isRounded && 'rounded-lg'
      }`}
    >
      {/* <motion.div className=" relative w-full h-full bg-blue-50 rounded-lg overflow-hidden cursor-pointer"> */}
      <Image
        src={image}
        alt="Geothermal"
        width={1280}
        height={600}
        className="absolute top-0 left-0 w-full h-full object-cover z-0 group-hover:scale-110 transition-all duration-300 ease-in-out"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[rgba(125,125,125,0.2)] to-[rgba(0,0,0,0.9)] z-10"></div>
      <div className="w-full absolute bottom-0 left-0 z-20 p-7 flex flex-col justify-end items-start text-white">
        <h1 className={titleClass}>{title}</h1>
        <p className={subTitleClass}>{text}</p>
      </div>
    </motion.div>
  );
}

export default Card;

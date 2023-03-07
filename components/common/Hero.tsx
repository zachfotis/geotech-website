'use client';
import Image, { StaticImageData } from 'next/image';
import Balancer from 'react-wrap-balancer';
import Button from './Button';

interface HeroProps {
  backgroundImage: StaticImageData;
  title: string;
  text: string;
  button?: HeroButton;
}

function Hero({
  backgroundImage,
  title,
  text,
  button = {
    text: 'Dummy Button',
    variant: 'underlined',
    exists: false,
    url: '/',
  },
}: HeroProps) {
  return (
    <section
      className="relative w-full min-h-screen h-fit 
      flex justify-start items-start p-20 tablet:p-10"
    >
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Image
          src={backgroundImage}
          alt="Background Image"
          width={1920}
          height={1080}
          className="w-full h-full object-cover saturate-[130%]"
        />
        {/* Top Layer - Black */}
        <div
          className="absolute top-0 left-0 w-full h-full 
          bg-[#000] opacity-30 z-10"
        ></div>
      </div>
      {/* Body */}
      <div
        className="max-w-[1440px] mx-auto my-auto w-full 
          flex flex-col justify-start items-start gap-[60px] z-10
          laptop:mt-[100px]"
      >
        {/* Title */}
        <h1
          className="relative max-w-[800px]
          text-title font-[400] leading-tight text-white
          mobile:text-h1"
        >
          <Balancer>{title}</Balancer>
          {/* Left Green Line */}
          <span
            className="absolute -top-[20px] -left-[30px] 
            w-[8px] h-[150px] bg-secondary rounded-b-sm"
          />
          {/* Top Green Line */}
          <span
            className="absolute -top-[20px] -left-[30px] 
            w-[300px] h-[8px] bg-secondary rounded-r-sm
            mobile:w-[200px]"
          />
        </h1>
        {/* Text */}
        <p className="w-[80%] text-h3 text-white font-[300] mobile:text-h4">
          <Balancer>{text}</Balancer>
        </p>
        {/* Button - Optional */}
        {button.exists && <Button text={button.text} variant={button.variant} url={button.url} />}
      </div>
    </section>
  );
}

export default Hero;

'use client';

import Image, { StaticImageData } from 'next/image';
import Balancer from 'react-wrap-balancer';
import Button from './Button';

interface CardExploreDarkProps {
  image: StaticImageData;
  text: {
    title: string;
    content: string;
    url: string;
  };
}
function CardExploreDark({ image, text }: CardExploreDarkProps) {
  return (
    <article
      className="relative flex-1 w-full rounded-md shadow-lg overflow-hidden
      min-w-[400px] h-[350px] mobile:min-w-full
      hover:shadow-2xl hover:scale-105 transition-all duration-300"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-l from-transparent to-[#000] opacity-90" />
      <div className="absolute w-full h-full top-0 left-0 p-10 text-white flex flex-col justify-center items-start gap-5">
        <h3 className="text-h3 font-[500] leading-tight w-full max-w-[600px]">
          <Balancer className="w-full">{text.title}</Balancer>
        </h3>
        <p className="text-text font-[300] w-full">
          <Balancer className="w-full">{text.content}</Balancer>
        </p>
        <div className="mt-10">
          <Button text={'Learn More'} url={text.url} variant={'underlined'} />
        </div>
      </div>
      <Image src={image} alt="Stat Image" className="h-full w-full object-cover" />
    </article>
  );
}

export default CardExploreDark;
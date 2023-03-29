'use client';

import Image, { StaticImageData } from 'next/image';
import Balancer from 'react-wrap-balancer';
import Button from './Button';

interface CardExploreProps {
  image: StaticImageData;
  text: {
    title: number | string;
    content: string;
    url: string;
  };
}

function CardExplore({ image, text }: CardExploreProps) {
  return (
    <article
      className="relative flex-1 w-full rounded-md shadow-lg overflow-hidden
      min-w-[400px] h-[450px] mobile:min-w-full group
      hover:shadow-2xl hover:scale-105 transition-all duration-300"
    >
      <Image
        src={image}
        alt="Explore Image"
        className="w-full h-[50%] object-cover group-hover:scale-105 transition-all duration-300"
      />
      <div className="relative bg-white w-full h-[50%] flex-1 flex flex-col justify-start items-start gap-5 p-5">
        {/* Borders */}
        <div className="w-[20px] h-[5px] absolute top-0 left-0 bg-primary" />
        <div className="w-[5px] h-[20px] absolute top-0 left-0 bg-primary" />
        <div className="w-[20px] h-[5px] absolute bottom-0 right-0 bg-primary" />
        <div className="w-[5px] h-[20px] absolute bottom-0 right-0 bg-primary" />
        {/* Body */}
        <h3 className="text-h4 leading-tight w-full max-w-[600px]">
          <Balancer className="w-full">{text.title}</Balancer>
        </h3>
        <p className="text-textSM font-[300] w-full">
          <Balancer className="w-full">{text.content}</Balancer>
        </p>
        <div className="mt-auto">
          <Button text={'Explore'} url={text.url} variant={'arrow'} size="md" />
        </div>
      </div>
    </article>
  );
}

export default CardExplore;

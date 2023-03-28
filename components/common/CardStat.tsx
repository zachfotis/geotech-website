import Image, { StaticImageData } from 'next/image';
import Balancer from 'react-wrap-balancer';

interface StatCardProps {
  image: StaticImageData;
  text: {
    value: number | string;
    label: string;
  };
  textLG?: boolean;
}

function StatCard({ image, text, textLG = false }: StatCardProps) {
  return (
    <article
      className="relative flex-1 w-full rounded-sm shadow-lg overflow-hidden
      min-w-[400px] h-[450px] mobile:min-w-full
      hover:shadow-2xl hover:scale-105 transition-all duration-300"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-90" />
      <div
        className={`absolute w-full bottom-7 left-0 px-7 text-white flex flex-col justify-start items-start ${
          textLG ? 'gap-0' : 'gap-5'
        }`}
      >
        <h3 className={`${textLG ? 'text-title' : 'text-h1'} leading-tight w-full max-w-[600px]`}>
          <Balancer className="w-full">{text.value}</Balancer>
        </h3>
        <p className={`${textLG ? 'text-h3' : 'text-text'} font-[300] w-full`}>
          <Balancer className="w-full">{text.label}</Balancer>
        </p>
      </div>
      <Image src={image} alt="Stat Image" className="h-full w-full object-cover" />
    </article>
  );
}

export default StatCard;

import Image, { StaticImageData } from 'next/image';

interface StatCardProps {
  image: StaticImageData;
  text: {
    value: number;
    label: string;
  };
}

function StatCard({ image, text }: StatCardProps) {
  return (
    <article
      className="relative flex-1 w-full rounded-lg shadow-lg overflow-hidden
      min-w-[300px] h-[400px]
      hover:shadow-2xl hover:scale-105 transition-all duration-300"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-90" />
      <div className="absolute bottom-7 left-7 text-white">
        <h3 className="text-title leading-tight">{text.value}</h3>
        <p className="text-h3">{text.label}</p>
      </div>
      <Image src={image} alt="Stat Image" className="h-full object-cover" />
    </article>
  );
}

export default StatCard;

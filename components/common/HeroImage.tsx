import Image, { StaticImageData } from 'next/image';

interface HeroImageProps {
  backgroundImage: StaticImageData;
}

function HeroImage({ backgroundImage }: HeroImageProps) {
  return (
    <Image
      src={backgroundImage}
      alt="Background Image"
      width={1920}
      height={1080}
      className="w-full h-full object-cover saturate-[130%]"
    />
  );
}

export default HeroImage;

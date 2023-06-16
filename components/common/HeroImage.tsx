import Image, { StaticImageData } from 'next/image';

interface HeroImageProps {
  backgroundImage: StaticImageData;
  lowContrast?: boolean;
}

function HeroImage({ backgroundImage, lowContrast = false }: HeroImageProps) {
  return (
    <Image
      src={backgroundImage}
      alt="Background Image"
      width={1920}
      height={1080}
      className={`w-full h-full object-cover saturate-[130%] ${lowContrast && 'contrast-50 brightness-75'}`}
    />
  );
}

export default HeroImage;

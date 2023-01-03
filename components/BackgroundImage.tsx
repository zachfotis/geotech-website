import Image, { StaticImageData } from 'next/image';

function BackgroundImage({ image }: { image: StaticImageData }) {
  return (
    <div
      className="before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:-z-10 before:h-full before:opacity-100
    before:bg-gradient-to-b before:from-slate-50 before:via-slate-50 before:to-transparent"
    >
      <Image
        src={image}
        alt="Drilling Rig"
        width={1920}
        height={1080}
        className="w-full h-full object-cover absolute top-0 left-0 -z-20 opacity-100"
      />
    </div>
  );
}

export default BackgroundImage;

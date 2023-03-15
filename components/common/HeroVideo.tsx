interface HeroVideoProps {
  src: string;
}

function HeroVideo({ src }: HeroVideoProps) {
  return (
    <video autoPlay muted loop className="w-full h-full object-cover saturate-[250%] brightness-75 ">
      <source src={src} />
    </video>
  );
}

export default HeroVideo;

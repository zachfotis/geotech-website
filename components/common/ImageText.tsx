import SelectedImage from '@/assets/logos/logo.png';
import Image from 'next/image';
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';
import Balancer from 'react-wrap-balancer';

function ImageText() {
  return (
    <article className="w-full flex justify-center items-center gap-10 mobile:flex-col">
      <Image src={SelectedImage} alt="Text Image" width={200} height={200} className="h-full" />
      <div className="flex-1 w-full px-7 py-5 leading-loose">
        <h1 className="relative w-full text-text font-[400]">
          <RiDoubleQuotesL className="text-black text-textLG absolute -top-5 -left-6" />
          <Balancer>
            GEOTECH S.A. is an integrated Oil, Gas and Underground Energy Resources Services provider with Main Offices
            in Kavala, Greece. Founded in 1993, it has set the goal to be competent, competitive and productive, where
            professionalism is the key role from its 1st spark on the course. Providing Engineering Solutions and
            Services through the newest and most efficient applications and yet perceived as such, GEOTECH S.A. became a
            trusted service provider across the country. GEOTECH S.A. also extended its geographical reach across the
            Europe, Middle East and Africa. The Company has consistently delivered success and achieved its Clients'
            goals with standing quality and reputation.
          </Balancer>
          <RiDoubleQuotesR className="text-black text-textLG absolute -bottom-5 -right-5" />
        </h1>
      </div>
    </article>
  );
}

export default ImageText;

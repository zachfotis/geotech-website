import Image from 'next/image';
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';
import LogoImage from '../assets/images/logo.png';

function QuoteText({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-[1280px] relative p-10 rounded-2xl shadow-sm overflow-hidden">
      <div className="p-5">{children}</div>
      <RiDoubleQuotesL className="text-4xl text-primary absolute top-5 left-5" />
      <RiDoubleQuotesR className="text-4xl text-primary absolute bottom-5 right-5" />
      <Image
        src={LogoImage}
        alt="Quote"
        width={200}
        height={200}
        className="absolute top-[-75px] left-[-75px] -z-10 opacity-10"
      />
      <Image
        src={LogoImage}
        alt="Quote"
        width={200}
        height={200}
        className="absolute bottom-[-50px] right-0 -z-10 opacity-10"
      />
    </div>
  );
}

export default QuoteText;

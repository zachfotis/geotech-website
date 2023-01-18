import Clients from '../components/home/Clients';
import Hero from '../components/home/Hero';
import Activity from '../components/home/Activity';
import Statistics from '../components/home/Statistics';
import QuoteText from '../components/QuoteText';

function page() {
  return (
    <>
      <Hero />
      <QuoteText>
        <p className="text-base text-justify leading-8 font-[400]">
          GEOTECH S.A. is an integrated Oil, Gas and Underground Energy Resources Services provider with Main Offices in
          Kavala, Greece. Founded in 1993, it has set the goal to be competent, competitive and productive, where
          professionalism is the key role from its 1st spark on the course. Providing{' '}
          <strong>Engineering Solutions and Services</strong> through the newest and most efficient applications and yet
          perceived as such, GEOTECH S.A. became a trusted service provider across the country. GEOTECH S.A. also
          extended its geographical reach across the <strong>Europe</strong>, <strong>Middle East</strong> and{' '}
          <strong>Africa</strong>. The Company has consistently delivered success and achieved its Clients' goals with
          standing quality and reputation.
        </p>
      </QuoteText>
      <Activity />
      <Statistics />
      <Clients />
    </>
  );
}

export default page;

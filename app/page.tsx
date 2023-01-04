import Hero from '../components/home/Hero';
import LatestProjects from '../components/home/LatestProjects';
import Map from '../components/home/Map';
import Statistics from '../components/home/Statistics';

function page() {
  return (
    <>
      <Hero />
      {/* <LatestProjects /> */}
      <Map />
      <Statistics />
    </>
  );
}

export default page;

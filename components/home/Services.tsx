import Card from '../Card';

import GeothermalImage from '../../assets/images/geothermal.png';
import OilAndGasImage from '../../assets/images/oilandgas.jpg';
import GroundWaterImage from '../../assets/images/groundwater.jpg';

function Services() {
  return (
    <div className="w-full h-[600px] flex justify-start items-stretch gap-5 mt-10 pb-5 snap-x laptop:overflow-x-auto">
      <Card
        image={GeothermalImage}
        title="Geothermal Services"
        text="We execute geothermal development programs, from characterization and drilling to stimulation and production."
      />
      <Card
        image={OilAndGasImage}
        title="Oil and Gas Services"
        text="We provide wireline logging services for oil and gas wells, from exploration to production."
      />
      <Card
        image={GroundWaterImage}
        title="Ground Water Services"
        text="We provide wireline logging services for groundwater wells, from exploration to production."
      />
    </div>
  );
}

export default Services;

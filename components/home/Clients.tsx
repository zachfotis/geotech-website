import AirLiquide from '../../assets/clients/AirLiquide.svg';
import Dei from '../../assets/clients/dei.svg';
import DEYAK from '../../assets/clients/DEYAK.png';
import Eagme from '../../assets/clients/eagme.png';
import Energean from '../../assets/clients/energean.png';
import Geostand from '../../assets/clients/geostand.jpg';
import Givot from '../../assets/clients/givot.png';
import Opco from '../../assets/clients/opco.png';
import PetroChina from '../../assets/clients/PetroChina.svg';
import Sharif from '../../assets/clients/sharif.png';
import Vardax from '../../assets/clients/vardax.png';
import Zion from '../../assets/clients/zion.png';
import ClientLogo from '../common/ClientLogo';

function Clients() {
  return (
    <div className="w-full flex justify-center items-stretch flex-wrap gap-20 mobile:flex-col mobile:items-center mobile:gap-16">
      <ClientLogo src={AirLiquide} alt="AirLiquide" />
      <ClientLogo src={Energean} alt="Energean" />
      <ClientLogo src={Vardax} alt="Vardax" />
      <ClientLogo src={DEYAK} alt="DEYAK" />
      <ClientLogo src={Dei} alt="Dei" />
      <ClientLogo src={Opco} alt="Opco" />
      <ClientLogo src={PetroChina} alt="PetroChina" />
      <ClientLogo src={Sharif} alt="Sharif" />
      <ClientLogo src={Geostand} alt="Geostand" />
      <ClientLogo src={Zion} alt="Zion" />
      <ClientLogo src={Givot} alt="Givot" />
      <ClientLogo src={Eagme} alt="Eagme" bg="bg-accent" />
    </div>
  );
}

export default Clients;

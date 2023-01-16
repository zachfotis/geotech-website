'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import AirLiquide from '../../assets/clients/AirLiquide.svg';
import Dei from '../../assets/clients/dei.svg';
import Energean from '../../assets/clients/energean.png';
import Opco from '../../assets/clients/opco.png';
import PetroChina from '../../assets/clients/PetroChina.svg';
import Sharif from '../../assets/clients/sharif.png';
import Vardax from '../../assets/clients/vardax.png';
import Eagme from '../../assets/clients/eagme.png';
import Geostand from '../../assets/clients/geostand.jpg';
import DEYAK from '../../assets/clients/DEYAK.png';
import Zion from '../../assets/clients/zion.png';
import Givot from '../../assets/clients/givot.png';

function Clients() {
  return (
    <motion.div
      className="w-full max-w-[1280px] mx-auto mt-10 flex flex-col justify-start items-start gap-14 px-5 tablet:px-5"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="relative text-3xl font-[500] leading-normal">
        Our Clients
        <span className="absolute w-[250px] mobile:w-full h-[5px] bg-primary bottom-[-10px] left-0 shadow-lg"></span>
      </h1>

      <div className="w-full flex justify-center items-center flex-wrap gap-10 mobile:flex-col mobile:gap-16">
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
          <Image src={AirLiquide} alt="air-liquide" className="w-[250px] object-cover px-10 py-2 mt-5" />
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
          <Image src={Energean} alt="Energean" className="w-[250px] object-cover px-10 py-2 " />
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
          <Image src={Vardax} alt="Vardax" className="w-[250px] object-cover px-10 py-2" />
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
          <Image src={DEYAK} alt="DEYAK" className="w-[250px] object-cover px-10 py-2" />
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
          <Image src={Dei} alt="Dei" className="w-[160px] object-cover px-10 py-2" />
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
          <Image src={Opco} alt="Opco" className="w-[155px] object-cover px-10 py-2" />
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
          <Image src={PetroChina} alt="PetroChina" className="w-[200px] object-cover" />
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
          <Image src={Sharif} alt="Sharif" className="w-[200px] object-cover px-10 py-2" />
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
          <Image src={Geostand} alt="Geostand" className="w-[150px] object-cover px-10 py-2" />
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
          <Image src={Zion} alt="Zion" className="w-[250px] object-cover px-10 py-2" />
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
          <Image src={Givot} alt="Givot" className="w-[250px] object-cover px-10 py-2 bg-accent rounded-lg" />
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
          <Image src={Eagme} alt="Eagme" className="w-[250px] object-cover px-10 py-2 bg-accent  rounded-lg" />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Clients;

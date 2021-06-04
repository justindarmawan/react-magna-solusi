import { useState } from 'react';
import CareerSection from '../components/CareerSection';
import ClientSection from '../components/ClientSection';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import Navbar from '../components/Navbar';
import ServiceSection from '../components/ServiceSection';
import Sidebar from '../components/Sidebar';
// import InfoItems from '../constants/InfoItems';
import { AboutData, ClientData, ServiceData } from '../constants/InfoItems';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      {/* {InfoItems.map((item) => (
        <InfoSection {...item} />
      ))} */}
      <InfoSection {...AboutData} />
      {/* <InfoSection {...ServiceData} /> */}
      <ServiceSection {...ServiceData} />
      {/* <Services /> */}
      <ClientSection {...ClientData} />
      <CareerSection />
    </>
  );
};

export default Home;

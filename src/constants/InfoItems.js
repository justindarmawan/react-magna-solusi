import ImageSlider from '../components/ClientSection/ImageSlider';
import Image from '../components/InfoSection/Image';
import Services from '../components/InfoSection/Services';
import About from '../images/about.svg';
import { ClientItems } from './ClientItems';

export const AboutData = {
  id: 'about',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'About',
  headline:
    'We are focusing in providing custom application development and IT consultancy	services.',
  description: `Since our establishment in 2003, our capacity and knowledge base have been expanded. Along with our commitment to consistently enhancing our consulting team competencies to meet the latest IT standard. As we steadily perceive the global needs for IT Solution.
	We firmly positioned our self as the client partner for IT solution as we always presume their problems as ours and their needs as our challenge. We apprehend the real value of partnership and quality services as our goal.
	Today we manage to serve numbers of renowned global corporation while we also continuously deliver solution to serve others.`,
  buttonLabel: 'Get started!',
  imgStart: 'false',
  decoration: <Image img={About} alt={'About'}></Image>,
  // img: About,
  // alt: 'About',
  dark: true,
  primary: false,
  darkText: false,
};

export const ServiceData = {
  id: 'services',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Services',
  description: `Magna Solusi′s knowledge-base and resources possessed a wide range of capacity in providing solution and services.
	Further equipped with our tested methodology, we are confidence to deliver quality on the following solution and services.`,
  buttonLabel: 'Get started!',
  imgStart: 'false',
  decoration: <Services />,
  // img: About,
  // alt: 'About',
  dark: true,
  primary: true,
  darkText: true,
};

export const ClientData = {
  id: 'clients',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Client',
  headline:
    'We are focusing in providing custom application development and IT consultancy	services.',
  description: `Meet Our Clients!`,
  buttonLabel: 'Get started!',
  imgStart: 'false',
  decoration: <ImageSlider slides={ClientItems} />,
  // img: About,
  // alt: 'About',
  dark: true,
  primary: false,
  darkText: false,
};

const InfoItems = [
  {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'About',
    headline:
      'We are focusing in providing custom application development and IT consultancy	services.',
    description: `Since our establishment in 2003, our capacity and knowledge base have been expanded. Along with our commitment to consistently enhancing our consulting team competencies to meet the latest IT standard. As we steadily perceive the global needs for IT Solution.
		We firmly positioned our self as the client partner for IT solution as we always presume their problems as ours and their needs as our challenge. We apprehend the real value of partnership and quality services as our goal.
		Today we manage to serve numbers of renowned global corporation while we also continuously deliver solution to serve others.`,
    buttonLabel: 'Get started!',
    imgStart: 'false',
    decoration: <Image img={About} alt={'About'}></Image>,
    // img: About,
    // alt: 'About',
    dark: true,
    primary: false,
    darkText: false,
  },
  {
    id: 'services',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Services',
    headline: `Magna Solusi′s knowledge-base and resources possessed a wide range of capacity in providing solution and services.
			Further equipped with our tested methodology, we are confidence to deliver quality on the following solution and services.`,
    description: ``,
    buttonLabel: 'Get started!',
    imgStart: 'false',
    decoration: <Services />,
    // img: About,
    // alt: 'About',
    dark: true,
    primary: true,
    darkText: true,
  },
  // {
  //   id: 'clients',
  //   lightBg: false,
  //   lightText: true,
  //   lightTextDesc: true,
  //   topLine: 'Clients',
  //   headline:
  //     'We are focusing in providing custom application development and IT consultancy	services.',
  //   description: `Since our establishment in 2003, our capacity and knowledge base have been expanded. Along with our commitment to consistently enhancing our consulting team competencies to meet the latest IT standard. As we steadily perceive the global needs for IT Solution.
  // 	We firmly positioned our self as the client partner for IT solution as we always presume their problems as ours and their needs as our challenge. We apprehend the real value of partnership and quality services as our goal.
  // 	Today we manage to serve numbers of renowned global corporation while we also continuously deliver solution to serve others.`,
  //   buttonLabel: 'Get started!',
  //   imgStart: 'false',
  //   img: About,
  //   alt: 'About',
  //   dark: true,
  //   primary: false,
  //   darkText: false,
  // },
];

export default InfoItems;

// const InfoItems = [
//   {
//     id: 'about',
//     lightBg: false,
//     lightText: true,
//     lightTextDesc: true,
//     topLine: 'About',
//     headline:
//       'We are focusing in providing custom application development and IT consultancy	services.',
//     description: `Since our establishment in 2003, our capacity and knowledge base have been expanded. Along with our commitment to consistently enhancing our consulting team competencies to meet the latest IT standard. As we steadily perceive the global needs for IT Solution.
// 		We firmly positioned our self as the client partner for IT solution as we always presume their problems as ours and their needs as our challenge. We apprehend the real value of partnership and quality services as our goal.
// 		Today we manage to serve numbers of renowned global corporation while we also continuously deliver solution to serve others.`,
//     buttonLabel: 'Get started!',
//     imgStart: 'false',
//     img: About,
//     alt: 'About',
//     dark: true,
//     primary: false,
//     darkText: false,
//   },
//   {
//     id: 'services',
//     lightBg: true,
//     lightText: false,
//     lightTextDesc: false,
//     topLine: 'Services',
//     headline:
//       'We are focusing in providing custom application development and IT consultancy	services.',
//     description: `Since our establishment in 2003, our capacity and knowledge base have been expanded. Along with our commitment to consistently enhancing our consulting team competencies to meet the latest IT standard. As we steadily perceive the global needs for IT Solution.
// 		We firmly positioned our self as the client partner for IT solution as we always presume their problems as ours and their needs as our challenge. We apprehend the real value of partnership and quality services as our goal.
// 		Today we manage to serve numbers of renowned global corporation while we also continuously deliver solution to serve others.`,
//     buttonLabel: 'Get started!',
//     imgStart: 'false',
//     img: About,
//     alt: 'About',
//     dark: true,
//     primary: true,
//     darkText: true,
//   },
//   {
//     id: 'clients',
//     lightBg: false,
//     lightText: true,
//     lightTextDesc: true,
//     topLine: 'Clients',
//     headline:
//       'We are focusing in providing custom application development and IT consultancy	services.',
//     description: `Since our establishment in 2003, our capacity and knowledge base have been expanded. Along with our commitment to consistently enhancing our consulting team competencies to meet the latest IT standard. As we steadily perceive the global needs for IT Solution.
// 		We firmly positioned our self as the client partner for IT solution as we always presume their problems as ours and their needs as our challenge. We apprehend the real value of partnership and quality services as our goal.
// 		Today we manage to serve numbers of renowned global corporation while we also continuously deliver solution to serve others.`,
//     buttonLabel: 'Get started!',
//     imgStart: 'false',
//     img: About,
//     alt: 'About',
//     dark: true,
//     primary: false,
//     darkText: false,
//   },
// ];

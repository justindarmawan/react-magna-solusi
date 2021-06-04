import Picture from '../../images/banner1.png';
import {
  Background,
  HeroBg,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
} from './HeroElements';

const HeroSection = () => {
  return (
    <HeroContainer id="home">
      <HeroBg>
        <Background src={Picture} />
      </HeroBg>
      <HeroContent>
        <HeroH1>Magna Solusi Indonesia</HeroH1>
        <HeroP>Bring IT to Reality</HeroP>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;

import { Button } from '../ButtonElements';
import {
  BtnWrap,
  Column1,
  Column2,
  Heading,
  InfoContainer,
  InfoRow,
  InfoWrapper,
  Subtitle,
  TextWrapper,
  TopLine,
  Wrap,
} from './InfoElements';

const InfoSection = (props) => {
  return (
    <>
      <InfoContainer lightBg={props.lightBg} id={props.id}>
        <InfoWrapper clickState={props.clickState}>
          <TopLine lightText={props.lightText}>{props.topLine}</TopLine>
          <InfoRow imgStart={props.imgStart}>
            <Column1>
              <TextWrapper>
                <Subtitle darkText={props.darkText}>
                  {props.description}
                </Subtitle>
                <BtnWrap>
                  <Button
                    to={props.id}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-120}
                    primary={props.primary ? 1 : 0}
                    dark={props.dark ? 1 : 0}
                    dark2={props.dark2 ? 1 : 0}
                  >
                    {props.buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <Heading lightText={props.lightText}>{props.headline}</Heading>
              <Wrap>{props.decoration}</Wrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;

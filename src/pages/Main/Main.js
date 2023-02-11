import Timeline from '../components/Timeline/Timeline';
import {
  About,
  Description,
  Divider,
  SectionTitle,
  Splash,
  Subtitle,
  SubtitleWrap,
  Title,
  TitleWrap,
  Wrapper,
} from './Main.css';

const Main = () => {
  return (
    <Wrapper>
      <Splash>
        <TitleWrap>
          <Title>Katarzyna Mysza</Title>
          <Subtitle>front-end developer</Subtitle>
        </TitleWrap>
        <Description>websites || web applications</Description>
      </Splash>
      <Divider />
      <About>
        <SubtitleWrap>
          <SectionTitle>The road so far_</SectionTitle>
        </SubtitleWrap>
        <Timeline />
      </About>
    </Wrapper>
  );
};

export default Main;

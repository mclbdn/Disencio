import styled from "styled-components";
import Company from "../components/Company";
import Faq from "../components/Faq";
import FirstAnimatedText from "../components/FirstAnimatedText";
import Hero from "../components/Hero";
import SecondAnimatedText from "../components/SecondAnimatedText";
import Services from "../components/Services";
import ThirdAnimatedText from "../components/ThirdAnimatedText";

const Div = styled.div`
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(0, 0, 252, 0.2) 100%
  );
`;

export default function Home() {
  return (
    <Div>
      <Hero />
      <FirstAnimatedText />
      <Services />
      <SecondAnimatedText />
      <Company />
      <ThirdAnimatedText />
      <Faq />
    </Div>
  );
}

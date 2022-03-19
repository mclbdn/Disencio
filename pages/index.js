import styled from "styled-components";
import FirstAnimatedText from "../components/FirstAnimatedText";
import Hero from "../components/Hero";

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
    </Div>
  );
}

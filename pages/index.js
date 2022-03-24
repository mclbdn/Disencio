import styled from "styled-components";
import Company from "../components/Company";
import Contact from "../components/Contact";
import Faq from "../components/Faq";
import FirstAnimatedText from "../components/FirstAnimatedText";
import FourthAnimatedText from "../components/FourthAnimatedText";
import Hero from "../components/Hero";
import SecondAnimatedText from "../components/SecondAnimatedText";
import Services from "../components/Services";
import ThirdAnimatedText from "../components/ThirdAnimatedText";
import { Helmet } from "react-helmet";
import FifthAnimatedText from "../components/FifthAnimatedText";

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
      <Helmet>
        <title>Diseñcio. | Diseño y Páginas Web Guadalajara</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&family=Roboto+Slab:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Hero />
      <FirstAnimatedText />
      <Services />
      <SecondAnimatedText />
      <Company />
      <ThirdAnimatedText />
      <Faq />
      <FourthAnimatedText />
      <Contact />
      <FifthAnimatedText />
    </Div>
  );
}

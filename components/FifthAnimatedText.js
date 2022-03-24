import styled, { keyframes } from "styled-components";
import { useRef, useEffect, useState } from "react";


const Section = styled.section`
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const MoveRightToLeft = keyframes`
  0%{
    transform: translateX(150%)
  }
  100%{
    transform: translateX(-150%)
  }
`;

const AnimatedTextWrapper = styled.div`
  position: absolute;
  top: 45%;
  width: 500px;
  height: fit-content;
  transform: translateX(100%);
  animation: ${MoveRightToLeft} 7s linear infinite;

  @media (min-width: 744px) {
    width: 900px;
    animation: ${MoveRightToLeft} 10s linear infinite;
  }

  @media (min-width: 1440px) {
    width: 1111px;
    animation: ${MoveRightToLeft} 12s linear infinite;
  }
`;

const AnimatedText = styled.h4`
  font-family: "Roboto Slab", serif;
  font-size: 25px;
  font-weight: 600;
  background-color: var(--purple-color);
  background-image: linear-gradient(88.78deg, #9300bf 2.08%, #0dfffc 99.2%);
  background-size: 100%;
  background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;

  @media (min-width: 744px) {
    font-size: 45px;
  }

  @media (min-width: 1440px) {
    font-size: 55px;
  }
`;

const FifthAnimatedText = () => {
  const myRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0,
      rootMargin: "-40px",
    };
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(myRef.current);
      }
    }, observerOptions);
    observer.observe(myRef.current);

    return () => observer.unobserve(myRef.current);
  }, []);

  return (
    <Section
      ref={myRef}
      style={{ opacity: isVisible ? 1 : 0, transition: "opacity 2s" }}
    >
      <AnimatedTextWrapper>
        <AnimatedText>Vuelvete irreemplazable para tus clientes.</AnimatedText>
      </AnimatedTextWrapper>
    </Section>
  );
};

export default FifthAnimatedText;

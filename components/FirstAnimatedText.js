import styled, { keyframes } from "styled-components";
import { useRef, useEffect, useState } from "react";

const Section = styled.section`
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const MoveRightToLeft = keyframes`
  0%{
    transform: translateX(100%)
  }
  100%{
    transform: translateX(-100%)
  }
`;

const AnimatedTextWrapper = styled.div`
  position: absolute;
  top: 50%;
  width: 800px;
  height: 100%;
  transform: translateX(100%);
  animation: ${MoveRightToLeft} 10s linear infinite;
`;

const AnimatedText = styled.h4`
  font-family: "Roboto Slab", serif;
  font-size: 25px;
  font-weight: 600;
  background-color: var(--pink-color);
  background-image: linear-gradient(91.05deg, #fc0085 22.62%, #0dfffc 65.23%);
  background-size: 100%;
  background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
`;

const FirstAnimatedText = () => {
  const myRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0,
      rootMargin: "-10px",
    };
    const observer = new IntersectionObserver((entries) => {
        console.log("Hero");
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
    <Section ref={myRef} style={{opacity: isVisible ? 1 : 0, transition: "opacity 2s"}}>
      <AnimatedTextWrapper>
        <AnimatedText>
          Sabemos que tan difícil es ganar en un mercado abarrotado.
        </AnimatedText>
      </AnimatedTextWrapper>
    </Section>
  );
};

export default FirstAnimatedText;

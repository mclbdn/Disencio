import styled, { keyframes } from "styled-components";
import { useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

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
  top: 45%;
  width: 800px;
  height: fit-content;
  transform: translateX(100%);
  animation: ${MoveRightToLeft} 10s linear infinite;

  @media (min-width: 744px) {
    width: 1300px;
  }

  @media (min-width: 1440px) {
    width: 1700px;
  }
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

  @media (min-width: 744px) {
    font-size: 45px;
  }

  @media (min-width: 1440px) {
    font-size: 55px;
  }
`;

const NuestrosServiciosParagraph = styled.p`
  font-size: 16px;
  font-weight: 300;
  position: absolute;
  top: 49%;
  width: 100%;
  text-align: center;
  color: var(--off-white-color);
  opacity: 0.6;

  @media (min-width: 744px) {
    font-size: 20px;
    top: 54%;
  }

  @media (min-width: 1440px) {
    font-size: 25px;
    top: 53%;
  }
`;

const FirstAnimatedText = () => {
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
        <AnimatedText>
          Sabemos que tan difícil es ganar en un mercado abarrotado.
        </AnimatedText>
      </AnimatedTextWrapper>
      <Link href="/" passHref>
        <a>
          <NuestrosServiciosParagraph>
            nuestros servicios
            <FontAwesomeIcon
              style={{ marginLeft: "6px" }}
              icon={faChevronDown}
            />
          </NuestrosServiciosParagraph>
        </a>
      </Link>
    </Section>
  );
};

export default FirstAnimatedText;

import styled from "styled-components";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";

const Section = styled.section`
  height: 100vh;
  position: relative;
`;

const H2 = styled.h2`
  font-family: "Roboto Slab", serif;
  font-weight: 600;
  font-size: 25px;
  text-align: center;
  margin-bottom: 40px;
`;

const H3 = styled.h3`
  font-family: "Roboto Slab", serif;
  font-weight: 600;
  font-size: 18px;
  margin-left: 20px;
  margin-bottom: 20px;
  position: relative;

  &:after {
    bottom: -10px;
    left: 0px;
    position: absolute;
    content: "";
    width: 50%;
    border-bottom: 1px solid;
    border-color: var(--off-white-color);
    width: 66.5px;
  }
`;

const ServiceDescription = styled.p`
  font-size: 16px;
  font-weight: 300;
  line-height: 163.20%;
  margin-left: 20px;
  margin-right: 20px;
`

const ServiceSVGWrapper = styled.div`
  position: relative;
  width: 100px;
  height: 88.96px;
  margin: 20px auto 40px;
`

const Services = () => {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0,
      rootMargin: "-10px",
    };
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(ref.current);
      }
    }, observerOptions);

    observer.observe(ref.current);

    return () => observer.unobserve(ref.current);
  }, []);

  return (
    <Section
      ref={ref}
      style={{ opacity: isVisible ? 1 : 0, transition: "opacity 2s" }}
    >
      <H2>Nuestros servicios incluyen</H2>
      <H3>Diseño Web</H3>
      <ServiceDescription>
        Crear diseños personalizados, estéticos y visualmente agradables es
        nuestra prioridad número uno. Creemos que cada marca tiene su propia
        identidad y hacemos todo lo posible para reflejarla en cada píxel.
      </ServiceDescription>
      <ServiceSVGWrapper>
        <Image layout="fill" src="/images/paintbrush.svg" alt="Image de pincel." objectFit="contain" draggable="false" />
      </ServiceSVGWrapper>
    </Section>
  );
};

export default Services;

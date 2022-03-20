import styled from "styled-components";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";

const Section = styled.section`
  // height: 100vh;
  position: relative;
`;

const H2 = styled.h2`
  font-family: "Roboto Slab", serif;
  font-weight: 600;
  font-size: 25px;
  text-align: center;
  margin-bottom: 40px;

  @media (min-width: 744px) {
    font-size: 30px;
    margin-bottom: 60px;
  }

  @media (min-width: 1440px) {
    font-size: 35px;
    margin-bottom: 90px;
  }
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
    border-bottom: 1px solid;
    border-color: var(--off-white-color);
    width: 66.5px;

    @media (min-width: 740px) {
      bottom: -18px;
      width: 133px;
    }

    @media (min-width: 1440px) {
      bottom: -20px;
      width: 168px;
    }
  }

  @media (min-width: 740px) {
    font-size: 25px;
    margin-left: 0px;
    margin-bottom: 36px;
  }

  @media (min-width: 1440px) {
    font-size: 30px;
    margin-bottom: 40px;
  }
`;

const ServiceDescription = styled.p`
  font-size: 16px;
  font-weight: 300;
  line-height: 163.2%;
  margin-left: 20px;
  margin-right: 20px;

  @media (min-width: 740px) {
    font-size: 20px;
    margin-left: 0;
    margin-right: 0;
  }

  @media (min-width: 1440px) {
    font-size: 25px;
  }
`;

const ServiceSVGWrapper = styled.div`
  position: relative;
  width: 100px;
  height: 88.96px;
  margin: 20px auto 40px;

  @media (min-width: 740px) {
    margin: 0;
    flex: 1;
    max-width: 316px;
    width: 200px;
    height: 177px;
  }

  @media (min-width: 900px) {
    max-width: 400px;
  }

  @media (min-width: 1100px) {
    max-width: 500px;
  }

  @media (min-width: 1200px) {
    max-width: 550px;
  }

  @media (min-width: 1300px) {
    max-width: 600px;
  }

  @media (min-width: 1440px) {
    width: 250px;
    height: 222px;
    max-width: 565px;
  }
`;

const SingleServiceWrapper = styled.div`
  @media (min-width: 740px) {
    display: flex;
    flex-direction: ${(props) => props.direction};
    margin: 0 40px 60px;
    align-items: center;
    justify-content: space-between;
  }

  @media (min-width: 1440px) {
    margin: 0 140px 72px;
  }
`;

const H3AndDescription = styled.div`
  @media (min-width: 740px) {
    flex: 1;
    max-width: 316px;
  }

  @media (min-width: 900px) {
    max-width: 400px;
  }

  @media (min-width: 1100px) {
    max-width: 500px;
  }

  @media (min-width: 1200px) {
    max-width: 550px;
  }

  @media (min-width: 1300px) {
    max-width: 600px;
  }

  @media (min-width: 1440px) {
    max-width: 565px;
  }
`;

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
      style={{ opacity: isVisible ? 1 : 0, transition: "opacity 2.5s" }}
    >
      <H2>Nuestros servicios incluyen</H2>
      <SingleServiceWrapper direction="row">
        <H3AndDescription>
          <H3>Diseño Web</H3>
          <ServiceDescription>
            Crear diseños personalizados, estéticos y visualmente agradables es
            nuestra prioridad número uno. Creemos que cada marca tiene su propia
            identidad y hacemos todo lo posible para reflejarla en cada píxel.
          </ServiceDescription>
        </H3AndDescription>
        <ServiceSVGWrapper>
          <Image
            layout="fill"
            src="/images/paintbrush.svg"
            alt="Image de pincel."
            objectFit="contain"
            draggable="false"
          />
        </ServiceSVGWrapper>
      </SingleServiceWrapper>
      <SingleServiceWrapper direction="row-reverse">
        <H3AndDescription>
          <H3>Desarollo Web</H3>
          <ServiceDescription>
            El diseño es solo un comienzo. Estamos preparados para convertir
            nuestros diseños únicos en un sitio web funcional, intuitivo y
            ultrarápido que también está optimizado para usuarios móviles.
          </ServiceDescription>
        </H3AndDescription>
        <ServiceSVGWrapper>
          <Image
            layout="fill"
            src="/images/code-solid.svg"
            alt="Image de pincel."
            objectFit="contain"
            draggable="false"
          />
        </ServiceSVGWrapper>
      </SingleServiceWrapper>
      <SingleServiceWrapper direction="row">
        <H3AndDescription>
          <H3>Interacción</H3>
          <ServiceDescription>
            Nuestro trabajo es crear experiencias agradables para los usuarios.
            Aún así, la usabilidad simplemente no es suficiente para crear una
            experiencia memorable. Es por eso que nos enfocamos en las
            microinteracciones en todo su sitio web para mejorar la experiencia
            del cliente.
          </ServiceDescription>
        </H3AndDescription>
        <ServiceSVGWrapper>
          <Image
            layout="fill"
            src="/images/mouse.svg"
            alt="Image de pincel."
            objectFit="contain"
            draggable="false"
          />
        </ServiceSVGWrapper>
      </SingleServiceWrapper>
      <SingleServiceWrapper direction="row-reverse">
        <H3AndDescription>
          <H3>Soporte a largo plazo</H3>
          <ServiceDescription>
            Lo más importante en un negocio es la relación entre la marca y sus
            clientes. Es por eso que realmente nos preocupamos por nuestros
            clientes y les brindamos un apoyo confiable a largo plazo.
          </ServiceDescription>
        </H3AndDescription>
        <ServiceSVGWrapper>
          <Image
            layout="fill"
            src="/images/handshake-solid.svg"
            alt="Image de pincel."
            objectFit="contain"
            draggable="false"
          />
        </ServiceSVGWrapper>
      </SingleServiceWrapper>
    </Section>
  );
};

export default Services;

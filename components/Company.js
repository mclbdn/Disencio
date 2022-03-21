import styled from "styled-components";
import { useRef, useEffect, useState } from "react";

const Section = styled.section`
  position: relative;
`;

const H2 = styled.h2`
  font-family: "Roboto Slab", serif;
  font-weight: 600;
  font-size: 25px;
  text-align: center;
  margin-bottom: 40px;
  line-height: 100%;

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
  text-align: center;
  line-height: 100%;

  &:after {
    bottom: -10px;
    left: 0px;
    right: 0px;
    margin: 0 auto;
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
      margin: 0;
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
    text-align: left;
  }
`;

const ColoredSpan = styled.span`
  background-color: ${(props) => props.fallbackColor};
  background-image: ${(props) => props.backgroundImage};
  background-size: 100%;
  background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
`;

const CompanyValuesParagraph = styled.p`
  font-size: 16px;
  font-weight: 300;
  line-height: 150%;
  margin-left: 20px;
  margin-right: 20px;
  text-align: center;

  @media (min-width: 740px) {
    font-size: 20px;
    margin-left: 0;
    margin-right: 0;
  }

  @media (min-width: 1440px) {
    font-size: 25px;
    text-align: left;
  }
`;


const SingleCompanyValuesWrapper = styled.div`
  margin: 0 20px 40px;

  @media (min-width: 740px) {
    margin: 0 40px 40px;
  }

  @media (min-width: 1440px) {
    margin: 0;
    flex: 1;
    max-width: 564px;
  }
`;

const RowCompanyValuesWrapper = styled.div`

  @media (min-width: 1440px) {
    display: flex;
    margin: 0 140px 72px;
    justify-content: space-between;
  }
`

const Company = () => {
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
      <H2>Valores que defendemos</H2>
      <RowCompanyValuesWrapper>
        <SingleCompanyValuesWrapper>
          <H3>
            Estamos{" "}
            <ColoredSpan
              backgroundImage="linear-gradient(90.63deg, #009dff 43.02%, #9300bf 85.75%),
    linear-gradient(0deg, #f2f4f7, #f2f4f7)"
              fallbackColor="var(--light-blue-color)"
            >
              especializados.
            </ColoredSpan>
          </H3>
          <CompanyValuesParagraph>
            No somos generalistas, solo ofrecemos lo que mejor sabemos hacer:
            diseño UI/UX y desarrollo web. Esta es la única manera de hacer
            posibles grandes cosas.
          </CompanyValuesParagraph>
        </SingleCompanyValuesWrapper>
        <SingleCompanyValuesWrapper>
          <H3>
            Somos{" "}
            <ColoredSpan
              backgroundImage="linear-gradient(271.68deg, #FC0085 22.68%, #9300BF 50.76%), linear-gradient(0deg, #F2F4F7, #F2F4F7)"
              fallbackColor="var(--purple-color)"
            >
              rápidos.
            </ColoredSpan>
          </H3>
          <CompanyValuesParagraph>
            Limitamos el número de clientes que tomamos para asegurarnos de que
            cada uno tenga una experiencia de cliente excepcional. Espere
            respuestas en horas, no en días.
          </CompanyValuesParagraph>
        </SingleCompanyValuesWrapper>
      </RowCompanyValuesWrapper>
      <RowCompanyValuesWrapper>
        <SingleCompanyValuesWrapper>
          <H3>
            Nos enfocamos en los{" "}
            <ColoredSpan
              backgroundImage="linear-gradient(89.57deg, #0DFFFC 36.21%, #9300BF 56.26%)"
              fallbackColor="var(--turquoise-color)"
            >
              resultados.
            </ColoredSpan>
          </H3>
          <CompanyValuesParagraph>
            Nos preocupamos por el impacto que tiene nuestro trabajo en su
            negocio u organización, no por cómo se ve en nuestro portafolio o en
            una exhibición de premios.
          </CompanyValuesParagraph>
        </SingleCompanyValuesWrapper>
        <SingleCompanyValuesWrapper>
          <H3>
            Damos{" "}
            <ColoredSpan
              backgroundImage="linear-gradient(271.21deg, #009DFF 18.77%, #9300BF 56.47%), linear-gradient(0deg, #F2F4F7, #F2F4F7)"
              fallbackColor="var(--pink-color)"
            >
              un paso más.
            </ColoredSpan>
          </H3>
          <CompanyValuesParagraph>
            Consideramos nuestros compromisos como relaciones, no acuerdos con
            proveedores. Además de lo que producimos, también educamos a
            nuestros clientes sobre las mejores prácticas digitales en el
            camino.
          </CompanyValuesParagraph>
        </SingleCompanyValuesWrapper>
      </RowCompanyValuesWrapper>
    </Section>
  );
};

export default Company;

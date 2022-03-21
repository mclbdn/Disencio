import styled from "styled-components";
import { useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

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
  line-height: 100%;
  max-width: 70%;
`;

const SingleFaq = styled.div`
  display: flex;
  margin: 0 20px 30px;
  position: relative;
  justify-content: space-between;
  align-items: center;

  &:after {
    bottom: -15px;
    left: 0px;
    position: absolute;
    content: "";
    border-bottom: 1px solid;
    border-color: var(--off-white-color);
    width: 100%;
  }
`;

const Faq = () => {
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
      <H2>FAQ</H2>
      <SingleFaq>
        <H3>¿Por qué debo utilizar una empresa de diseño web?</H3>
        <FontAwesomeIcon icon={faCaretDown} />
      </SingleFaq>
      <SingleFaq>
        <H3>¿Cómo empiezo?</H3>
        <FontAwesomeIcon icon={faCaretDown} />
      </SingleFaq>
      <SingleFaq>
        <H3>¿Cuánto tiempo se tarda en construir mi sitio web?</H3>
        <FontAwesomeIcon icon={faCaretDown} />
      </SingleFaq>
      <SingleFaq>
        <H3>¿Con qué tamaño y tipo de empresas trabajan?</H3>
        <FontAwesomeIcon icon={faCaretDown} />
      </SingleFaq>
      <SingleFaq>
        <H3>
          ¿Existirá algún tipo de seguimiento despúes de tener el sitio web?
        </H3>
        <FontAwesomeIcon icon={faCaretDown} />
      </SingleFaq>
    </Section>
  );
};

export default Faq;

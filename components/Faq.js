import styled from "styled-components";
import { useRef, useEffect, useState } from "react";
import SingleFaq from "./SingleFaq";

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

const Faq = () => {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  const faqs = [
    {
      faqQuestion: "¿Por qué debo utilizar una empresa de diseño web?",
      faqAnswer:
        "Cuando estás considerando crear un sitio web para su negocio, sabemos que se te presentan muchas opciones diferentes. Hay muchas empresas de diseño web, creadores de sitios web como Wix o el amigo de la familia que es bueno con las computadoras. Para algunas personas, las dos últimas opciones pueden ser una opción, pero solo un diseñador web experimentado puede crear un producto que atraiga a los visitantes y los convierta en clientes.",
    },
    {
      faqQuestion: "¿Cómo empiezo?",
      faqAnswer:
        "Antes de firmar o comprometerse con algo, tenemos un extenso 'Cuestionario del cliente' que le pedimos que complete para que podamos aprender más sobre sus necesidades, clientes e industria. No hay absolutamente ningún compromiso de su parte al completar este cuestionario.",
    },
    {
      faqQuestion: "¿Cuánto tiempo se tarda en construir mi sitio web?",
      faqAnswer:
        "Cada proyecto es diferente, por lo que no hay un cronograma establecido. Sin embargo, tratamos de lanzar nuevos sitios entre dos y tres semanas. Le daremos un cronograma detallado antes de comenzar cualquier trabajo.",
    },
    {
      faqQuestion: "¿Con qué tamaño y tipo de empresas trabajan?",
      faqAnswer:
        "Tenemos un equilibrio uniforme de startups, pequeñas empresas y organizaciones sin fines de lucro en una multitud de industrias.",
    },
    {
      faqQuestion:
        "¿Existirá algún tipo de seguimiento despúes de tener el sitio web?",
      faqAnswer:
        "¡Absolutamente! Mantenemos tu sitio web actualizado, seguro y rápido. También ayudamos con mejoras reactivas a su sitio web, como la creación de nuevas páginas de destino o la adición de nuevas funciones.",
    },
  ];

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
      {faqs.map((faq) => {
        return (
          <SingleFaq faqQuestion={faq.faqQuestion} faqAnswer={faq.faqAnswer} />
        );
      })}
    </Section>
  );
};

export default Faq;

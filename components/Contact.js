import styled, { keyframes } from "styled-components";
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
  line-height: 100%;
`;

const Paragraph = styled.p`
  font-size: 16px;
  font-weight: 300;
  line-height: 150%;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 40px;
`;

const Animation = keyframes`
  0% {
    outline-color: var(--pink-color);
  }
  50% {
    outline-color: var(--purple-color);
  }
  100% {
    outline-color: var(--light-blue-color);
  }
`;

const Form = styled.form``;

const LabelAndInput = styled.div`
  border-bottom: 1px solid var(--off-white-color);
  padding-bottom: 10px;
  margin: 0 20px 20px;
`;

const TextArea = styled.textarea`
  color: rgba(187, 200, 212, 1);
  border: 2px solid #bbc8d4;
  border-radius: 4px;
  padding: 12px 16px;
  width: 100%;
  height: 150px;
  resize: none;

  &:focus {
    outline: 2px solid;

    outline-offset: -2px;
    animation: ${Animation} 0.5s ease-in forwards;
  }
`;

const Label = styled.label`
  border-width: 0 !important;
  clip: rect(1px, 1px, 1px, 1px) !important;
  height: 1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  white-space: nowrap !important;
  width: 1px !important;
`;

const Input = styled.input`
  color: rgba(187, 200, 212, 1);
  border: 2px solid #bbc8d4;
  border-radius: 4px;
  padding: 12px 16px;
  width: 100%;

  &:focus {
    outline: 2px solid;

    outline-offset: -2px;
    animation: ${Animation} 0.5s ease-in forwards;
  }
`;

const Contact = () => {
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
      <H2>Contacto</H2>
      <H3>¿Cómo te podemos ayudar?</H3>
      <Paragraph>
        Rellena el formulario y te contactarémos en un máximo de 24 horas.
      </Paragraph>
      <Form>
        <LabelAndInput>
          <Label htmlFor="nombre">Nombre *</Label>
          <Input
            id="nombre"
            name="nombre"
            type="text"
            placeholder="Nombre *"
            required
          ></Input>
        </LabelAndInput>
        <LabelAndInput>
          <Label htmlFor="apellido">Apellido *</Label>
          <Input
            id="apellido"
            name="apellido"
            type="text"
            placeholder="Apellido *"
            required
          ></Input>
        </LabelAndInput>
        <LabelAndInput>
          <Label htmlFor="correo">Correo electrónico *</Label>
          <Input
            id="correo"
            name="correo"
            type="email"
            placeholder="Correo electrónico *"
            required
          ></Input>
        </LabelAndInput>
        <LabelAndInput>
          <Label htmlFor="celular">Celular </Label>
          <Input
            id="celular"
            name="celular"
            type="text"
            placeholder="Celular "
          ></Input>
        </LabelAndInput>
        <LabelAndInput>
          <Label htmlFor="mensaje">¿Algo más que debamos saber?</Label>
          <TextArea
            id="mensaje"
            name="mensaje"
            placeholder="¿Algo más que debamos saber?"
          ></TextArea>
        </LabelAndInput>
      </Form>
    </Section>
  );
};

export default Contact;

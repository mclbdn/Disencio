import styled, { keyframes } from "styled-components";
import { useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPhone } from "@fortawesome/free-solid-svg-icons";

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

  @media (min-width: 740px) {
    font-size: 25px;
    margin-left: 40px;
    margin-bottom: 36px;
  }

  @media (min-width: 1440px) {
    font-size: 30px;
    margin-left: 140px;
    margin-bottom: 44px;
  }
`;

const ParagraphAndPhone = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;

  @media (min-width: 740px) {
    margin-left: 0px;
    flex: 1;
  }
`;

const Paragraph = styled.p`
  font-size: 16px;
  font-weight: 300;
  line-height: 150%;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 40px;
  height: fit-content;

  @media (min-width: 740px) {
    font-size: 20px;
    margin: 0 30px 0 0;
    flex: 1;
  }

  @media (min-width: 1440px) {
    margin: 0 228px 0 0;
    font-size: 25px;
  }
`;

const Paragraph2 = styled.p`
  font-size: 16px;
  font-weight: 300;
  line-height: 150%;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 10px;

  @media (min-width: 740px) {
    font-size: 20px;
    margin: 0 30px 0 0;
    flex: 1;
  }

  @media (min-width: 1440px) {
    font-size: 25px;
    margin: 0 228px 0 0;
  }
`;

const Paragraph3 = styled.p`
  font-size: 16px;
  font-weight: 300;
  line-height: 150%;

  @media (min-width: 740px) {
    font-size: 20px;
  }

  @media (min-width: 1440px) {
    font-size: 25px;
  }
`;

const Form = styled.form`
  @media (min-width: 740px) {
    flex: 1;
  }
`;

const LabelAndInput = styled.div`
  border-bottom: 1px solid var(--off-white-color);
  padding-bottom: 10px;
  margin: 0 20px 10px;

  @media (min-width: 740px) {
    padding-bottom: 18px;
    margin: 0 0 18px;
  }

  @media (min-width: 1440px) {
    padding-bottom: 22px;
    margin: 0 0 22px;
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

const Animation = keyframes`
  0% {
    border-color: var(--turquoise-color);
  }
  50% {
    border-color: var(--purple-color);
  }
  100% {
    border-color: var(--light-blue-color);
  }
`;

const Input = styled.input`
  font-size: 16px;
  color: rgba(187, 200, 212, 1);
  border: 2px solid #bbc8d4;
  border-radius: 4px;
  padding: 11px 16px;
  width: 100%;

  &:focus {
    outline: none;
    animation: ${Animation} 1s ease-in forwards;
  }

  @media (min-width: 744px) {
    font-size: 20px;
    padding: 15.5px 16px;
  }

  @media (min-width: 1440px) {
    font-size: 25px;
    padding: 16.75px 16px;
  }
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
    outline: none;
    animation: ${Animation} 1s ease-in forwards;
  }

  @media (min-width: 744px) {
    font-size: 20px;
  }

  @media (min-width: 1440px) {
    font-size: 25px;
  }
`;

const CTAContainer = styled.div`
  position: relative;
  margin: 0 auto 40px;
  display: flex;
  justify-content: center;

  @media (min-width: 744px) {
    width: 185px;
    height: 65px;
    margin: 0 0 40px;
    justify-content: left;
  }

  @media (min-width: 1440px) {
    width: 100%;
    margin: 0 0 90px;
  }
`;

const CTABtn = styled.button`
  width: fit-content;
  outline: none;
  padding: 0;
  border: 0;
  background: transparent;
  text-align: left;

  @media (min-width: 1440px) {
    text-align: left;
  }
`;

const AnchorSpan = styled.span`
  background-color: #000;
  color: var(--off-white-color);
  display: inline-block;
  padding: 12.5px 16px;

  border-radius: 100px;
  position: relative;
  z-index: 2;

  @media (min-width: 740px) {
    font-size: 18px;
    padding: 10.5px 16px;
  }

  @media (min-width: 1440px) {
    font-size: 22px;
    padding: 14px 21px;
  }
`;

const CTAAnchor = styled.p`
  font-size: 18px;
  line-height: 100%;
  font-weight: 700;
  cursor: pointer;
  position: relative;
  display: inline-block;
  border-radius: 100px;
  background: linear-gradient(
    83.78deg,
    #fc0085 1.04%,
    #009dff 50.07%,
    #0dfffc 92.88%
  );
  padding: 1px;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
  border: 0;
  text-transform: inherit;
  letter-spacing: 0;
  overflow: visible !important;
  text-decoration: none;

  &:before {
    content: "";
    background: linear-gradient(
      83.78deg,
      #fc0085 1.04%,
      #009dff 50.07%,
      #0dfffc 92.88%
    );
    position: absolute;
    top: 8px;
    left: 0;
    background-size: 300%;
    z-index: -1;
    -webkit-filter: blur(6px);
    filter: blur(6px);
    width: 100%;
    height: 100%;
    -webkit-animation: glowing 50s linear infinite;
    animation: glowing 50s linear infinite;
    opacity: 0;
    -webkit-transition: opacity 0.3s ease-in-out;
    transition: opacity 0.3s ease-in-out;
    transition-property: opacity;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;
    transition-delay: 0s;
    border-radius: 100px;
    display: block;
  }

  &:hover::before {
    background: linear-gradient(
      83.78deg,
      #fc0085 1.04%,
      #009dff 50.07%,
      #0dfffc 92.88%
    );
    opacity: 0.35;
  }

  @media (min-width: 740px) {
    font-size: 22px;
  }
`;

const TopDiv = styled.div`
  @media (min-width: 740px) {
    display: flex;
    margin: 0 40px;
  }

  @media (min-width: 1440px) {
    margin: 0 140px;
  }
`;
const BottomDiv = styled.div`
  @media (min-width: 740px) {
    display: flex;
    margin: 0 40px;

  @media (min-width: 1440px) {
    margin: 0 140px;
  }
`;

const Contact = () => {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [wasFormSend, setWasFormSend] = useState(false);

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

  async function handleFormSubmit(e) {
    e.preventDefault();

    const formData = new FormData();

    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("message", message);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_GETFORM_URL}`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setWasFormSend(true)
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Section
      id="contact-section"
      ref={ref}
      style={{ opacity: isVisible ? 1 : 0, transition: "opacity 2.5s" }}
    >
      <H2>Contacto</H2>

      <H3>??C??mo te podemos ayudar?</H3>
      <TopDiv>
        <Paragraph>
          Rellena el formulario y te contactar??mos en un m??ximo de 24 horas.
        </Paragraph>

        <Form
          onSubmit={handleFormSubmit}
          action="https://getform.io/f/ee567032-28c6-41ca-bfc5-65ddb8e42bbe"
          method="POST"
        >
          <LabelAndInput>
            <Label htmlFor="firstName">Nombre *</Label>
            <Input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              id="firstName"
              name="firstName"
              type="text"
              placeholder="Nombre *"
              required
            ></Input>
          </LabelAndInput>
          <LabelAndInput>
            <Label htmlFor="lastName">Apellido *</Label>
            <Input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Apellido *"
              required
            ></Input>
          </LabelAndInput>
          <LabelAndInput>
            <Label htmlFor="email">Correo electr??nico *</Label>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              name="email"
              type="email"
              placeholder="Correo electr??nico *"
              required
            ></Input>
          </LabelAndInput>
          <LabelAndInput>
            <Label htmlFor="phone">Celular </Label>
            <Input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              id="phone"
              name="phone"
              type="text"
              placeholder="Celular "
            ></Input>
          </LabelAndInput>
          <LabelAndInput>
            <Label htmlFor="message">??Algo m??s que debamos saber?</Label>
            <TextArea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              id="message"
              name="message"
              placeholder="??Algo m??s que debamos saber?"
            ></TextArea>
          </LabelAndInput>
          <CTAContainer>
            <CTABtn type="submit">
              <CTAAnchor>
                {wasFormSend ? (
                  <AnchorSpan padding="13.5px 14px"><FontAwesomeIcon icon={faCheck} /> Gracias!</AnchorSpan>
                ) : (
                  <AnchorSpan padding="13.5px 14px">Manda mensaje</AnchorSpan>
                )}
              </CTAAnchor>
            </CTABtn>
          </CTAContainer>
        </Form>
      </TopDiv>
      <BottomDiv>
        <Paragraph2>??No eres un gran fan de los formularios?</Paragraph2>
        <ParagraphAndPhone>
          <FontAwesomeIcon style={{ marginRight: "6px" }} icon={faPhone} />
          <Paragraph3>+52 33 1134 4061</Paragraph3>
        </ParagraphAndPhone>
      </BottomDiv>
    </Section>
  );
};

export default Contact;

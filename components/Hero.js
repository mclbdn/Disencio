import Image from "next/image";
import Link from "next/link";
import styled, { keyframes } from "styled-components";
import { useRef, useEffect, useState } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Section = styled.section`
  height: 100vh;
  position: relative;
`;

const Nav = styled.nav`
  padding: 30px 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 744px) {
    padding: 30px 40px 0;
  }

  @media (min-width: 1440px) {
    padding: 30px 140px 0;
  }
`;

const LogoDiv = styled.div`
  position: relative;
  width: 110px;
  height: 33px;

  @media (min-width: 744px) {
    width: 132px;
    height: 40px;
  }

  @media (min-width: 1440px) {
    width: 180px;
    height: 32px;
  }
`;

const HamburgerMenuWrapper = styled.div`
  position: relative;
  width: 21px;
  height: 14px;

  @media (min-width: 744px) {
    display: none;
  }
`;

const Checkbox = styled.input.attrs({ type: "checkbox" })`
  width: 21px;
  height: 14px;
  position: absolute;
  display: block;
  z-index: 3;
  opacity: 0;
  cursor: pointer;
`;

const HamburgerLines = styled.div`
  width: 21px;
  height: 14px;
  position: absolute;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Line1 = styled.span`
  display: block;
  height: 2px;
  width: 100%;
  background: var(--off-white-color);
  border-radius: 2px;
`;

const Line2 = styled.span`
  display: block;
  height: 2px;
  width: 100%;
  background: var(--off-white-color);
  border-radius: 2px;
`;

const Line3 = styled.span`
  display: block;
  height: 2px;
  width: 100%;
  background: var(--off-white-color);
  border-radius: 2px;
`;

const H1 = styled.h1`
  margin: 90px 60px 0px 20px;
  font-size: 25px;
  line-height: 120%;
  font-family: "Roboto Slab", serif;
  font-weight: 600;

  @media (min-width: 744px) {
    margin: 140px 132px 0px 40px;
    font-size: 45px;
  }

  @media (min-width: 1440px) {
    margin: 211px 338px 0px 140px;
    font-size: 55px;
  }
`;

const Span = styled.span`
  display: inline-block;
  background-color: var(--pink-color);
  background-image: linear-gradient(
    284.09deg,
    #fc0085 39.45%,
    #0dfffc 57.56%,
    #009dff 80.06%
  );
  background-size: 100%;
  background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
`;

const Paragraph = styled.p`
  font-size: 16px;
  line-height: 150%;
  margin: 15px 97px 30px 20px;

  @media (min-width: 744px) {
    margin: 45px 270px 45px 40px;
    font-size: 20px;
    max-width: 434px;
  }

  @media (min-width: 1440px) {
    margin: 36px 756px 38px 140px;
    font-size: 25px;
    max-width: 544px;
  }
`;

const CTAContainer = styled.div`
  position: relative;
  margin-left: 20px;

  @media (min-width: 744px) {
    width: 160px;
    height: 65.2px;
    margin-left: 40px;
  }

  @media (min-width: 1440px) {
    margin-left: 140px;
  }
`;

const MoveAnglesUpAndDown = keyframes`
  0% {
    transform: translateY(0%);
  }
  100%{
    transform: translateY(30%);
  }
`;

const AnglesDownContainerWrapper = styled.div`
  position: absolute;
  bottom: 30px;
  left: 0;
  right: 0;
  animation: ${MoveAnglesUpAndDown} 2s ease-in-out alternate infinite;
`;

const AnglesDownContainer = styled.div`
  position: relative;
  width: 30px;
  height: 40px;
  margin: 0 auto;

  @media (min-width: 744px) {
    height 66.67px;
    width: 50px;
  }
`;

const UL = styled.ul`
  display: none;
  list-style: none;
  align-items: center;

  @media (min-width: 744px) {
    display: flex;
  }
`;

const LI = styled.li`
  margin-right: 26px;

  &:last-child {
    margin-right: 0px;
  }

  @media (min-width: 1440px) {
    margin-right: 65px;

    &last-child {
      margin-right: 0px;
    }
  }
`;

const CTABtn = styled.div`
  width: 100%;
`;

const AnchorSpan = styled.span`
  background-color: #000;
  color: var(--off-white-color);
  display: inline-block;
  padding: 16px 16px;

  border-radius: 100px;
  position: relative;
  z-index: 2;

  @media (min-width: 740px) {
    padding: 16px 33px;
  }

  @media (min-width: 1440px) {
    padding: ${(props) => props.padding};
  }
`;

const CTAAnchor = styled.a`
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

  @media (min-width: 1440px) {
    font-size: 22px;
  }
`;

const StyledNavLink = styled(ScrollLink)`
  cursor: pointer;
  color: var(--off-white-color);
  text-decoration: none;
  font-weight: 500;
  font-size: 18px;
  display: inline-block;
  position: relative;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);

  &:before,
  &:after {
    position: absolute;
    content: "";
    border-top: 0px;
    border-bottom: 2px solid;
    -moz-border-image: -moz-linear-gradient(
      83.78deg,
      #0dfffc 1.04%,
      #9300bf 50.07%,
      #fc0085 92.88%
    );
    -webkit-border-image: -webkit-linear-gradient(
      83.78deg,
      #0dfffc 1.04%,
      #9300bf 50.07%,
      #fc0085 92.88%
    );
    border-image: linear-gradient(
      83.78deg,
      #0dfffc 1.04%,
      #9300bf 50.07%,
      #fc0085 92.88%
    );
    bottom: 0px;
    transition: transform 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
    border-image-slice: 2;
  }

  &:before {
    width: 25%;
    transform-origin: left;
  }

  &:after {
    width: 75%;
    left: 25%;
    transform: translateX(110%);
  }

  &:hover:before {
    transform: scaleX(0.3);
  }

  &:hover:after {
    transform: translateX(0);
  }

  @media (min-width: 1440px) {
    font-size: 22px;
  }
`;

const VamosLink = styled(ScrollLink)`
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

  @media (min-width: 1440px) {
    font-size: 22px;
  }
`;

const Hero = () => {
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
      style={{ opacity: isVisible ? 1 : 0, transition: "opacity 3s" }}
    >
      <Nav>
        <LogoDiv>
          <Link href="/" passHref>
            <a>
              <Image
                layout="fill"
                src="/images/logo.svg"
                alt="Diseñcio. logo"
                objectFit="contain"
                draggable="false"
              />
            </a>
          </Link>
        </LogoDiv>
        <UL>
          <LI>
            <StyledNavLink
              to="services-section"
              spy={true}
              smooth="easeInOutQuint"
              duration={2000}
            >
              Servicios
            </StyledNavLink>
          </LI>
          <LI>
            <StyledNavLink
              to="values-section"
              spy={true}
              smooth="easeInOutQuint"
              duration={2000}
            >
              Nuestros Valores
            </StyledNavLink>
          </LI>
          <LI>
            <StyledNavLink
              to="faq-section"
              spy={true}
              smooth="easeInOutQuint"
              duration={2000}
            >
              FAQ
            </StyledNavLink>
          </LI>
          <LI>
            <CTABtn>
              <VamosLink
                to="contact-section"
                spy={true}
                smooth="easeInOutQuint"
                duration={2000}
              >
                <AnchorSpan padding="14px 31.4px">Vamos!</AnchorSpan>
              </VamosLink>
            </CTABtn>
          </LI>
        </UL>
        <HamburgerMenuWrapper>
          <Checkbox />
          <HamburgerLines>
            <Line1 />
            <Line2 />
            <Line3 />
          </HamburgerLines>
        </HamburgerMenuWrapper>
      </Nav>
      <H1>
        Estéticos sitios web personalizados{" "}
        <Span> diseñados en Guadalajara, Jalisco</Span>
      </H1>
      <Paragraph>
        Ya sea para aumentar las consultas, generar más ventas o mejorar su
        presencia en línea, nuestra pasión es crear excelencia digital.
      </Paragraph>
      <CTAContainer>
        <CTABtn>
          <ScrollLink
            to="contact-section"
            spy={true}
            smooth="easeInOutQuint"
            duration={2000}
          >
            <CTAAnchor>
              <AnchorSpan padding="14px 18.5px">Lo quiero!</AnchorSpan>
            </CTAAnchor>
          </ScrollLink>
        </CTABtn>
      </CTAContainer>
      <ScrollLink
        to="services-section"
        spy={true}
        smooth="easeInOutQuint"
        duration={2000}
      >
        <AnglesDownContainerWrapper>
          <AnglesDownContainer>
            <a href="">
              <Image
                layout="fill"
                src="/images/angles-down.svg"
                objectFit="contain"
                draggable="false"
              />
            </a>
          </AnglesDownContainer>
        </AnglesDownContainerWrapper>
      </ScrollLink>
    </Section>
  );
};

export default Hero;

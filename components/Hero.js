import Image from "next/image";
import Link from "next/link";
import styled, { keyframes } from "styled-components";
import { useRef, useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

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

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  position: absolute;
  right: 2rem;
  width: 2rem;
  height: 2rem;
  z-index: 100;
  cursor: pointer;

  @media (min-width: 744px) {
    display: none;
  }
`;

const UL = styled.ul`
  inset: 0 0 0 0%;
  background-color: hsl(0 0% 100% / 0.1);
  background-color: rgba(var(--dark-color, 0.9));
  backdrop-filter: blur(1rem);
  position: absolute;
  z-index: 3;
  transform: translateX(100%);
  transition: transform 0.3s ease-out;
  display: flex;
  list-style: none;
  align-items: center;
  flex-direction: column;

  &[data-visible="true"] {
    transform: translateX(0%);
  }

  @media (min-width: 744px) {
    flex-direction: row;
    height: fit-content;
    margin-top: 0;
    transform: translateX(0%);
    position: initial;
    background-color: transparent;
  }
`;

const LI = styled.li`
  margin-top: 60px;

  &:first-child {
    margin-top: 90px;
  }

  @media (min-width: 744px) {
    margin-top: 0px;
    margin-right: 26px;

    &:first-child {
      margin-top: 0px;
    }

    &:last-child {
      margin-right: 0px;
    }
  }

  @media (min-width: 1440px) {
    margin-right: 65px;
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
    padding: 12.5px 33px;
  }

  @media (min-width: 1440px) {
    padding: ${(props) => props.padding};
  }
`;

const AnchorSpanBottom = styled.span`
  background-color: #000;
  color: var(--off-white-color);
  display: inline-block;
  padding: 12.5px 17.75px;
  border-radius: 100px;
  position: relative;
  z-index: 2;

  @media (min-width: 740px) {
    padding: 12.5px 23px;
  }

  @media (min-width: 1440px) {
    padding: 14px 18.5px;
  }
`;

const StyledNavLink = styled(ScrollLink)`
  cursor: pointer;
  color: var(--off-white-color);
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  display: inline-block;
  position: relative;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);

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
    transition: transform 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    border-image-slice: 2;
  }

  &:after {
    width: 100%;
    left: 0%;
    transform: translateX(-110%);
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
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

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
        {isMobileMenuVisible ? (
          <StyledFontAwesomeIcon
            onClick={() => setIsMobileMenuVisible(false)}
            aria-expanded="true"
            aria-controls="mobile-navigation"
            icon={faX}
          />
        ) : (
          <StyledFontAwesomeIcon
            onClick={() => setIsMobileMenuVisible(true)}
            aria-expanded="false"
            aria-controls="mobile-navigation"
            icon={faBars}
          />
        )}
        <UL id="mobile-navigation" data-visible={isMobileMenuVisible}>
          <LI>
            <StyledNavLink
              onClick={() => setIsMobileMenuVisible(false)}
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
              onClick={() => setIsMobileMenuVisible(false)}
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
              onClick={() => setIsMobileMenuVisible(false)}
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
                onClick={() => setIsMobileMenuVisible(false)}
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
          <VamosLink
            to="contact-section"
            spy={true}
            smooth="easeInOutQuint"
            duration={2000}
          >
            <AnchorSpanBottom>Lo quiero!</AnchorSpanBottom>
          </VamosLink>
        </CTABtn>
      </CTAContainer>
      <ScrollLink
        to="services-section"
        spy={true}
        smooth="easeInOutQuint"
        duration={2000}
      >
        <AnglesDownContainerWrapper>
          <AnglesDownContainer style={{ cursor: "pointer" }}>
            <Image
              layout="fill"
              src="/images/angles-down.svg"
              objectFit="contain"
              draggable="false"
              alt="Moving image of arrows moving towards bottom."
            />
          </AnglesDownContainer>
        </AnglesDownContainerWrapper>
      </ScrollLink>
    </Section>
  );
};

export default Hero;

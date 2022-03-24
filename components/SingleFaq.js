import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const FaqDiv = styled.div`
  cursor: pointer;
  border-bottom: 1px solid var(--off-white-color);
  padding-bottom: 10px;
  margin: 0 20px 20px;

  @media (min-width: 740px) {
    margin: 0 40px 18px;
    padding-bottom: 18px;
  }

  @media (min-width: 1440px) {
    margin: 0 140px 20px;
    padding-bottom: 20px;
  }
`;

const SingleFaqWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const H3 = styled.h3`
  font-family: "Roboto Slab", serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 100%;
  max-width: 70%;

  @media (min-width: 740px) {
    font-size: 25px;
    margin-left: 0px;
  }

  @media (min-width: 1440px) {
    font-size: 30px;
  }
`;

const Paragraph = styled.p`
  margin-top: 20px;
  font-size: 16px;
  font-weight: 300;
  line-height: 150%;

  @media (min-width: 744px) {
    font-size: 20px;
  }

  @media (min-width: 1440px) {
    font-size: 25px;
  }
`;

const SVGWrapper = styled.div`
  position: relative;
  height: 25px;
  width: 25px;

  @media (min-width: 1440px) {
    height: 30px;
    width: 30px;
  }
`;

const SingleFaq = ({ faqQuestion, faqAnswer }) => {
  const [isParagraphVisible, setIsParagraphVisible] = useState(false);

  function toggleFaq() {
    setIsParagraphVisible(!isParagraphVisible);
  }

  return (
    <FaqDiv>
      <SingleFaqWrapper onClick={toggleFaq}>
        <H3
          style={{
            transition: "color 1s ease-in-out",
            color: isParagraphVisible
              ? "var(--turquoise-color)"
              : "var(--off-white-color)",
          }}
        >
          {faqQuestion}
        </H3>
        {isParagraphVisible ? (
          <SVGWrapper>
            <FontAwesomeIcon
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                transition: "color 1s ease-in-out",
                color: isParagraphVisible
                  ? "var(--turquoise-color)"
                  : "var(--off-white-color)",
              }}
              icon={faCaretUp}
            />
          </SVGWrapper>
        ) : (
          <SVGWrapper>
            <FontAwesomeIcon
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                top: "0px",
                bottom: "0px",
                left: "0px",
                right: "0px",
                transition: "color 1s ease-in-out",
                color: isParagraphVisible
                  ? "var(--turquoise-color)"
                  : "var(--off-white-color)",
              }}
              icon={faCaretDown}
            />
          </SVGWrapper>
        )}
      </SingleFaqWrapper>
      {isParagraphVisible && (
        <Paragraph onClick={toggleFaq}>{faqAnswer}</Paragraph>
      )}
    </FaqDiv>
  );
};

export default SingleFaq;

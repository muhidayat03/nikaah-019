import React from "react";
import styled, { keyframes } from "styled-components";
import { useThemeContext } from "../themeContext";
import { ReactComponent as Kanan } from "./image/footer-kanan.svg";
import { ReactComponent as Kiri } from "./image/footer-kiri.svg";
import { ReactComponent as Thanks } from "./image/thanks.svg";

const FooterSection = () => {
  const { activeTheme } = useThemeContext();

  return (
    <FooterWrapper>
      <Kanan className="kanan" alt="kanan" fill={activeTheme.darker} />
      <Kiri className="kiri" alt="kiri" fill={activeTheme.darker} />
      <div className="content" data-aos="fade-up">
        <Thanks className="tengah" alt="tengah" fill={activeTheme.darker} />
      </div>
    </FooterWrapper>
  );
};

export default FooterSection;

const move = keyframes`
  0% {
    transform: rotate(-4deg);
  }

  50% {
    transform: rotate(4deg);
  }
  100% {
    transform: rotate(-4deg);
  }
`;

const FooterWrapper = styled.div`
  position: relative;
  padding: 20px;

  .kanan {
    position: absolute;
    bottom: 0;
    right: 0;
    height: 100px;
  }
  .kiri {
    position: absolute;
    bottom: -10px;
    left: 0;
    height: 100px;
  }

  .content {
    width: 100%;
    padding: 40px 0;
    z-index: 3;
    max-width: 960px;
    margin: auto;

    svg {
      width: 280px;
      /* height: 200px; */
      display: block;
      margin: 0 auto;
      padding-bottom: 32px;
      animation: ${move} 4s ease-in-out infinite;
      @media only screen and (min-width: 800px) {
        width: 300px;
      }
    }
    @media only screen and (min-width: 800px) {
      padding: 120px 20px;
    }
  }
`;

import React from "react";
import Modal from "../components/Modal";
import styled, { keyframes } from "styled-components";
import { ReactComponent as HomeKanan } from "./image/home-kanan.svg";
import { ReactComponent as HomeKiri } from "./image/home-kiri.svg";
import { ReactComponent as WelcomeBawah } from "./image/welcome-bawah.svg";
import { useThemeContext } from "../themeContext";
import { useParams } from "react-router-dom";
import CircleAbu from "./image/circle-abu.jpg";
import CirclePink from "./image/circle-pink.png";
import CircleHijau from "./image/circle-hijau.png";
import CircleBiru from "./image/circle-biru.png";

const ImageCircle = {
  grey: CircleAbu,
  pink: CirclePink,
  green: CircleHijau,
  blue: CircleBiru,
};

const WelcomeModal = ({ onClose, visible }) => {
  const { activeTheme } = useThemeContext();
  const param = useParams();

  return (
    <Modal onClose={onClose} visible={visible}>
      <WelcomeBody theme={activeTheme}>
        <HomeKanan className="home-kanan" fill={activeTheme.dark} />
        <HomeKiri className="home-kiri" fill={activeTheme.dark} />
        <WelcomeBawah className="welcome-bawah" fill={activeTheme.dark} />
        <div className="container" data-aos="zoom-in">
          <div className="content">
            <div className="border bottom-border-2"></div>
            <div className="border bottom-border-1"></div>
            <img
              src={ImageCircle[activeTheme.name]}
              className="circle-image"
              alt="circle"
            />
            <p style={{ color: "#707070" }}>
              Kepada Yth. <br /> Bapak/Ibu/Saudara
            </p>

            <h3 className="title">
              {param?.name ? (
                param.name.split("-").join(" ")
              ) : (
                <span>&nbsp;&nbsp; </span>
              )}
            </h3>
            <p style={{ color: "#707070" }}>Ditempat</p>
            <StyledButton onClick={onClose}>Buka Undangan</StyledButton>
          </div>
        </div>
      </WelcomeBody>
    </Modal>
  );
};

export default WelcomeModal;

const WelcomeBody = styled.div`
  position: relative;
  text-align: center;
  background-color: ${({ theme }) => theme.background};
  height: 400px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
  overflow: hidden;

  @media only screen and (min-width: 800px) {
    min-height: 60vh;
    border-top-right-radius: 0;
    border-top-left-radius: 0;
  }

  .home-kanan {
    position: absolute;
    top: 0;
    right: 0;
    width: auto;
    height: 16%;
  }

  .home-kiri {
    position: absolute;
    top: 0;
    left: 0;
    width: auto;
    height: 22%;
  }

  .welcome-bawah {
    position: absolute;
    height: 120px;
    width: auto;
    bottom: 0;
    right: 0;
  }

  .container {
    padding: 40px;
    height: 100%;
    width: 100%;
    max-width: 900px;
    top: 0;
    left: 0;
    margin: auto;
    padding: 60px;

    .content {
      height: 100%;
      width: 100%;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .border {
        display: none;
        background-color: ${({ theme }) => theme.light};
        height: 4px;
        border-radius: 2px;
        @media only screen and (min-width: 800px) {
          display: block;
        }
      }

      .top-border-1 {
        height: 4px;
        border-radius: 2px;
        width: 50%;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
      }
      .top-border-2 {
        width: 100%;
        position: absolute;
        top: 12px;
      }
      .bottom-border-1 {
        width: 50%;
        position: absolute;
        bottom: 0;
        right: 50%;
        transform: translateX(50%);
      }
      .bottom-border-2 {
        width: 100%;
        position: absolute;
        bottom: 12px;
      }

      .circle-image {
        width: 120px;
        height: 120px;
        text-align: center;
        border-radius: 50%;
      }

      .title {
        font-size: 36px;
        font-family: raleway;
        text-align: center;
        letter-spacing: 2px;
        font-weight: 500;
        margin: 0px;
      }
    }
  }
`;

const ButtonAnimation = keyframes`
  0%   { transform: translateY(-4px); }
  50%  { transform: translateY(0px); }
  100% { transform: translateY(-4px); }
`;

const StyledButton = styled.button`
  border: none;
  background-color: #88929a;
  color: white;
  padding: 8px 16px;
  border-radius: 100px;
  font-size: 14px;
  cursor: pointer;
  font-family: raleway;
  animation: ${ButtonAnimation} 3s ease infinite;

  :hover {
    background-color: #616d76;
  }
`;

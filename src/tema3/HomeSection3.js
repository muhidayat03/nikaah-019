import React, { useEffect } from "react";
import styled from "styled-components";
import BannerImageAbu from "./image/banner-abu.jpg";
import BannerImagePink from "./image/banner-pink.png";
import BannerImageHijau from "./image/banner-hijau.png";
import BannerImageBiru from "./image/banner-biru.png";
import { useThemeContext } from "../themeContext";
import { ReactComponent as HomeKanan } from "./image/home-kanan.svg";
import { ReactComponent as HomeKiri } from "./image/home-kiri.svg";
import userData from "./userData";

const BannerImage = {
  grey: BannerImageAbu,
  pink: BannerImagePink,
  green: BannerImageHijau,
  blue: BannerImageBiru,
};

const HomeSection = () => {
  const [event1] = userData.event;
  const { activeTheme } = useThemeContext();

  useEffect(() => {
    console.log(window.sakura);

    if (window?.sakura?.settings)
      window.sakura.settings.colors = [
        {
          gradientColorStart: "#cccccc",
          gradientColorEnd: "white",
          gradientColorDegree: 120,
        },
      ];
  }, []);

  return (
    <HomeSectionWrapper
      theme={activeTheme}
      style={{
        width: "100%",
        minHeight: 600,
        position: "relative",
      }}
    >
      <HomeKanan className="kanan" fill={activeTheme.darker} />
      <HomeKiri className="kiri" fill={activeTheme.darker} />

      <div className="banner-bg"></div>
      <img
        src={BannerImage[activeTheme.name]}
        className="banner-image"
        alt="img-banner"
      />

      <div className="banner-title">
        <div className="top">
          <h2 data-aos="fade-up">The Wedding Of</h2>
          <h1 data-aos="fade-up">
            {userData.groom.name} & {userData.bride.name}
          </h1>

          <h3 data-aos="fade-in">
            {event1.date.split("-").reverse().join(".")}
          </h3>
        </div>
        <div className="bottom">
          <p data-aos="fade-up">
            Tidak ada solusi yang lebih baik bagi dua insan yang saling
            mencintai dibanding pernikahan
            <br /> (HR. Ibnu Majah)
          </p>
        </div>
      </div>
    </HomeSectionWrapper>
  );
};

export default HomeSection;

const HomeSectionWrapper = styled.div`
  height: calc(100vh - 48px);
  background-color: ${({ theme }) => theme.background};

  .kanan {
    position: absolute;
    top: 0;
    right: 0;
    height: 80px;
    width: auto;
    z-index: 5;
  }
  .kiri {
    position: absolute;
    top: 0;
    left: 8px;
    height: 90px;
    z-index: 5;
    width: auto;
  }
  @media only screen and (min-width: 800px) {
    height: 100vh;
  }

  .banner-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* object-position: 0 10%; */
  }
  .banner-bg {
    background: black;
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    opacity: 0.3;
    background: rgb(0, 0, 0);
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 34%,
      rgba(0, 0, 0, 1) 90%,
      rgba(0, 0, 0, 1) 90%
    );
  }
  .banner-title {
    height: 100vh;
    width: 100vw;
    border-color: blue;
    top: 0;
    position: relative;
    position: absolute;
    z-index: 3;
    text-align: center;
    color: ${({ theme }) => theme.darker};

    .top {
      position: absolute;
      top: 80px;
      width: 100%;
      padding: 20px;
    }
    .bottom {
      position: absolute;
      bottom: 100px;
      width: 100%;
      padding: 20px;
    }

    h2 {
      font-size: 36px;
      font-family: alana;
      color: white;
      text-align: center;
      margin: 0;
      letter-spacing: 2px;
      font-weight: normal;
      line-height: 1;
    }

    h3 {
      font-family: raleway;
      text-align: center;
      color: white;
      font-weight: 400;
      font-size: 16px;
      line-height: 1;
    }

    h1 {
      font-size: 58px;
      font-family: bickham;
      color: white;
      text-align: center;
      margin: 0;
      letter-spacing: 2px;
      font-weight: normal;
      line-height: 1;
    }

    p {
      color: white;
      text-align: center;
      margin-top: 20px;
    }
  }
`;

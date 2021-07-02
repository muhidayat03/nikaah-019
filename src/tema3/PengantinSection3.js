import React from "react";
import styled from "styled-components";
import { useThemeContext } from "../themeContext";
import { ReactComponent as PengantinKanan } from "./image/pengantin-kanan.svg";
import { ReactComponent as PengantinKiri } from "./image/pengantin-kiri.svg";
import userData from "./userData";
import Pengantin1Abu from "./image/pengantin1-abu.png";
import Pengantin1Pink from "./image/pengantin1-pink.png";
import Pengantin1Hijau from "./image/pengantin1-hijau.png";
import Pengantin1Biru from "./image/pengantin1-biru.png";
import Pengantin2Abu from "./image/pengantin2-abu.png";
import Pengantin2Pink from "./image/pengantin2-pink.png";
import Pengantin2Hijau from "./image/pengantin2-hijau.png";
import Pengantin2Biru from "./image/pengantin2-biru.png";

const Pengantin1 = {
  grey: Pengantin1Abu,
  pink: Pengantin1Pink,
  green: Pengantin1Hijau,
  blue: Pengantin1Biru,
};
const Pengantin2 = {
  grey: Pengantin2Abu,
  pink: Pengantin2Pink,
  green: Pengantin2Hijau,
  blue: Pengantin2Biru,
};

const PengantinSection = () => {
  const { groom, bride } = userData;

  const { activeTheme } = useThemeContext();

  return (
    <PengantinWrapper
      bg={activeTheme.background}
      style={{
        width: "100%",
        position: "relative",
      }}
    >
      <PengantinKanan className="kanan" fill={activeTheme.light} />
      <PengantinKiri className="kiri" fill={activeTheme.dark} />
      <div className="content">
        {/* <h1>Pengantin</h1> */}
        <h3 data-aos="fade-up">
          Assalamu'alaikum Warrahmatullahi Wabarrakatuh
        </h3>
        <p data-aos="fade-up">
          Dengan memohon Rahmat dan Ridho Allah SWT, kami bermaksud
          menyelenggarakan resepsi pernikahan putra putri kami
        </p>
        <div padding="40px 20px" className="person-wrapper">
          <div className="person" data-aos="fade-left">
            <img
              src={Pengantin2[activeTheme.name]}
              alt="biodata"
              style={{ width: "120px", height: "120px" }}
            />
            <div>
              <h3>{bride.fullname}</h3>
              <p style={{ margin: 0 }}>
                Putri {bride.birth_order} dari Bapak {bride.father_name} dan Ibu{" "}
                {bride.mother_name}
              </p>
            </div>
          </div>

          <h1 className="and" data-aos="zoom-in">
            &
          </h1>
          <div className="person" data-aos="fade-right">
            <img
              src={Pengantin1[activeTheme.name]}
              alt="biodata"
              style={{ width: "120px", height: "120px" }}
            />

            <div>
              <h3>{groom.fullname}</h3>
              <p style={{ margin: 0 }}>
                Putra {groom.birth_order} dari Bapak {groom.father_name} dan Ibu{" "}
                {groom.mother_name}
              </p>
            </div>
          </div>
        </div>
      </div>
    </PengantinWrapper>
  );
};

export default PengantinSection;

const PengantinWrapper = styled.div`
  background-color: ${({ bg }) => bg || "#e9ecef"};
  overflow: hidden;

  .kanan {
    position: absolute;
    top: 0;
    right: 0;
    width: 160px;
    height: auto;
  }
  .kiri {
    position: absolute;
    bottom: -26px;
    left: 0;
    width: 100px;
  }

  .banner-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  h1 {
    font-size: 58px;
    font-family: Bickham;
    margin: 0 0 40px;
    text-align: center;
    letter-spacing: 2px;
    font-weight: normal;
  }
  .content {
    position: relative;
    width: 100%;
    padding: 60px 20px;
    z-index: 3;
    max-width: 960px;
    margin: auto;
    .and {
      font-size: 60px;
      font-family: affair;
      text-align: center;
      margin: 0;
      letter-spacing: 2px;
      font-weight: normal;
      margin: 32px auto;
      @media only screen and (min-width: 800px) {
        font-size: 48px;
        margin-top: 40px;
      }
    }

    .title {
      font-size: 58px;
      font-family: Bickham;
      text-align: center;
      margin: 0;
      letter-spacing: 2px;
      font-weight: normal;
    }
    h3 {
      margin: 8px;
      font-weight: 600;
      font-size: 15px;
      text-align: center;
    }
    p {
      text-align: center;
      font-family: raleway;
    }

    .arti {
      font-size: 13px;
    }

    .person-wrapper {
      display: flex;
      align-items: center;
      flex-direction: column;
      max-width: 600;
      margin: 40px auto;
      @media only screen and (min-width: 800px) {
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-around;
      }
    }

    .person {
      width: 200px;
      /* height: 200px;
      border-radius: 50%; */
      text-align: center;
      img {
        border-radius: 50%;
      }
    }
  }
`;

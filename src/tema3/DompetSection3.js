import React from "react";
import styled from "styled-components";
// import MapBgImage from "./image/map-bg.jpg";
// import Button from "../components/Button";
import { useThemeContext } from "../themeContext";
import { Col, Row } from "../components/Grid";
import Card1 from "./image/card1.png";
import { ReactComponent as PengantinKiri } from "./image/pengantin-kiri.svg";

const MapSection = () => {
  const { activeTheme } = useThemeContext();

  return (
    <MapSectionWrapper bg={activeTheme.background}>
      <PengantinKiri className="kiri" fill={activeTheme.dark} />

      <div className="content">
        <h1 data-aos="fade-up">Dompet Digital</h1>
        <div
          style={{ maxWidth: 600, margin: "auto", padding: "0 20px" }}
          data-aos="fade-up"
        >
          <p>
            Terima kasih telah melakukan konfirmasi kehadiran. Doa Bapak/ Ibu/
            Saudara/i sudah merupakan hadiah terbaik bagi kami. Namun, jika
            memberi adalah bentuk tanda kasih Anda, fitur ini dapat memberikan
            Anda kemudahan
          </p>
        </div>
        <Row justify="space-around">
          <Col
            xs="1"
            sm="1"
            md="1"
            lg="1"
            direction="column"
            data-aos="zoom-in"
          >
            <img src={Card1} alt="card" />
          </Col>
        </Row>
      </div>
    </MapSectionWrapper>
  );
};

export default MapSection;

const MapSectionWrapper = styled.div`
  position: relative;
  background-color: ${({ bg }) => bg || "#e9ecef"};
  overflow: hidden;

  img {
    width: 100%;
    max-width: 300px;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 16px;
  }

  .kanan {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 72px;
    height: auto;
  }

  .kiri {
    position: absolute;
    bottom: -26px;
    left: 0;
    width: 100px;
  }

  .content {
    width: 100%;
    padding: 60px 0;
    z-index: 3;
    max-width: 960px;
    margin: auto;
    position: relative;

    .map-container {
      width: 400px;
      height: 300px;
      margin: 20px auto;
      border-radius: 20px;
      overflow: hidden;
      max-width: 80vw;
      border: 1px solid #88929a;
      padding: 14px;
      .inner-container {
        border-radius: 18px;
        overflow: hidden;
        width: 100%;
        height: 100%;
      }
    }

    h1 {
      font-size: 18px;
      font-family: Raleway;
      text-align: center;
      margin: 0 0 20px;
      font-weight: 600;
      color: #88929a;
    }

    h3 {
      color: #88929a;
      text-align: center;
      font-size: 14px;
    }

    p {
      color: #88929a;
      text-align: center;
    }

    Button {
      margin: 20px auto 0;
      display: block;
      background-color: #88929a;
      :hover {
        background-color: #5f686f;
      }
    }
  }
`;

import React from "react";
import styled from "styled-components";
// import InformationBg from "./image/information-bg.png";
import { Col, Row } from "../components/Grid";
import { ReactComponent as JagaJarak } from "./image/jaga-jarak.svg";
import { ReactComponent as GunakanMasker } from "./image/masker.svg";
import { ReactComponent as CuciTangan } from "./image/cuci-tangan.svg";
import { ReactComponent as CekSuhu } from "./image/cek-suhu.svg";
import { useThemeContext } from "../themeContext";

const InformationSection = () => {
  const { activeTheme } = useThemeContext();

  return (
    <InformationWrapper
      style={{
        width: "100%",
        position: "relative",
      }}
    >
      <div className="banner-title">
        <h1 data-aos="fade-up">Informasi</h1>
        <p data-aos="fade-up">
          Sebelumnya Mohon maaf kepada Bapak, Ibu, Saudara/i,
        </p>
        <p style={{ marginBottom: 10 }} data-aos="fade-up">
          Terkait dengan kondisi pandemi Covid-19 yang terjadi saat ini, tanpa
          mengurangi rasa hormat kami, mohon untuk melakukan prosedur kesehatan
          sesuai dengan protokol kesehatan yang berlaku
        </p>
        <Row justify="space-around">
          <Col
            xs="2"
            sm="2"
            md="4"
            lg="4"
            direction="column"
            data-aos="zoom-in"
          >
            <JagaJarak
              alt="jaga-jarak"
              fill={activeTheme.light}
              style={{ width: "100%" }}
            />
            <p>Jaga Jarak</p>
          </Col>
          <Col
            xs="2"
            sm="2"
            md="4"
            lg="4"
            direction="column"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <GunakanMasker
              alt="jaga-jarak"
              fill={activeTheme.light}
              style={{ width: "100%" }}
            />
            <p>Gunakan Masker</p>
          </Col>
          <Col
            xs="2"
            sm="2"
            md="4"
            lg="4"
            direction="column"
            data-aos="zoom-in"
            data-aos-delay="600"
          >
            <CuciTangan
              alt="jaga-jarak"
              fill={activeTheme.light}
              style={{ width: "100%" }}
            />
            <p>Cuci Tangan</p>
          </Col>
          <Col
            xs="2"
            sm="2"
            md="4"
            lg="4"
            direction="column"
            data-aos="zoom-in"
            data-aos-delay="900"
          >
            <CekSuhu
              alt="jaga-jarak"
              fill={activeTheme.light}
              style={{ width: "100%" }}
            />
            <p>Suhu Maksimal 37.2°C</p>
          </Col>
        </Row>
        <div data-aos="zoom-in">
          <p>Mohon dimaklumi keadaannya dan semoga dapat menjaga kita semua.</p>
          <p> Terimakasih.</p>
        </div>
      </div>
    </InformationWrapper>
  );
};

export default InformationSection;

const InformationWrapper = styled.div`
  background-repeat: no-repeat;
  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  .banner-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .banner-title {
    width: 100%;
    padding: 60px 20px;

    z-index: 3;
    max-width: 960px;
    margin: auto;
    h1 {
      font-size: 58px;
      font-family: Bickham;
      text-align: center;
      margin: 0 0 40px;
      letter-spacing: 2px;
      font-weight: normal;
    }
    p {
      text-align: center;
      font-family: raleway;
    }

    img {
      height: 90px;
      width: 90px;
    }
  }
`;

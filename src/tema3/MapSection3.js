import React from "react";
import styled from "styled-components";
import Button from "../components/Button";
import { useThemeContext } from "../themeContext";
import { ReactComponent as CountDownKanan } from "./image/count-down-kanan.svg";
import userData from "./userData";

const MapSection = ({ theme }) => {
  const { activeTheme } = useThemeContext();
  const {
    map,
    event: [event1],
  } = userData;

  const openMap = () => {
    window.open(map.url, "_blank");
  };
  return (
    <MapSectionWrapper theme={theme}>
      <CountDownKanan className="kanan" fill={activeTheme.light} />

      <div className="content">
        <h3 data-aos="fade-up">{event1.location}</h3>
        <p data-aos="fade-up">{event1.address}</p>

        <div className="map-container" data-aos="zoom-in">
          <div className="inner-container">
            <iframe
              title="map"
              width="100%"
              frameBorder="0"
              height="100%"
              src={map.url}
              allowFullScreen
            />
          </div>
        </div>
        <Button onClick={openMap} data-aos="zoom-in">
          Arahkan Maps
        </Button>
      </div>
    </MapSectionWrapper>
  );
};

export default MapSection;

const MapSectionWrapper = styled.div`
  position: relative;

  .kanan {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 72px;
    height: auto;
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
      font-size: 58px;
      font-family: Bickham;
      text-align: center;
      margin: 0 0 36px;
      letter-spacing: 2px;
      font-weight: normal;
      color: white;
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

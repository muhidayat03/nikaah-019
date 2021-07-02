import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import FooterImage from "./image/bottom-image.svg";
import SaveTheDate from "./image/SaveTheDate2.png";
// import Button from "../components/Button";
import { useThemeContext } from "../themeContext";
import { ReactComponent as CountDownKiri } from "./image/count-down-kiri.svg";
import userData from "./userData";
import { Col, Row } from "../components/Grid";

const CountDown = ({ theme }) => {
  const [event1, event2] = userData.event;
  // const { url } = userData.calendar;

  const { activeTheme } = useThemeContext();

  const weddingDate = event1.date;
  const calculateTimeLeft = () => {
    const difference = +new Date(weddingDate) - +new Date();
    let timeLeft = null;

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  return (
    <CountDownWrapper textColor={activeTheme.text} bg={activeTheme.background}>
      <CountDownKiri className="kiri" fill={activeTheme.dark} />

      <div className="content">
        <h1>
          {event1.day} {event1.month} {event1.year}
        </h1>
        <div className="frame" data-aos="zoom-in">
          <img className="count-image" src={SaveTheDate} alt="save-the-date" />
        </div>
        <div className="countdown-box">
          <div className="count-item" data-aos="zoom-in">
            <h3> {timeLeft?.days ?? "-"}</h3>
            <p className="count-desc">Hari</p>
          </div>
          <div className="count-item" data-aos="zoom-in" data-aos-delay="300">
            <h3> {timeLeft?.hours ?? "-"}</h3>
            <p className="count-desc">Jam</p>
          </div>
          <div className="count-item" data-aos="zoom-in" data-aos-delay="600">
            <h3> {timeLeft?.minutes ?? "-"}</h3>
            <p className="count-desc">Menit</p>
          </div>
          <div className="count-item" data-aos="zoom-in" data-aos-delay="900">
            <h3> {timeLeft?.seconds ?? "-"}</h3>
            <p className="count-desc">Detik</p>
          </div>
        </div>

        <img
          className="bottom-image"
          src={FooterImage}
          alt="bottom"
          data-aos="fade-up"
        />

        <div className="bottom-section" data-aos="zoom-in">
          <p>
            Kami sampaikan permohonan maaf terkait dengan acara pernikahan kami
            yang dengan berat hati tidak bisa mengundang Bapak, Ibu, Saudara/i
            sekalian dikarenakan kondisi pandemi COVID-19 yang kita alami saat
            ini.
          </p>
          <p>
            Maka dari itu bersama dengan informasi ini, kami bermaksud
            membagikan kabar bahagia ini sekaligus memohon doa dan restu dari
            saudara sekalian untuk pernikahan kami. Terimakasih.
          </p>
          <h3>Wassalamu'alaikum Warrahmatullahi Wabarrakatuh</h3>
        </div>

        <div className="event-section">
          <h2 className="day" data-aos="zoom-in">
            {event1.day_name}
          </h2>
          <div className="date-container">
            <div data-aos="fade-right">
              <h1 className="date">{event1.day}</h1>
            </div>
            <div data-aos="fade-left">
              <h1 className="month">{event1.month}</h1>
              <h1 className="month">{event1.year}</h1>
            </div>
          </div>
          <Row className="date-info-section">
            <Col padding="0" xs="1" sm="1" md="1" lg="1">
              <div className="date-info" data-aos="fade-up">
                <h3>{event1.name}</h3>
                <p>{event1.time}</p>
                <p style={{ marginTop: 8 }}>{event1.location}</p>
              </div>
            </Col>
          </Row>
        </div>
        {/* <div
          style={{
            margin: "60px auto 40px",
            position: "relative",
            zIndex: 999,
            textAlign: "center",
          }}
          data-aos="zoom-in"
        >
          <p className="dokumentasi">Tambahkan ke: </p>
          <Button
            style={{ background: activeTheme.text }}
            onClick={() => window.open(url, "_blank")}
          >
            Google Calendar
          </Button>
        </div> */}
      </div>
    </CountDownWrapper>
  );
};

export default CountDown;

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

const CountDownWrapper = styled.div`
  background-color: ${({ bg }) => bg || "#e9ecef"};

  color: ${({ textColor }) => textColor};
  position: relative;
  background-color: white;
  overflow: hidden;
  .date-info-section {
    /* display: flex; */
    /* flex-direction: column; */
    /* align-items: center; */
    @media only screen and (min-width: 800px) {
      padding: 20px;
    }

    .date-info {
      text-align: center;
      margin: 10px 0 20px;

      h3 {
        font-size: 42px;
        font-family: bickham;
        font-weight: 500;
        margin: 0;

        span {
          font-family: Raleway;
          font-size: 20px;
        }
      }

      p {
        margin: 0;
        font-size: 20px;
      }
    }
  }

  .kiri {
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    height: auto;
  }

  .countdown-box {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    h3 {
      font-size: 28px;
      font-family: Raleway;
      font-weight: 500;
      text-align: center;
      margin: 8px 0 0;
    }
  }

  .count-item {
    padding: 0 20px;
  }

  .content {
    width: 100%;
    padding: 60px 20px 0px;

    z-index: 3;
    max-width: 960px;
    margin: auto;

    h1 {
      font-family: Raleway;
      text-align: center;
      margin: 0;
      margin-bottom: 20px;
      font-weight: 500;
    }
    .frame {
      height: 120px;
    }

    p.count-desc {
      font-family: Raleway;
      margin: 0;
      font-size: 15px;
      text-align: center;
    }

    .bottom-section {
      p {
        text-align: center;
      }

      h3 {
        text-align: center;
        font-size: 14px;
      }
    }
    .count-image {
      margin: auto;
      display: block;
      animation: ${move} 4s ease-in-out infinite;
      width: 260px;
    }

    .bottom-image {
      width: 200px;
      margin: auto;
      display: block;
      margin-top: 60px;
    }

    .event-section {
      padding: 20;
      margin-top: 60px;

      h2,
      h1 {
        font-family: Raleway;
      }

      .date-container {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .day {
        text-align: center;
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 0;
        margin-top: 40px;
      }

      .month {
        font-size: 20px;
        font-weight: 600;
        margin: 0;
        margin-left: 10px;
        text-align: left;
      }
      .date {
        font-size: 68px;
        font-weight: bolder;
        line-height: 0.8;
      }
    }
  }
`;

import styled from "styled-components";
import React, { useState } from "react";

import { ScrollingProvider, Section } from "react-scroll-section";
import Player, { useAudio } from "../components/Player";
import audio from "../assets/audio/audio2.mp3";

// section component
import HomeSection2 from "./HomeSection3";
import PengantinSection from "./PengantinSection3";
import MapSection from "./MapSection3";
import GalerySection3 from "./GalerySection3";
import TabMenu from "./TabMenu3";
import CountDown from "./CountDownSection3";
import FooterSection from "./FooterSection3";
import DompetSection3 from "./DompetSection3";
import MessageSection3 from "./MessageSection3";
import { useThemeContext } from "../themeContext";

import WelcomeModal from "./WelcomeModal3";
import InformationSection2 from "./InformationSection3";
import { useLocation } from "react-router-dom";

function Tema2() {
  const [playing, toggle] = useAudio(audio);
  const [open, setOpen] = useState(true);

  const openInvitation = () => {
    setOpen(false);
    toggle();
    window.scrollTo(0, 0);
  };

  const { activeTheme } = useThemeContext();

  const show = new URLSearchParams(useLocation().search).get("show");

  return (
    <ScrollingProvider>
      <Container>
        <Section id="home">
          <HomeSection2 />
        </Section>
        <InformationSection2 />
        <Section id="pengantin">
          <PengantinSection />
        </Section>
        <Section id="event">
          <CountDown />
        </Section>
        <Section id="map">
          <MapSection />
        </Section>
        <Section id="galery">
          <GalerySection3 />
        </Section>
        {show && <DompetSection3 />}
        <MessageSection3 />
        <FooterSection />
      </Container>
      <TabMenu />
      <Player
        url={audio}
        playing={playing}
        toggle={toggle}
        color={activeTheme.text}
      />
      <WelcomeModal onClose={openInvitation} visible={open} />
    </ScrollingProvider>
  );
}

export default Tema2;

const Container = styled.div`
  margin-bottom: 48px;
  @media only screen and (min-width: 800px) {
    margin-bottom: 0;
  }
`;

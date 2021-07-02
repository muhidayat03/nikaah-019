import React from "react";
import styled from "styled-components";
import { useScrollSection } from "react-scroll-section";

import { Title } from "../components/Typography";
import {
  House,
  HouseFill,
  Calendar2Check,
  Calendar2CheckFill,
  People,
  PeopleFill,
  GeoAlt,
  GeoAltFill,
  Camera,
  CameraFill,
} from "react-bootstrap-icons";

const TabMenuItem = ({ onClick, selected, Icon, IconActive, name }) => {
  return (
    <FooterItemContainer onClick={onClick}>
      {selected ? (
        <IconActive size={18} color="#646464"></IconActive>
      ) : (
        <Icon size={18} color="#646464"></Icon>
      )}

      <FooterItemName>{name}</FooterItemName>
    </FooterItemContainer>
  );
};

const TabMenu = () => {
  const homeSection = useScrollSection("home");
  const PengantinSection = useScrollSection("pengantin");
  const EventSection = useScrollSection("event");
  const PetaSection = useScrollSection("map");
  // const GalerySection = useScrollSection("message");
  const GalerySection = useScrollSection("galery");

  return (
    <FooterContainer>
      <TabMenuItem
        onClick={homeSection.onClick}
        selected={homeSection.selected}
        Icon={House}
        IconActive={HouseFill}
        name="Utama"
      />
      <TabMenuItem
        onClick={PengantinSection.onClick}
        selected={PengantinSection.selected}
        Icon={People}
        IconActive={PeopleFill}
        name="Pengantin"
      />
      <TabMenuItem
        onClick={EventSection.onClick}
        selected={EventSection.selected}
        Icon={Calendar2Check}
        IconActive={Calendar2CheckFill}
        name="Event"
      />
      <TabMenuItem
        onClick={PetaSection.onClick}
        selected={PetaSection.selected}
        Icon={GeoAlt}
        IconActive={GeoAltFill}
        name="Peta"
      />
      <TabMenuItem
        onClick={GalerySection.onClick}
        selected={GalerySection.selected}
        Icon={Camera}
        IconActive={CameraFill}
        name="galery"
      />
    </FooterContainer>
  );
};

export default TabMenu;

const FooterContainer = styled.div`
  width: 100%;
  height: 48px;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: rgb(108 114 124 / 16%) 0px -2px 4px 0px;
  z-index: 900000;
  background-color: white;
  @media only screen and (min-width: 800px) {
    display: none;
  }
`;

const FooterItemContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ seledted }) => seledted && "red"};
  flex-direction: column;
`;

const FooterItemName = styled(Title)`
  padding-top: 4px;
  font-size: 11px;
  font-weight: 400;
`;

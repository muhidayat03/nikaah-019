import React, { useCallback } from "react";
import styled from "styled-components";
import ModalImage from "../components/ModalImage";

import Galery1 from "./photo/1.jpg";
import Galery2 from "./photo/2.jpg";
import Galery4 from "./photo/4.jpg";
import Galery6 from "./photo/6.jpg";
import Galery7 from "./photo/7.jpg";
import Galery8 from "./photo/8.jpg";
import Galery9 from "./photo/9.jpg";
import Galery10 from "./photo/10.jpg";
import Galery11 from "./photo/11.jpg";
import Galery12 from "./photo/12.jpg";
import Gallery from "react-photo-gallery";
import { useState } from "react";
import Lightbox from "react-modal-image/lib/Lightbox";
// import { Facebook, Instagram, Youtube } from "react-bootstrap-icons";

const background = {
  pink: "#fff9f9",
};
const GalerySection = ({ theme }) => (
  <GaleryWrapper theme={theme}>
    <div className="content">
      {/* <h1>Our Glalery</h1> */}
      <div style={{ padding: 20 }}>
        <h3 data-aos="fade-up">Galeri Foto</h3>
        <p data-aos="fade-up">
          Kami ingin merasakan kehadiran Anda! Karena kami berharap dapat
          membagikan hari yang tak terlupakan seumur hidup ini dengan Anda,
          situasi pandemi saat ini memungkinkan kami untuk melakukan video
          langsung di situs web ini pada tanggal dan waktu yang disebutkan untuk
          teman-teman tercinta kita, kita berbagi cinta yang kita miliki secara
          virtual.
        </p>
      </div>
      <GaleryComponent />
    </div>
  </GaleryWrapper>
);

export default GalerySection;

const GaleryComponent = () => {
  const [openModal, setOpenModal] = useState(false);
  const [index, setIndex] = useState(null);

  const openPhoto = (index) => {
    setIndex(index);
    setOpenModal(true);
  };
  const closePhoto = () => {
    setOpenModal(false);
    setIndex(null);
  };

  const imageRenderer = useCallback(
    ({ index, left, top, key, photo }) => (
      <ModalImage
        data-aos="zoom-in"
        key={key}
        index={index}
        photo={photo}
        left={left}
        top={top}
        openPhoto={openPhoto}
      />
    ),
    []
  );

  const photos = [
    {
      src: Galery2,
      width: 6000,
      height: 4000,
    },
    {
      src: Galery1,
      width: 4000,
      height: 6000,
    },

    {
      src: Galery4,
      width: 4,
      height: 6,
    },

    {
      src: Galery11,
      width: 6,
      height: 4,
    },
    {
      src: Galery6,
      width: 4,
      height: 6,
    },
    {
      src: Galery7,
      width: 6,
      height: 4,
    },
    {
      src: Galery12,
      width: 6,
      height: 4,
    },
    {
      src: Galery10,
      width: 6,
      height: 4,
    },
    {
      src: Galery8,
      width: 3845,
      height: 5767,
    },
    {
      src: Galery9,
      width: 6,
      height: 4,
    },
  ];

  return (
    <div className="gallery">
      <Gallery photos={photos} margin={0} renderImage={imageRenderer} />
      {openModal && (
        <Lightbox
          hideDownload
          hideZoom
          small={photos[index].src}
          large={photos[index].src}
          alt=""
          onClose={() => {
            setTimeout(() => {
              closePhoto();
            }, 200);
          }}
        />
      )}
    </div>
  );
};

const GaleryWrapper = styled.div`
  background-color: ${({ theme }) => background[theme] || "#f8f8f87d"};

  .gallery {
    position: relative;
    z-index: 9;
  }

  .content {
    width: 100%;
    padding: 60px 0 0;
    z-index: 3;
    max-width: 960px;
    margin: auto;

    @media only screen and (min-width: 800px) {
      padding: 60px 20px;
    }

    h1 {
      font-size: 58px;
      font-family: Bickham;
      text-align: center;
      margin: 0 0 48px;
      letter-spacing: 2px;
      font-weight: normal;
    }
    h3 {
      color: #88929a;
      text-align: center;
      font-size: 14px;
    }

    p {
      color: #88929a;
      text-align: center;
      line-height: 1.6;
    }

    Button {
      display: block;
      margin: 20px auto 10px;
    }

    Button {
      display: block;
      margin: 20px auto 10px;
      background-color: #88929a;
      :hover {
        background-color: #5f686f;
      }
    }
    .social-media-container {
      display: flex;
      justify-content: center;
      margin-bottom: 20px;
    }
    .social-media-item {
      height: 32px;
      width: 32px;
      border-radius: 16px;
      background-color: #88929a;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 4px;
    }
  }
`;

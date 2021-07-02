import React from "react";

const imgStyle = {
  transition: "transform .135s cubic-bezier(0.0,0.0,0.2,1),opacity linear .15s",
};

const cont = {
  backgroundColor: "#eee",
  cursor: "pointer",
  overflow: "hidden",
  position: "relative",
};

const SelectedImage = ({
  photo,
  margin,
  direction,
  top,
  left,
  index,
  openPhoto,
}) => {
  if (direction === "column") {
    cont.position = "absolute";
    cont.left = left;
    cont.top = top;
  }

  return (
    <div style={{ margin, height: photo.height, width: photo.width, ...cont }}>
      <img
        alt={photo.title}
        style={imgStyle}
        {...photo}
        onClick={() => {
          openPhoto(index);
        }}
        data-aos="zoom-in"
      />
    </div>
  );
};

export default SelectedImage;

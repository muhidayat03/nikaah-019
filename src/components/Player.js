import React, { useState, useEffect } from "react";
import Mute from "../assets/image/mute.png";
import Unmute from "../assets/image/unmute.png";

export const useAudio = (url) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    if (!playing) {
      audio.pause();
    } else {
      audio
        .play()
        .then(() => {
          audio.loop = true;
        })
        .catch((err) => {
          setPlaying(false);
          console.log(err);
        });
    }
  }, [audio, playing]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.pause();
      audio.removeEventListener("ended", () => setPlaying(false));
      setPlaying(false);
    };
  }, [audio]);

  return [playing, toggle];
};

const Player = ({ playing, toggle, color }) => {
  return (
    <div
      className="hover"
      id=""
      onClick={toggle}
      style={{
        height: 36,
        width: 36,
        borderRadius: 30,
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: color ? color : "#D9B799",
        position: "fixed",
        bottom: 70,
        right: 20,
        zIndex: 100000,
      }}
    >
      <img src={playing ? Unmute : Mute} height={15} alt="audio player" />
    </div>
  );
};

export default Player;

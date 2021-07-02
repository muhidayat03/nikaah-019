import React from "react";
import { useThemeContext } from "../themeContext";
import Button from "../components/Button";
import themeData from "../themeData";
import Paint from "./image/paint-icon.svg";
import { useHistory, useParams } from "react-router";

const ColorPicker = () => {
  const { setTheme, activeTheme } = useThemeContext();
  const param = useParams();
  const history = useHistory();

  return (
    <div
      style={{
        position: "fixed",
        zIndex: 999999999,
        width: "100%",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 800,
          margin: "auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 10,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: 10,
            borderRadius: 100,
            background: "white",
          }}
        >
          <img
            src={Paint}
            height={24}
            alt="paint"
            style={{
              marginRight: 10,
              display: "block",
            }}
          />

          <div
            onClick={() => setTheme("grey")}
            style={{
              width: 20,
              height: 20,
              background: themeData.grey.dark,
              borderRadius: "50%",
              marginRight: 10,
              border: activeTheme.name === "grey" ? "2px solid black" : "none",
            }}
          />
          <div
            onClick={() => setTheme("pink")}
            style={{
              width: 20,
              height: 20,
              background: themeData.pink.dark,
              borderRadius: "50%",
              marginRight: 10,

              border: activeTheme.name === "pink" ? "2px solid black" : "none",
            }}
          />
          <div
            onClick={() => setTheme("green")}
            style={{
              width: 20,
              height: 20,
              background: themeData.green.dark,
              borderRadius: "50%",
              marginRight: 10,
              border: activeTheme.name === "green" ? "2px solid black" : "none",
            }}
          />
          <div
            onClick={() => setTheme("blue")}
            style={{
              width: 20,
              height: 20,
              background: themeData.blue.dark,
              borderRadius: "50%",
              border: activeTheme.name === "blue" ? "2px solid black" : "none",
            }}
          />
        </div>

        <div>
          <Button
            style={{
              background: "black",
            }}
            onClick={() => history.push(`/${param?.name || ""}`)}
          >
            Ganti template 1
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;

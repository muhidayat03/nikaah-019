import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../components/Button";
import firebase from "../util/firebase";
import userData from "./userData";
import { ReactComponent as CountDownKiri } from "./image/count-down-kiri.svg";
import { useThemeContext } from "../themeContext";

const ID_NIKAAH = userData.ID_NIKAAH;

const MessageSection = () => {
  const [messages, setMessages] = useState([]);
  const [userName, setUserName] = useState("");
  const [userMsg, setUserMsg] = useState("");
  const [userHadir, setuserHadir] = useState("");
  const { activeTheme } = useThemeContext();

  const sendMessage = () => {
    const todoRef = firebase.database().ref(ID_NIKAAH);

    const msg = {
      date: new Date().getTime(),
      userName: userName,
      userMsg: userMsg,
      userHadir: userHadir,
    };
    setUserName("");
    setUserMsg("");
    setuserHadir("");

    todoRef.push(msg);
  };

  useEffect(() => {
    const todoRef = firebase.database().ref(ID_NIKAAH);
    todoRef.on("value", (snapshot) => {
      const messages = snapshot.val();
      const messageList = [];
      for (let id in messages) {
        messageList.push({ id, ...messages[id] });
      }
      messageList.reverse();
      setMessages(messageList);
    });
  }, []);

  return (
    <MapSectionWrapper>
      <CountDownKiri className="kiri" fill={activeTheme.dark} />

      <div className="content" data-aos="fade-in">
        <h1>Kartu Ucapan</h1>
        <div className="message-input-wrapper">
          <div className="form-group">
            <label>Nama</label>
            <input
              value={userName}
              placeholder="Nama anda"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Pesan Singkat</label>
            <textarea
              value={userMsg}
              rows={4}
              placeholder="Tulis pesan singkat"
              onChange={(e) => setUserMsg(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Kehadiran</label>
            <div style={{ display: "flex", marginTop: 10 }}>
              <div style={{ marginRight: 30 }}>
                <label className="container">
                  Hadir
                  <input
                    type="radio"
                    onChange={() => setuserHadir(1)}
                    checked={userHadir === 1}
                    name="hadir"
                  />
                  <span className="checkmark"></span>
                </label>
              </div>
              <div>
                <label className="container">
                  Tidak
                  <input
                    onChange={() => setuserHadir(2)}
                    checked={userHadir === 2}
                    type="radio"
                    name="tidak"
                  />
                  <span className="checkmark"></span>
                </label>
              </div>
            </div>
          </div>
          <Button
            className="message-button"
            onClick={sendMessage}
            disabled={
              !userMsg || !userMsg.trim() || !userName || !userName.trim()
            }
          >
            Kirim Ucapan
          </Button>
        </div>
      </div>
      <div className="content" data-aos="fade-in">
        <h1>Ucapan Terbaru</h1>
        <div className="message-wrapper" data-aos="zoom-in">
          <div className="message-box">
            {messages.map((item, index) => (
              <MessageComponent
                title={item.userName}
                message={item.userMsg}
                hadir={item.userHadir}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </MapSectionWrapper>
  );
};

const MessageComponent = ({ title, message, hadir }) => {
  return (
    <MessageItem>
      <div className="left">
        <div>
          <div className="message-avatar">
            <p>{title.charAt(0).toUpperCase()}</p>
          </div>
        </div>
        <div className="message-right">
          <p className="message-title">{title}</p>

          <p className="message-desc">{message}</p>
        </div>
      </div>
      <div>
        {hadir === 1 ? (
          <span className="hadir">Hadir</span>
        ) : hadir === 2 ? (
          <span className="not-hadir">Tidak Hadir</span>
        ) : null}
      </div>
    </MessageItem>
  );
};

export default MessageSection;

const MessageItem = styled.div`
  padding: 10px;
  color: #ccc;
  border-radius: 8px;
  display: flex;

  background-color: white;
  box-shadow: 0px 3px 6px #0000000d;
  margin-bottom: 10px;
  :last-child {
    margin-bottom: 0;
  }

  .left {
    display: flex;
    flex: 1;
  }

  .message-avatar {
    height: 40px;
    width: 40px;
    background-color: #88929a;

    border-radius: 21px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1px;
    p {
      color: white;
      font-size: 20px;
      margin: 0;
      font-family: "Dancing Script", cursive;
    }
  }

  .message-title {
    font-weight: bold;
    color: #414041;
    margin-bottom: 4px;
  }

  p {
    margin: 0;
  }

  .message-desc {
    color: #8d92a4;
  }

  .message-right {
    margin-left: 10px;
  }
  .hadir {
    background-color: #62a365;
    font-size: 10px;
    margin: 0;
    padding: 4px 8px;
    border-radius: 10px;
    color: white;
  }
  .not-hadir {
    background-color: #9ba0a5;
    font-size: 10px;
    margin: 0;
    padding: 4px 8px;
    border-radius: 10px;
    color: white;
  }
`;

const MapSectionWrapper = styled.div`
  background-color: #ffff;
  position: relative;

  .kiri {
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    height: auto;
  }

  .content {
    width: 100%;
    padding: 60px 0;
    z-index: 3;
    max-width: 960px;
    margin: auto;
    position: relative;

    h1 {
      font-size: 18px;
      font-family: Raleway;
      text-align: center;
      margin: 0 0 20px;
      font-weight: 600;
      color: #88929a;
    }

    Button {
      margin: 20px auto;
      display: block;
    }
    Button.message-button {
      margin: 0 auto;
      display: block;
    }

    .message-input-wrapper {
      width: 600px;
      margin: auto;
      border-radius: 20px;
      max-width: 90vw;
      padding: 20px;
      background-color: white;
      box-shadow: 0px 3px 6px #88929a29;
    }

    .message-wrapper {
      width: 600px;
      height: 400px;
      margin: auto;
      border-radius: 20px;
      max-width: 90vw;
      padding: 20px 0;
      /* background-color: #989fab; */
    }

    .message-box {
      overflow-y: auto;
      height: 100%;
      padding: 0 20px;
    }

    input,
    textarea {
      padding: 14px;
      border: oldlace;
      border-radius: 4px;
      width: 100%;
      margin: 10px 0;
      font-size: 13px;
      font-family: Raleway;
      border: 1px solid #f6f5f3;

      ::placeholder {
        color: #cccccc;
      }
    }

    label {
      font-size: 14px;
      color: white;
      color: #88929a;
    }

    .form-group {
      margin-bottom: 10px;
    }

    Button {
      :disabled {
        background-color: #dcdcdc;
      }
      background-color: #88929a;
      :hover {
        background-color: #5f686f;
      }
    }
  }
`;

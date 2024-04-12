import React, { useState, useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import profile from "../../../assets/image/profile.svg";
import logo from "../../../assets/image/app_logo_small.png";
import logoName from "../../../assets/image/app_name.png";
import SendIcon from "@mui/icons-material/Send";

export default function ChattingSolveProblem() {
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const inputRef = useRef(null);
  const [socket, setSocket] = useState(null);

  const newSocket = new WebSocket("ws://your-websocket-url");

  useEffect(() => {
    newSocket.onopen = () => {
      console.log("웹소켓 연결이 열렸습니다.");
      setSocket(newSocket);
    };

    newSocket.onmessage = (event) => {
      console.log("웹소켓 메시지를 받았습니다:", event.data);
      receiveMessage(event.data);
      setIsTyping(false);
    };

    newSocket.onclose = () => {
      console.log("웹소켓 연결이 닫혔습니다.");
    };

    return () => {
      if (socket) {
        socket.close();
      }
    };
  }, []);

  useEffect(() => {
    if (!isTyping && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isTyping]);

  const sendMessage = async () => {
    if (message.trim() !== "") {
      setChats(prevChats => [{ message, fromMe: true }, ...prevChats]);
      setMessage("");

      try {
        await socket.send(message);
      } catch(e) {
        console.log("웹소켓 연결이 없습니다.");
        newSocket.onopen = () => {
          console.log("웹소켓 연결이 열렸습니다.");
          setSocket(newSocket);
        };
      }
      setIsTyping(true);
    }
  };

  const receiveMessage = (message) => {
    setChats(prevChats => [{ message, fromMe: false }, ...prevChats]);
  };

  return (
    <Wrapper>
      <SubWrapper>
        <LeftSection>
          <ProfileSection>
            <UserProfile src={profile} alt="profile image" width={50}/>
            <UserInfo>
              <UserName>jiwon yoo</UserName>
              <Useremail>jna2158@naver.com</Useremail>
            </UserInfo>
          </ProfileSection>
          <Hr />
        </LeftSection>
        <RightSection>
          <TitleSection>
            <img src={logo} alt="logo" width={20}/>
            <LogoName src={logoName} alt="logo name"/>
          </TitleSection>
          <ChatSection>
            {chats.map((chat, index) => (
              <ChatBubble key={index} fromMe={chat.fromMe}>{chat.message}</ChatBubble>
            ))}
          </ChatSection>
          <TypeSection>
          <TypeInput
            ref={inputRef}
            placeholder={isTyping ? "상대방이 입력 중입니다..." : "메시지를 작성해주세요."}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            disabled={isTyping}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && e.ctrlKey) {
                e.preventDefault();
                sendMessage();
              }
            }}
          />
          <SendIconWrapper onClick={sendMessage}>
            <SendIcon color="primary" sx={{ fontSize: 35 }} style={{cursor: "pointer"}}/>
          </SendIconWrapper>
        </TypeSection>
        </RightSection>
      </SubWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #171717;
  width: 100vw;
  height: auto;
  padding: 2% 2% 2% 4%;
  min-height: 100vh;
`; 
const SubWrapper = styled.div`
  width: 90vw;
  height: 85vh;
  margin-top: 3%;
  background-color: #242526;
  border-radius: 6px;
  border: 2px solid #343536;
  display: flex;
`;
const LeftSection = styled.section`
  background-color: #1C1D1F;
  width: 20vw;
  height: 85vh;
`;
const RightSection = styled.section`
  width: 80vw;
  height: 85vh;
  padding: 2%;
`
const ProfileSection = styled.div`
  padding: 10% 10% 0 10%;
  display: flex;
`;
const UserProfile = styled.img`

`;
const UserInfo = styled.div`
  padding-left: 7.5%;
`;
const UserName = styled.div`
  font-size: 1.5rem;
  color: #e0e0e0;
`;
const Useremail = styled.div`
  font-size: 1.3rem;
  color: #9a9a9a;
`;
const Hr = styled.hr`
  height: 1.5px;
  border: none;
  width: 90%;
  margin-left: 5%;
  background-color: #6f6f6f63;
`;
const TitleSection = styled.div`
  display: flex;
  padding: 1%;
  background-color: #1f2123;
  border-radius: 30px;
`;
const LogoName = styled.img`
  margin-left: 1%;
  margin-top: .25%;
  width: 15%;
  height: 15%;
`;
const ChatSection = styled.div`
  display: flex;
  flex-direction: column-reverse;
  height: 65vh;
  overflow-y: auto;
  padding: 10px;
`;
const ChatBubble = styled.div<{fromMe: boolean}>`
  background-color: #3f4041;
  color: #e0e0e0;
  border-radius: 10px;
  padding: 8px 12px;
  margin-bottom: 10px;
  align-self: ${({ fromMe }) => fromMe ? "flex-end" : "flex-start"};
  ${({ fromMe }) => fromMe && css`
    background-color: #2979ff;
    color: #fff;
  `}
  white-space: pre-wrap;
`;
const TypeSection = styled.div`
  display: flex;
  align-items: center;
  height: 10vh;
`;
const TypeInput = styled.textarea`
  padding: 10px;
  width: 100%;
  height: 7vh;
  border-radius: 10px;
  font-size: 18px;
  color: #e0e0e0;
  outline: none;
  border: none;
  transition: border-color 0.3s;
  background-color: #28292E;
  resize: none;
  &:focus {
    border: 1px solid;
    border-color: dodgerblue;
  }
`;
const SendIconWrapper = styled.div`
  margin-left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #e0e0e0;
`;
const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const TypingFeedback = styled.div`
  margin-left: 10px;
  font-size: 14px;
  color: #9a9a9a;
`;


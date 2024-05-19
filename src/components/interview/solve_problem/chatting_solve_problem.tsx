import React, { useState, useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import profile from "../../../assets/image/profile.svg";
import logo from "../../../assets/image/logo/app_logo_small.png";
import logoName from "../../../assets/image/logo/app_name.png";
import SendIcon from "@mui/icons-material/Send";
import { getUserInfo } from "../../../services/login_service";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { WS_URL } from "../../../shared/api_constant";

export default function ChattingSolveProblem() {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const inputRef = useRef(null);
  const [socket, setSocket] = useState(null);
  const selectedCatetory = useSelector((state: any) => state.interview.selectedCategory);
  const problem = {};
  const [current, setCurrent] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      // setIsTyping(true);
      await userInfo();
      await connectWS();
      reqProblem();
    };
    fetchData();
  }, []);
  
  const userInfo = async () => {
    try {
      const res = await getUserInfo();
      const pkNumber = res.data.pk;8
      localStorage.setItem("ACCESS_TOKEN", res.data.access_token);
      return pkNumber;
    } catch (err) {
      console.log(err);
      return null;
    }
  };
  
  const connectWS = async () => {
    const pkNumber = await userInfo();
    
    if (!pkNumber) return;
  
    const newSocket = new WebSocket(`${WS_URL}/ws/chat/${pkNumber}`);
    newSocket.onopen = () => {
      console.log("웹소켓 연결이 열렸습니다.");
      setSocket(newSocket);
      sendFirstMessage(newSocket, pkNumber);
    };
  
    newSocket.onmessage = (event) => {
      const data = JSON.parse(JSON.parse(event.data));
      console.log("웹소켓 메시지를 받았습니다:", data);
      receiveMessage(data);
      setCurrent({
        category: data.category,
        question: data.question,
        user_answer: ""
      });
      if (data.scoring) {
        setTimeout(() => {
          navigate("/interview-score", { state: data.scoring});
        }, 3000);
      }
    };
  
    newSocket.onclose = () => {
      console.log("웹소켓 연결이 닫혔습니다.");
    };
  
    return () => {
      if (socket) {
        socket.close();
      }
    };
  };
  

  const reqProblem = () => {
    selectedCatetory.map(el => problem[el.id] = el.problems);
  };

  const sendFirstMessage = (socket, pkNumber) => {
    const message = {
      userName: localStorage.getItem("username"),
      userPK: pkNumber,
      options: problem
    };
    socket.send(JSON.stringify(message));
  };

  useEffect(() => {
    if (!isTyping && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isTyping]);

  const sendMessage = async () => {
    if (message.trim() !== "") {
      setChats(prevChats => [{ message, type: "user" }, ...prevChats]);
      try {
        console.log("웹소켓 메시지를 보냈습니다.", JSON.stringify(message));
        await socket.send(JSON.stringify({
          category: current.category,
          question: current.question,
          user_answer: message
        }));
        setMessage("");
      } catch(e) {
        console.log("웹소켓 연결이 없습니다.");
        setMessage("");
        connectWS();
      }
    }
  };

  const receiveMessage = (data) => {
    setChats(prevChats => [{ message: data.text, type: data.type }, ...prevChats]);
    setCurrent({
      category: data.category, 
      question: data.questing, 
      user_answer: ""
    });
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
              <ChatBubble key={index} type={chat.type}>{chat.message}</ChatBubble>
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
const ChatBubble = styled.div<{type: string}>`
  background-color: #3f4041;
  color: #e0e0e0;
  border-radius: 10px;
  padding: 8px 12px;
  margin-bottom: 10px;
  align-self: ${({ type }) => type === "user" ? "flex-end" : "flex-start"};
  ${({ type }) => type === "user" && css`
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


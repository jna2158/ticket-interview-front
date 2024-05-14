import React from "react";
import styled from "styled-components";
import AddCardIcon from '@mui/icons-material/AddCard';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { interviewType } from "../redux/interview_slice";

export default function SelectCategory() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClickCategoryBtn = (type: "Ticket" | "Video" | "Chatting") => {
    dispatch(interviewType(type));
    navigate("/interview-setting", { state: type });
  };

  return (
    <Wrapper>
      <Title>STEP1. 진행하고자 하는 면접 방식을 선택해주세요.</Title>
      <BoxWrapper>
        <Box onClick={() => handleClickCategoryBtn("Ticket")}>
          <AddCardIcon sx={{fontSize: 150, color: "#1864ab"}} />
          <Info>티켓 형식의 면접</Info>
          <SubInfo>시험보듯이 한 문제씩 풀어나가는 티켓 형식의 면접입니다.</SubInfo>
        </Box>
        <Box onClick={() => handleClickCategoryBtn("Chatting")}>
          <MarkUnreadChatAltIcon sx={{fontSize: 150, color: "#e67700"}} />
          <Info>채팅 형식의 면접</Info>
          <SubInfo>대화하듯이 풀어가는 채팅 형식의 면접입니다.</SubInfo>
        </Box>
      </BoxWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: linear-gradient(to bottom, #1e1e1e, #000000);
`;
const Title = styled.p`
  display: flex;
  justify-content: center;
  padding-top: 8vw;
  font-size: 30px;
  font-weight: 500;
  color: #b3d2ff;
  & span {
    color: #4089f7;
  }
`;
const BoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 25vw;
  height: 50vh;
  margin: 20px 100px 100px 100px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background-color: #1B1925;
  cursor: pointer;
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.1);
  }
`;
const Info = styled.p`
  font-size: 25px;
  color: white;
`;
const SubInfo = styled.p`
  font-size: 16px;
`;
import React from "react";
import Avatar from "@mui/material/Avatar";
import profile from "../../assets/image/profile/profile.jpg";
import styled from "styled-components";

export default function Userinfo() {
  return (
    <Wrapper>
      <Avatar alt="user profile" src={profile} sx={{ width: 95, height: 95 }} />
      <InfoWrapper>
        <Username>jiwon</Username>
        <Useremail>jiwon@gmail.com</Useremail>
      </InfoWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  margin-top: 5vh;
  margin-left: 5vw;
`;
const InfoWrapper = styled.section`
  margin-left: 3vw;
`;
const Username = styled.div`
  margin-bottom: 3px;
  font-size: 35px;
  color: white;
`;
const Useremail = styled.div`
  font-size: 18px;
`;
import React from "react";
import styled from "styled-components";

export default function LoginModal({setIsLoginModalOpen}: {setIsLoginModalOpen: any}) {

  return(
    <LoginModalOverlay>
      <Modal>
        <SpanBox><i className="fa-solid fa-x" onClick={() => setIsLoginModalOpen(false)}></i></SpanBox>
        <Title>지금 로그인하고<br/><span>Ticket Interview에서</span><br/>당신의 면접을 더욱 효과적으로 준비하세요.</Title>
      </Modal>
    </LoginModalOverlay>
  )
}

/** Style */
const LoginModalOverlay = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`;

const Modal = styled.div`
  padding: 2rem;
  background-color: ${({theme}) => theme.colors.gray0};
  border-radius: 1.3rem;
  position: fixed;
  display: flex;
  flex-direction: column;
  gap: 10px;
  top: 50%;
  left: 50%;
  width: 35vw;
  height: auto;
  transform: translate(-50%, -50%);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const SpanBox = styled.span`
  i.fa-solid.fa-x {
    display: flex;
    justify-content: flex-end;
    font-size: 20px;
    cursor: pointer;
  }
`;
const Title = styled.div`
  font-family: 'Nano Sans Korean';
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 2.8rem;
  color: #495057;
    & span {
      font-weight: 700;
      color: #343a40;
    }
`;
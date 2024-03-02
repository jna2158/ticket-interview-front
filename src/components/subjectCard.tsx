import React, { useState } from "react";
import styled from "styled-components"

export default function SubjectCard() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  }

  return (
    <Wrapper>
      <Card checked={isChecked}>
        <Icon>
          <i className="bi bi-clipboard-data"></i>
        </Icon>
        <TitleWrapper>
          <Title>자료구조</Title>
          <Content>데이터를 효율적으로 사용할 수 있도록 정리하는 방법</Content>
        </TitleWrapper>
        <Checkbox className="form-check form-check-lg">
          <Input className="form-check-input" type="checkbox" checked={isChecked} onChange={handleCheckboxChange}/>
          <label htmlFor="cb1"></label>
        </Checkbox>
      </Card>
    </Wrapper>
  )
}

const Wrapper = styled.div`
`;
const Card = styled.div<{checked: boolean}>`
  width: 30vw;
  height: 13vh;
  border-radius: 15px;
  display: flex;
  border: 1px solid ${props => props.checked ? "#0066ff" : "#999"};
  background-color: ${props => props.checked ? "#0066ff" : "#F5F5F5"};
`;
const Icon = styled.div`
  font-size: 70px;
  width: 8vw;
  text-align: center;
  align-items: center;
`;
const TitleWrapper = styled.div`
  margin-top: 4%;
`;
const Checkbox = styled.div`
  position: fixed;
  margin-left: 27%;
  &:checked {
    display: none;
  }
`;
const Input = styled.input`
  width: 1.6em;
  height: 1.6em;
  border-radius: 50%;
  border: 1px solid #999;
  appearance: none;
  cursor: pointer;
  transition: background 0.2s;

  &:checked {
    background: #4388F4;
  }
`;
const Title = styled.div`
  font-size: 25px;
  font-weight: 600;
`;
const Content = styled.div``;
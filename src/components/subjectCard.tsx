import React, { useState } from "react";
import styled from "styled-components";
import "../assets/image/check-21.svg";
import dataStructure from "../assets/image/data-structure-icon.png";
import python from "../assets/image/python-icon.svg";
import database from "../assets/image/database-icon.png";
import javascript from "../assets/image/javascript-icon.png";
import person from "../assets/image/person-icon.png";
import programming from "../assets/image/programming-icon.png";
import network from "../assets/image/network-icon.png";
import algorithm from "../assets/image/algorithm-icon.png";
import operating from "../assets/image/operating-icon.png";

export default function SubjectCard({ subjectArr, setSubjectArr }: any) {
  const handleCheckboxChange = (target: string) => {
    setSubjectArr(subjectArr.map((subject: { id: string; checked: any; }) => {
      if (subject.id === target) {
        return {
          ...subject,
          checked: !subject.checked
        };
      }
      return subject;
    }));
  }

  return (
    <Wrapper>
      <div className="row">
        <Card className="col" checked={subjectArr.find((el: { id: string; }) => el.id === "DataStructure")?.checked} onClick={(e) => { handleCheckboxChange("DataStructure") }}>
          <Icon>
            <img src={dataStructure} width={75}/>
          </Icon>
          <TitleWrapper>
            <Title>자료구조</Title>
            <Content>데이터를 효율적으로 사용할 수 있도록 정리하는 방법</Content>
          </TitleWrapper>
          <div>
            <Label htmlFor="DataStructure">
              <Input type="checkbox" id="DataStructure" name="DataStructure" checked={subjectArr.find((el: { id: string; }) => el.id === "DataStructure")?.checked} />
            </Label>
          </div>
        </Card>
        
        <Card className="col" checked={subjectArr.find((el: { id: string; }) => el.id === "OperatingSystem")?.checked} onClick={(e) => { handleCheckboxChange("OperatingSystem") }}>
          <Icon>
            <img src={operating} width={75}/>
          </Icon>
          <TitleWrapper>
            <Title>운영체제</Title>
            <Content>컴퓨터 소프트웨어의 동작원리를 전반적으로 다루는 영역</Content>
          </TitleWrapper>
          <div>
            <Label htmlFor="OperatingSystem">
              <Input type="checkbox" id="OperatingSystem" name="OperatingSystem" checked={subjectArr.find((el: { id: string; }) => el.id === "OperatingSystem")?.checked}/>
            </Label>
          </div>
        </Card>
        
        <Card className="col" checked={subjectArr.find((el: { id: string; }) => el.id === "Networking")?.checked} onClick={(e) => { handleCheckboxChange("Networking") }}>
          <Icon>
          < img src={network} width={75}/>
          </Icon>
          <TitleWrapper>
            <Title>네트워크</Title>
            <Content>컴퓨터 네트워크의 프로토콜과 서비스, 어플리케이션들 속에 담긴 법칙</Content>
          </TitleWrapper>
          <div>
            <Label htmlFor="Networking">
              <Input type="checkbox" id="Networking" name="Networking" checked={subjectArr.find((el: { id: string; }) => el.id === "Networking")?.checked}/>
            </Label>
          </div>
        </Card>
      </div>

      <div className="row">
        <Card className="col" checked={subjectArr.find((el: { id: string; }) => el.id === "Database")?.checked} onClick={(e) => { handleCheckboxChange("Database") }}>
          <Icon>
            <img src={database} width={75}/>
          </Icon>
          <TitleWrapper>
            <Title>데이터베이스</Title>
            <Content>여러 사람이 공유하여 사용할 목적으로 체계화해 통합, 관리하는 데이터의 집합</Content>
          </TitleWrapper>
          <div>
            <Label htmlFor="Database">
              <Input type="checkbox" id="Database" name="Database" checked={subjectArr.find((el: { id: string; }) => el.id === "Database")?.checked}/>
            </Label>
          </div>
        </Card>
        
        <Card className="col" checked={subjectArr.find((el: { id: string; }) => el.id === "GeneralProgramming")?.checked} onClick={(e) => { handleCheckboxChange("GeneralProgramming") }}>
          <Icon>
            <img src={programming} width={70}/>
          </Icon>
          <TitleWrapper>
            <Title>프로그래밍 일반</Title>
            <Content>프로그래밍의 주요 이론과 원리</Content>
          </TitleWrapper>
          <div>
            <Label htmlFor="GeneralProgramming">
              <Input type="checkbox" id="GeneralProgramming" name="GeneralProgramming" checked={subjectArr.find((el: { id: string; }) => el.id === "GeneralProgramming")?.checked}/>
            </Label>
          </div>
        </Card>
        
        <Card className="col" checked={subjectArr.find((el: { id: string; }) => el.id === "Algorithm")?.checked} onClick={(e) => { handleCheckboxChange("Algorithm") }}>
          <Icon>
            <img src={algorithm} width={75}/>
          </Icon>
          <TitleWrapper>
            <Title>알고리즘</Title>
            <Content>어떠한 문제를 해결하기 위한 일련의 절차나 방법을 공식화한 형태로 표현한 것</Content>
          </TitleWrapper>
          <div>
            <Label htmlFor="Algorithm">
              <Input type="checkbox" id="Algorithm" name="Algorithm" checked={subjectArr.find((el: { id: string; }) => el.id === "Algorithm")?.checked}/>
            </Label>
          </div>
        </Card>
      </div>

      <div className="row"> 
        <Card className="col" checked={subjectArr.find((el: { id: string; }) => el.id === "Python")?.checked} onClick={(e) => { handleCheckboxChange("Python") }}>
          <Icon>
            <img src={python} width={70}/>
          </Icon>
          <TitleWrapper>
            <Title>Python</Title>
            <Content>웹 애플리케이션, 소프트웨어 개발, 데이터 과학, 기계 학습에 널리 사용되는 프로그래밍 언어</Content>
          </TitleWrapper>
          <div>
            <Label htmlFor="Python">
              <Input type="checkbox" id="Python" name="Python" checked={subjectArr.find((el: { id: string; }) => el.id === "Python")?.checked}/>
            </Label>
          </div>
        </Card>

        <Card className="col" checked={subjectArr.find((el: { id: string; }) => el.id === "Javascript")?.checked} onClick={(e) => { handleCheckboxChange("Javascript") }}>
          <Icon>
            <img src={javascript} width={75}/>
          </Icon>
          <TitleWrapper>
            <Title>Javascript</Title>
            <Content>동적 상호작용형 웹사이트를 만드는 데 사용되는 프로그래밍 언어</Content>
          </TitleWrapper>
          <div>
            <Label htmlFor="Javascript">
              <Input type="checkbox" id="Javascript" name="Javascript" checked={subjectArr.find((el: { id: string; }) => el.id === "Javascript")?.checked}/>
            </Label>
          </div>
        </Card>
                
        <Card className="col" checked={subjectArr.find((el: { id: string; }) => el.id === "Personality")?.checked} onClick={(e) => { handleCheckboxChange("Personality") }}>
          <Icon>
            <img src={person} width={75}/>
          </Icon>
          <TitleWrapper>
            <Title>인성</Title>
            <Content>인성, 가치관, 태도, 업무 능력 점검하는 영역</Content>
          </TitleWrapper>
          <div>
            <Label htmlFor="Personality">
              <Input type="checkbox" id="Personality" name="Personality" checked={subjectArr.find((el: { id: string; }) => el.id === "Personality")?.checked}/>
            </Label>
          </div>
        </Card>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
`;
const Card = styled.div<{checked: any}>`
  width: 30vw;
  height: 14vh;
  border-radius: 15px;
  display: flex;
  border: ${props => props.checked ? "3px" : null} solid ${props => props.checked ? "#364fc7" : null};
  background-color: #2a2a2ae9;
  margin: 2%;
  cursor: pointer;
`;
const Icon = styled.div`
  font-size: 70px;
  width: 8vw;
  text-align: center;
  align-items: center;
`;
const TitleWrapper = styled.div`
  margin-top: 4%;
  width: 100%;
  color: #EFEFF1;
`;
const Title = styled.div`
  font-size: 27px;
  font-weight: 600;
  color: #ffffff;
`;
const Content = styled.div`
  color: #e1e5f2;
`;
const Input = styled.input`
  width: 1.6em;
  height: 1.6em;
  border-radius: 50%;
  appearance: none;
  cursor: pointer;
  &:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: #364fc7;
  }
`;
const Label = styled.label`
  display: flex;
  align-items: center;
  user-select: none;
`;
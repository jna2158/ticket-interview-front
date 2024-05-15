import React from "react";
import dataStructure from "../../assets/image/data-structure-icon.png";
import python from "../../assets/image/python-icon.png";
import database from "../../assets/image/database-icon.png";
import javascript from "../../assets/image/javascript-icon.png";
import person from "../../assets/image/person-icon.png";
import programming from "../../assets/image/programming-icon.png";
import network from "../../assets/image/network-icon.png";
import algorithm from "../../assets/image/algorithm-icon.png";
import operating from "../../assets/image/operating-system-icon.png";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { selectedCategory } from "../../redux/interview_slice";

export default function SubjectCard({ subjectArr }: any) {
  const dispatch = useDispatch();

  const handleCheckboxChange = (target: string) => {
    const subject = subjectArr.map((subject: { id: string; checked: any; }) => {
      if (subject.id === target) {
        return {
          ...subject,
          checked: !subject.checked
        };
      }
      dispatch(selectedCategory(subject));
      return subject;
    })

    dispatch(selectedCategory(subject));
  }

  const isChecked = (categoryName: string) => {
    return subjectArr.find((el: { id: string; }) => el.id === categoryName)?.checked
  }

  return (
    <Wrapper>
      <CardWrapper className="row">
        <Card className="col" checked={isChecked("DataStructure")} onClick={(e) => { handleCheckboxChange("DataStructure") }}>
          <Icon>
            <img src={dataStructure} width={90} />
          </Icon>
          <TitleWrapper>
            <Title>자료구조</Title>
            <Content>데이터를 구조적으로 표현하는 방식과 이를 구현하는 데 필요한 알고리즘에 대해 논하는 기초이론</Content>
          </TitleWrapper>
          <LabelWrapper>
            <Label htmlFor="DataStructure">
              <Input type="checkbox" id="DataStructure" name="DataStructure" checked={isChecked("DataStructure")} />
            </Label>
          </LabelWrapper>
        </Card>
        
        <Card className="col" checked={isChecked("OperatingSystem")} onClick={(e) => { handleCheckboxChange("OperatingSystem") }}>
          <Icon>
            <img src={operating} width={90}/>
          </Icon>
          <TitleWrapper>
            <Title>운영체제</Title>
            <Content>컴퓨터 소프트웨어의 동작원리를 전반적으로 다루는 영역</Content>
          </TitleWrapper>
          <LabelWrapper>
            <Label htmlFor="OperatingSystem">
              <Input type="checkbox" id="OperatingSystem" name="OperatingSystem" checked={isChecked("OperatingSystem")}/>
            </Label>
          </LabelWrapper>
        </Card>
        
        <Card className="col" checked={isChecked("Networking")} onClick={(e) => { handleCheckboxChange("Networking") }}>
          <Icon>
          <img src={network} width={80} />
          </Icon>
          <TitleWrapper>
            <Title>네트워크</Title>
            <Content>컴퓨터 네트워크의 프로토콜과 서비스, 어플리케이션들 속에 담긴 법칙을 통해 설계 방식을 다루는 영역</Content>
          </TitleWrapper>
          <LabelWrapper>
            <Label htmlFor="Networking">
              <Input type="checkbox" id="Networking" name="Networking" checked={isChecked("Networking")}/>
            </Label>
          </LabelWrapper>
        </Card>
      </CardWrapper>

      <CardWrapper className="row">
        <Card className="col" checked={isChecked("Database")} onClick={(e) => { handleCheckboxChange("Database") }}>
          <Icon>
            <img src={database} width={85} />
          </Icon>
          <TitleWrapper>
            <Title>데이터베이스</Title>
            <Content>여러 사람이 공유하여 사용할 목적으로 체계화해 통합, 관리하는 데이터의 집합</Content>
          </TitleWrapper>
          <LabelWrapper>
            <Label htmlFor="Database">
              <Input type="checkbox" id="Database" name="Database" checked={isChecked("Database")}/>
            </Label>
          </LabelWrapper>
        </Card>
        
        <Card className="col" checked={isChecked("GeneralProgramming")} onClick={(e) => { handleCheckboxChange("GeneralProgramming") }}>
          <Icon>
            <img src={programming} width={75} />
          </Icon>
          <TitleWrapper>
            <Title>프로그래밍 일반</Title>
            <Content>프로그래밍의 주요 이론과 원리</Content>
          </TitleWrapper>
          <LabelWrapper>
            <Label htmlFor="GeneralProgramming">
              <Input type="checkbox" id="GeneralProgramming" name="GeneralProgramming" checked={isChecked("GeneralProgramming")}/>
            </Label>
          </LabelWrapper>
        </Card>
        
        <Card className="col" checked={isChecked("Algorithm")} onClick={(e) => { handleCheckboxChange("Algorithm") }}>
          <Icon>
            <img src={algorithm} width={75} />
          </Icon>
          <TitleWrapper>
            <Title>알고리즘</Title>
            <Content>어떠한 문제를 해결하기 위한 일련의 절차나 방법을 공식화한 형태로 표현한 것</Content>
          </TitleWrapper>
          <LabelWrapper>
            <Label htmlFor="Algorithm">
              <Input type="checkbox" id="Algorithm" name="Algorithm" checked={isChecked("Algorithm")}/>
            </Label>
          </LabelWrapper>
        </Card>
      </CardWrapper>

      <CardWrapper className="row"> 
        <Card className="col" checked={isChecked("Python")} onClick={(e) => { handleCheckboxChange("Python") }}>
          <Icon>
            <img src={python} width={75} />
          </Icon>
          <TitleWrapper>
            <Title>Python</Title>
            <Content>웹 애플리케이션, 소프트웨어 개발, 데이터 과학, 기계 학습에 널리 사용되는 프로그래밍 언어</Content>
          </TitleWrapper>
          <LabelWrapper>
            <Label htmlFor="Python">
              <Input type="checkbox" id="Python" name="Python" checked={isChecked("Python")}/>
            </Label>
          </LabelWrapper>
        </Card>

        <Card className="col" checked={isChecked("Javascript")} onClick={(e) => { handleCheckboxChange("Javascript") }}>
          <Icon>
            <img src={javascript} width={80} />
          </Icon>
          <TitleWrapper>
            <Title>Javascript</Title>
            <Content>동적 상호작용형 웹사이트를 만드는 데 사용되는 프로그래밍 언어</Content>
          </TitleWrapper>
          <LabelWrapper>
            <Label htmlFor="Javascript">
              <Input type="checkbox" id="Javascript" name="Javascript" checked={isChecked("Javascript")}/>
            </Label>
          </LabelWrapper>
        </Card>
                
        <Card className="col" checked={isChecked("Personality")} onClick={(e) => { handleCheckboxChange("Personality") }}>
          <Icon>
            <img src={person} width={80} />
          </Icon>
          <TitleWrapper>
            <Title>인성</Title>
            <Content>인성, 가치관, 태도, 업무 능력 점검하는 영역</Content>
          </TitleWrapper>
          <LabelWrapper>
            <Label htmlFor="Personality">
              <Input type="checkbox" id="Personality" name="Personality" checked={isChecked("Personality")}/>
            </Label>
          </LabelWrapper>
        </Card>
      </CardWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
`;
const CardWrapper = styled.div`
  margin-left: 0%;
`;
const Card = styled.div<{checked: boolean}>`
  width: 28vw;
  height: 14vh;
  border-radius: 15px;
  display: flex;
  border: ${props => props.checked ? "3px" : null} solid ${props => props.checked ? "#364fc7" : null};
  background-color: #2a2a2ae9;
  margin: 2%;
  gap: 5%;
  padding: .5% 0% 0% 1.3%;
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
  margin-left: 2%;
  width: 100%;
  color: #EFEFF1;
`;
const Title = styled.div`
  font-size: 27px;
  font-weight: 600;
  margin-bottom: 0.5vh;
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
const LabelWrapper = styled.div`
  margin-right: 3%;
`;
const Label = styled.label`
  display: flex;
  align-items: center;
  user-select: none;
`;
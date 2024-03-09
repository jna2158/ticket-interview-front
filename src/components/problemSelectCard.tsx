import React, { useEffect, useState } from "react";
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

export default function ProblemSelectCard({ subjectArr, setSubjectArr }) {
  const imageMapping = {
    "DataStructure": dataStructure,
    "Python": python,
    "Database": database,
    "Javascript": javascript,
    "Personality": person,
    "GeneralProgramming": programming,
    "Networking": network,
    "Algorithm": algorithm,
    "OperatingSystem": operating
  };
  const isLogged = localStorage.getItem("username") ? true : false;

  useEffect(() => {
    setSubjectArr(subjectArr.map((subject: { id: string; problems: number; }) => {
      return {
        ...subject,
        problems: 1
      };
    }));
  }, []);

  const handleChangeInputValue = (value, id) => {
    if (Number(value) < 1 || 10 < Number(value)) {
      return;
    }
    if (!isLogged) {
      return;
    }

    setSubjectArr(subjectArr.map((subject: { id: string; problems: number; }) => {
      if (subject.id === id) {
        return {
          ...subject,
          problems: Number(value)
        };
      }
      return subject;
    }));
  }

  return (
    <Wrapper>
      {
        subjectArr.map((el, idx) => {
          if (idx % 2 === 0) {
            return (
              <div className="row" key={el.id}>
                {
                  subjectArr[idx] && (
                    <Card className="col">
                      <Icon>
                        <img src={`${imageMapping[subjectArr[idx].id]}`} width={75}/>
                      </Icon>
                      <TitleWrapper>
                        <Title>{subjectArr[idx].title}</Title>
                        <Content>{subjectArr[idx].subTitle}</Content>
                      </TitleWrapper>
                      <NumberWrapper>
                        <NumberI className="bi bi-dash" isLogged={isLogged} onClick={() => handleChangeInputValue(subjectArr[idx].problems - 1, subjectArr[idx].id)}></NumberI>
                        <NumberInput type="number" value={subjectArr[idx].problems} onChange={(e) => handleChangeInputValue(e.target.value, el.id)}/>
                        <NumberI className="bi bi-plus" isLogged={isLogged} onClick={() => handleChangeInputValue(subjectArr[idx].problems + 1, subjectArr[idx].id)}></NumberI>
                      </NumberWrapper>
                      <div>
                        <Label htmlFor={subjectArr[idx].id}>
                          <Input type="checkbox" id={subjectArr[idx].id} name={subjectArr[idx].id}/>
                        </Label>
                      </div>
                    </Card>
                  )
                }
                {
                  subjectArr[idx + 1] && (
                    <Card className="col">
                      <Icon>
                        <img src={`${imageMapping[subjectArr[idx + 1].id]}`} width={75}/>
                      </Icon>
                      <TitleWrapper>
                        <Title>{subjectArr[idx + 1].title}</Title>
                        <Content>{subjectArr[idx + 1].subTitle}</Content>
                      </TitleWrapper>
                      <NumberWrapper>
                        <NumberI className="bi bi-dash" isLogged={isLogged} onClick={() => handleChangeInputValue(subjectArr[idx + 1].problems - 1, subjectArr[idx + 1].id)}></NumberI>
                        <NumberInput type="number" value={subjectArr[idx + 1].problems}/>
                        <NumberI className="bi bi-plus" isLogged={isLogged} onClick={() => handleChangeInputValue(subjectArr[idx + 1].problems + 1, subjectArr[idx + 1].id)}></NumberI>
                      </NumberWrapper>
                      <div>
                        <Label htmlFor={subjectArr[idx + 1].id}>
                          <Input type="checkbox" id={subjectArr[idx + 1].id} name={subjectArr[idx + 1].id} />
                        </Label>
                      </div>
                    </Card>
                  )
                }
                {
                  !subjectArr[idx + 1] && (
                    <div className="col"></div>
                  )
                }
              </div>
            )
          }
        })
      }
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
`;
const Card = styled.div`
  width: 45vw;
  height: 15vh;
  border-radius: 15px;
  display: flex;
  background-color: #2A2A2A;
  margin: 2%;
  cursor: pointer;
`;
const Icon = styled.div`
  font-size: 70px;
  width: 8vw;
  text-align: center;
  align-items: center;
  padding-left: 2%;
  padding-right: 2%;
`;
const NumberWrapper = styled.div`
  display: flex;
`;
const NumberInput = styled.input`
  width: 6vw;
  height: 4vh;
  margin-top: 5vh;
  text-align: center;
  background-color: #2A2A2A;
  color: white;
`;
const NumberI = styled.i<{isLogged: boolean}>`
  font-size: 35px;
  margin-top: 4vh;
  color: ${props => props.isLogged ? "#EFEFF1" : "#3e3d3d"}
`;
const TitleWrapper = styled.div`
  margin-top: 4%;
  width: 100%;
  color: #EFEFF1;
`;
const Title = styled.div`
  font-size: 27px;
  font-weight: 600;
`;
const Content = styled.div``;
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
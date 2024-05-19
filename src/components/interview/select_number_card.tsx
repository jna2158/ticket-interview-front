import React, { useEffect } from "react";
import { useDispatch} from "react-redux";
import styled from "styled-components";
import dataStructure from "../../assets/image/DataStructure.svg";
import python from "../../assets/image/Python.svg";
import database from "../../assets/image/Database.svg";
import javascript from "../../assets/image/Javascript.svg";
import person from "../../assets/image/Personality.svg";
import programming from "../../assets/image/GeneralProgramming.svg";
import network from "../../assets/image/Networking.svg";
import algorithm from "../../assets/image/Algorithm.svg";
import operating from "../../assets/image/OperatingSystem.svg";
import { selectedCategory } from "../../redux/interview_slice";

export default function ProblemSelectCard({ subjectArr }) {
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
  const dispatch = useDispatch();

  useEffect(() => {
    const subject = subjectArr.map((subject: { id: string; problems: number; }) => {
      return {
        ...subject,
        problems: 1
      };
    })
    dispatch(selectedCategory(subject));
  }, []);

  const handleChangeInputValue = (value, id) => {
    if (10 < Number(value)) {
      return;
    }

    const subject = subjectArr.map((subject: { id: string; problems: number; }) => {
      if (subject.id === id) {
        return {
          ...subject,
          problems: Number(value)
        };
      }
      return subject;
    })
    dispatch(selectedCategory(subject));
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
                        <img src={`${imageMapping[subjectArr[idx].id]}`} width={90}/>
                      </Icon>
                      <TitleWrapper>
                        <Title>{subjectArr[idx].title}</Title>
                        <Content>{subjectArr[idx].subTitle}</Content>
                      </TitleWrapper>
                      <NumberWrapper>
                        <NumberI className="bi bi-dash" onClick={() => handleChangeInputValue(subjectArr[idx].problems - 1, subjectArr[idx].id)}></NumberI>
                        <NumberInput type="number" value={subjectArr[idx].problems} onChange={(e) => handleChangeInputValue(e.target.value, el.id)}/>
                        <NumberI className="bi bi-plus" onClick={() => handleChangeInputValue(subjectArr[idx].problems + 1, subjectArr[idx].id)}></NumberI>
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
                        <img src={`${imageMapping[subjectArr[idx + 1].id]}`} width={90}/>
                      </Icon>
                      <TitleWrapper>
                        <Title>{subjectArr[idx + 1].title}</Title>
                        <Content>{subjectArr[idx + 1].subTitle}</Content>
                      </TitleWrapper>
                      <NumberWrapper>
                        <NumberI className="bi bi-dash" onClick={() => handleChangeInputValue(subjectArr[idx + 1].problems - 1, subjectArr[idx + 1].id)}></NumberI>
                        <NumberInput type="number" value={subjectArr[idx + 1].problems}/>
                        <NumberI className="bi bi-plus" onClick={() => handleChangeInputValue(subjectArr[idx + 1].problems + 1, subjectArr[idx + 1].id)}></NumberI>
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
                    <Card className="col" style={{visibility: "hidden"}}></Card>
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
  padding: 1% 0% 0% 1%;
  cursor: pointer;
`;
const Icon = styled.div`
  width: 15vw;
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
const NumberI = styled.i`
  font-size: 35px;
  margin-top: 4vh;
  color: #EFEFF1;
`;
const TitleWrapper = styled.div`
  margin-top: 1%;
  width: 100%;
  color: #EFEFF1;
`;
const Title = styled.div`
  font-size: 27px;
  font-weight: 600;
  margin-bottom: 1.5vh;
`;
const Content = styled.div`
  font-size: 1.6rem;
  color: #6c6c6c;
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
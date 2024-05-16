import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Score from "../components/interview/score";
import clap from "../assets/image/clap.png";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

export default function InterviewScore() {
  const { state: data } = useLocation();
  // const data = {
  //   total_score: 0,
  //   result: [
  //       {
  //           "커널 모드와 사용자 모드의 차이점은 무엇인가요?": " 커널 모드와 사용자 모드의 차이점은 이 컴퓨터 시스템에서 중요한 역할을 하는 개념입니다. 커널 모드는 운영 체제의 핵심 부분으로 시스템 자원에 접근할 수 있는 모드이고, 사용자 모드는 응용 프로그램이 동작하는 모드입니다. 커널 모드에서는 자원 접근이 허용되지만 사용자 모드에서는 허용되지 않습니다. 또한 커널 모드는 특권 명령을 실행할 수 있지만 사용자 모드는 특권 명령을 실행할 수 없습니다. 따라서, 커널 모드와 사용자 모드의 주요 차이점은 권한과 자원 접근에 있습니다.",
  //           "score": 0,
  //           "subject": "OperatingSystem"
  //       }
  //   ],
  //   score_of_subjects: {
  //       "OperatingSystem": 0
  //   },
  //   graph_data: {
  //       "subjects": {
  //           "OperatingSystem": 1
  //       },
  //       "max_subjects_number": 1
  //   },
  //   username: "지원",
  //   datetime: "2024-05-15 14:55",
  //   score_100_percent: 0,
  //   time: null
  // };

  const correctAnswer = data.result.filter(el => el.score !== 0);
  const [selected, setSelected] = useState("1");
  return (
    <Wrapper>
      <ResultBox>
        <Header>
          <Title>INTERVIEW 결과</Title>
        </Header>
        <Hr />
        <ResultTitle>
          {data.result.length}문제중 {correctAnswer.length}문제 맞췄어요 <Clap src={clap} alt="clap image" width={25} />
        </ResultTitle>
        <DescBox>
          <SubTitle><strong>날짜: </strong>{data.datetime}</SubTitle><br />
          <SubTitle><strong>이름: </strong>{localStorage.getItem("username")}</SubTitle> <br />
          <SubTitle><strong>점수: </strong>{data.score_100_percent}점</SubTitle> <br />
          { data.time && <SubTitle><strong>소요시간:</strong>{data.time}</SubTitle>} <br />
        </DescBox>

        <Result>
          <TabContext value={selected}>
            <Box>
              <TabList aria-label="lab API tabs example">
                <Tab label="문제의 정답" value="1" onClick={() => setSelected("1")} sx={{fontSize: "20px", color: selected !== "1" ? "#495057" : ""}} />
                <Tab label="면접 결과 분석" value="2" onClick={() => setSelected("2")} sx={{fontSize: "20px", color: selected !== "2" ? "#495057" : ""}} />
              </TabList>
            </Box>
            <TabPanel value="1">
              {data.result.map((el: any, idx: number) => {
                return (
                  <Score key={idx} data={el} idx={idx} />
                );
              })}
            </TabPanel>
            <TabPanel value="2">
              <Result />
            </TabPanel>
          </TabContext>
        </Result>
      </ResultBox>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #181818f6;
`;
const ResultBox = styled.div`
  background-color: #2a2a2acc;
  border: 2px solid #373534;
  width: 90%;
  height: 80%;
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
const Header = styled.div`
  padding-top: 2%;
`;
const Hr = styled.hr`
  height: 1.5px;
  width: 90%;
  margin-left: 5%;
  background-color: #e5e5e5;
`;
const ResultTitle = styled.div`
  font-size: 2.1rem;
  font-weight: 600;
  margin-left: 5%;
  color: #32b4d4;
`;
const Clap = styled.img`
  margin-bottom: .3%;
`;
const DescBox = styled.div`
  background-color: #343a40;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px;
  border-radius: 3px;
  width: 90%;
  height: 15vh;
  margin-left: 5%;
  margin-top: 1%;
  padding: .8%;
  line-height: 30px;
`;
const Result = styled.div`
  width: 90%;
  margin: 2% 0 0 5%;
  max-height: 43vh;
  overflow-y: auto;
`;
const SubTitle = styled.span`
  font-size: 1.9rem;
  color: #fff;
`;
const Title = styled.span`
  font-size: 20px;
  margin-left: 5%;
  font-weight: 600;
  color: #e5e5e5;
`; 
const Username = styled.span`
  font-size: 10px;
  color: #568BDF;
`;
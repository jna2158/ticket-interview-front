import React, { useEffect, useState } from "react"
import { styled } from "styled-components";
import { result } from "../../services/interview_service";

export default function InterviewResultList() {
  const [list, setList] = useState([]);

  useEffect(() => {
    result().then(res => {
      console.log(res.data);
      setList(res.data);
    })
      .catch(err => {
        console.log(err);
      })
  }, []);
  return (
    <Wrapper>
      <CardWrapper>
        {
          list.map(el => {
            const graphData = JSON.parse(el.graph_data);
            const scoreOfSubjects = JSON.parse(el.score_of_subjects);


            return (
              <>
                <Title>{el.datetime}</Title>
                <Card>
                  <ResultCnt>결과<br />0 / 3</ResultCnt>
                  <SubjectList>
                    {Object.keys(graphData.subjects).map((subject, idx) => (
                      <BadgeWrapper key={idx}>
                        <Badge className="badge-info">{subject}</Badge>
                        <ChartContainer>
                          <ChartFill percentage={(scoreOfSubjects[subject] / graphData.subjects[subject]) * 100} />
                        </ChartContainer>
                      </BadgeWrapper>
                    ))}
                  </SubjectList>
                  <ArrowIcon className="fa-solid fa-arrow-right"></ArrowIcon>
                </Card>
              </>
            )
          })
        }
      </CardWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  margin-top: 5vh;
  margin-left: 5vw;
`;
const CardWrapper = styled.div`
  max-height: 70vh;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 3px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: #ccc; 
  }
`;
const Title = styled.div`
  display: flex;
  align-items: center;
  width: 65vw;
  height: 4vh;
  border-radius: 5px;
  margin-bottom: 3px;
  font-size: 15px;
  padding-left: 3%;
  color: white;
  background-color: #2A1693;
`;
const Card = styled.div`
  display: flex;
  width: 65vw;
  margin-bottom: 5%;
  border-radius: 5px;
  background: #262729;
`;

const ChartContainer = styled.div`
  width: 100%;
  background-color: #e0e0e0;
  border-radius: 5px;
  margin: '20px 0';
`;

const ChartFill = styled.div<{ percentage: number }>`
  width: ${(props) => props.percentage}%;
  background-color: #76c7c0;
  height: 30px;
  border-radius: 5px 0 0 5px;
`

const Title1 = styled.div`
  display: flex;
  align-items: center;
  width: 65vw;
  height: 4vh;
  border-radius: 5px;
  margin-bottom: 3px;
  font-size: 15px;
  padding-left: 3%;
  color: white;
  background-color: #2A1693;
`;
const ResultCnt = styled.div`
  display: flex;
  align-items: center;
  border-right: 1px dotted #7b7b7b;
  padding: 30px;
  margin-right: 10px;
  font-size: 1.3rem;
  color: white;
`;
const SubjectList = styled.div`
  display: flex;
  width: 55vw;
  gap: 20px;
  flex-direction: column;
  padding: 2%;
`;
const BadgeWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const Badge = styled.span`
  padding: 10px;
  height: 3vh;
  border-radius: 18px;
  margin-right: 2%;
  align-content: center;
  background-color: #176ab8;
`;

const ArrowIcon = styled.i`
  font-size: 2.5rem;
  align-content: center;
  color: #a0a0a0;
  margin-right: 10px;
`
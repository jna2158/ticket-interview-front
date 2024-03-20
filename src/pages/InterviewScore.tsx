import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Score from "../components/Interview/score";

export default function InterviewScore() {
  // const { state: data } = useLocation();
  const data = {
    "total_score": 2,
    "result": [
        {
            "큐(Queue) 자료 구조란 무엇인가요? 또한 큐 자료구조의 장/단점은 무엇일까요?": " 큐는 선입선출(FIFO, First-In-First-Out) 방식을 가지는 자료 구조입니다. 데이터는 한쪽 끝에서 추가되고 반대쪽 끝에서 제거됩니다. 큐의 장점은 데이터의 순서대로 처리할 수 있고, 구현이 간단하며 빠른 접근이 가능하다는 것입니다. 하지만 단점으로는 큐의 크기가 제한될 수 있고, 데이터의 중간 삽입/삭제가 어려워 비효율적일 수 있습니다. 또한, 큐가 꽉 찬 상태에서 데이터를 추가할 때에는 오버플로우가 발생할 수 있습니다.",
            "score": 0
        },
        {
            "HTTP와 HTTPS의 차이점에 대해 설명해주세요.": " HTTP와 HTTPS의 주요 차이점은 보안입니다. HTTP는 통신하는 데이터가 암호화되지 않아 도청이나 데이터 변조가 쉽게 발생할 수 있지만, HTTPS는 SSL 인증서를 통해 데이터가 암호화되어 안전하게 전송됩니다. 따라서, HTTPS는 사용자의 개인정보나 민감한 정보를 전송할 때 더 안전한 선택이 됩니다. 이외에도 HTTPS는 SEO에 유리하고, 브라우저에서 보안 경고 없이 사이트를 접속할 수 있도록 해줍니다.HTTPS는 서버와 클라이언트 간의 통신 시 탐도, 위변조 및 후속방어를 제공합니다.",
            "score": 1
        },
        {
            "메모리 누수는 무엇이며, 어떻게 방지할 수 있나요?": "   메모리 누수는 프로그램이 할당한 메모리를 적절히 해제하지 않아 발생하는 현상으로, 사용되지 않는 메모리가 시스템에 계속 점유됩니다. 이로 인해 시스템 전체의 성능이 저하되거나 응용 프로그램이 예기치 않은 방식으로 동작할 수 있습니다. 메모리 누수를 방지하기 위한 또 다른 방법으로는, 자동 메모리 관리인 가비지 컬렉션을 사용하는 것이 있습니다. 가비지 컬렉션은 자동으로 더 이상 필요하지 않은 메모리를 해제하여 프로그래머가 명시적으로 메모리를 관리하지 않아도 되도록 도와줍니다. 이를 통해 코드를 보다 간단하고 안전하게 작성할 수 있습니다.",
            "score": 1
        },
        {
            "Python에서 데코레이터는 어떤 목적으로 사용되나요?": " Python의 데코레이터는 함수의 기능을 확장하거나 수정하기 위해 사용됩니다. 래핑 된 함수에 추가적인 기능을 쉽게 삽입할 수 있도록 해줍니다. 데코레이터는 코드의 재사용성과 가독성을 높이는 데 도움이 됩니다. 함수의 실행 시간 측정 뿐만 아니라 인증, 로깅, 캐싱 등 다양한 기능을 더할 수 있습니다. 따라서 데코레이터는 파이썬에서 매우 강력하고 유용한 기능 중 하나입니다.",
            "score": 0
        }
    ]
  };
  return (
    <Wrapper>
      <ResultBox>
        <Header>
          <Title>INTERVIEW 결과</Title>
          <Username>{localStorage.getItem("username")}</Username>
        </Header>
        <Hr />
        <ResultTitle>
          6문제중 2문제 맞췄어요 <i className="bi bi-emoji-smile"></i>
        </ResultTitle>
        <DescBox>
          <SubTitle>이름: 유지원</SubTitle> <br />
          <SubTitle>점수: 33점</SubTitle> <br />
          <SubTitle>소요시간: 10분 33초</SubTitle> <br />
        </DescBox>
        <Result>
          {data.result.map((el: any, idx: number) => {
            return (
              <Score key={idx} data={el} idx={idx}/>
            );
          })}
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
  background-color: #568BDF;
`;

const ResultBox = styled.div`
  background-color: #fff;
  width: 90%;
  height: 80%;
`;

const Header = styled.div`
  padding-top: 2%;
`;
const Hr = styled.hr`
  height: 1.5px;
  width: 90%;
  margin-left: 5%;
  background-color: #568BDF;
`;
const ResultTitle = styled.div`
  font-size: 2rem;
  font-weight: 600;
  margin-left: 5%;
  color: #07124c;
`;
const DescBox = styled.div`
  background-color: #F6F9FE;
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
  max-height: 50vh;
  overflow-y: auto;
`;
const SubTitle = styled.span`
  font-size: 1.9rem;
`;
const Title = styled.span`
  font-size: 20px;
  margin-left: 5%;
  font-weight: 600;
  color: #568BDF;
`; 
const Username = styled.span`
  font-size: 10px;
  color: #568BDF;
`;
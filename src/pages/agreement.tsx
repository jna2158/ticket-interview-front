import React, { useState } from "react";
import styled from "styled-components";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import { useLocation, useNavigate } from "react-router-dom";

export default function Agreement() {
  const { state: data } = useLocation();
  const navigate = useNavigate();
  const [agreement1, setAgreement1] = useState(false);
  const [agreement2, setAgreement2] = useState(false);
  const [agreement3, setAgreement3] = useState(false);
  const [agreement4, setAgreement4] = useState(false);
  const [agreement5, setAgreement5] = useState(false);
  const [agreement6, setAgreement6] = useState(false);
  const [agreement7, setAgreement7] = useState(false);

  const handleCheckboxChange = (event, setState, dependentStates) => {
    const bool = event.target.checked;
  
    // 만약 이 체크박스가 메인 동의 체크박스인 경우
    if (setState === setAgreement1) {
      // 메인 동의 체크박스 상태 설정
      setState(bool);
      // 메인 동의 체크박스에 따라 모든 하위 체크박스 상태 설정
      dependentStates.forEach(setState => setState(bool));
    } else {
      // 만약 이 체크박스가 하위 체크박스인 경우
      // 만약 체크가 해제되면 메인 동의 체크박스도 해제
      if (!bool) {
        setAgreement1(false);
      } else {
        // 모든 하위 체크박스가 체크되어 있는지 확인
        const allChecked = dependentStates.every(state => state);
        console.log(dependentStates);
        
        // 모든 하위 체크박스가 체크되어 있으면 메인 동의 체크박스도 체크
        if (allChecked) {
          setAgreement1(true);
        }
      }
      // 현재 체크박스 상태 설정
      setState(bool);
    }
  };

  const handleClickSubmitBtn = () => {
    navigate("/problem-solve", { state: data });
  };

  return (
    <>
      <Wrapper>
        <SubWrapper>
          <Title>면접 시작하기 전 이용약관에 동의해주세요.</Title>
          <FormGroup>
            <CenteredFormGroup>
            <FormControlLabel
              control={<Checkbox checked={agreement1} onChange={(e) => handleCheckboxChange(e, setAgreement1, [setAgreement2, setAgreement3, setAgreement4, setAgreement5, setAgreement6])} sx={{ '& .MuiSvgIcon-root': { fontSize: 35 }, color: "#616161" }} />}
              label={<LabelTitle><span>[필수]</span> TInterview 이용약관</LabelTitle>} />
              <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
                <FormControlLabel
                  label={<SubLabel>면접문제는 <span>무작위</span>로 선별됩니다.</SubLabel>}
                  control={<Checkbox checked={agreement2} onChange={(e) => handleCheckboxChange(e, setAgreement2, [agreement3, agreement4, agreement5, agreement6])} sx={{ '& .MuiSvgIcon-root': { fontSize: 28 }, color: "#616161" }} />}
                />
                <FormControlLabel
                  label={<SubLabel>통계적으로 빈번한 면접 질문들을 선별했습니다. 하지만 실제 면접의 질문과 <span>다를 수</span> 있습니다.</SubLabel>}
                  control={<Checkbox checked={agreement3} onChange={(e) => handleCheckboxChange(e, setAgreement3, [agreement2, agreement4, agreement5, agreement6])} sx={{ '& .MuiSvgIcon-root': { fontSize: 28 }, color: "#616161" }} />}
                />
                <FormControlLabel
                  label={<SubLabel>면접 결과와 실제 면접관이 희망하는 답변은 다를 수 있습니다. 본 면접의 주요 목적은 <span>면접 스킬 향상</span>에 있음을 기억해주세요.</SubLabel>}
                  control={<Checkbox checked={agreement4} onChange={(e) => handleCheckboxChange(e, setAgreement4, [agreement2, agreement3, agreement5, agreement6])} sx={{ '& .MuiSvgIcon-root': { fontSize: 28 }, color: "#616161" }} />}
                />
                <FormControlLabel
                  label={<SubLabel>다음 문제로 넘어간 경우 이전 문제의 정답을 <span>수정할 수 없습니다.</span></SubLabel>}
                  control={<Checkbox checked={agreement5} onChange={(e) => handleCheckboxChange(e, setAgreement5, [agreement2, agreement3, agreement4, agreement6])} sx={{ '& .MuiSvgIcon-root': { fontSize: 28 }, color: "#616161" }} />}
                />
                <FormControlLabel
                  label={<SubLabel>면접 내용은 <span>저장할 수 없습니다.</span></SubLabel>}
                  control={<Checkbox checked={agreement6} onChange={(e) => handleCheckboxChange(e, setAgreement6, [agreement2, agreement3, agreement4, agreement5])} sx={{ '& .MuiSvgIcon-root': { fontSize: 28 }, color: "#616161" }} />}
                />
              </Box>
            </CenteredFormGroup>
          </FormGroup>
          <br />
          <FormGroup>
            <CenteredFormGroup>
              <FormControlLabel
                control={<Checkbox checked={agreement7} onChange={(e) => handleCheckboxChange(e, setAgreement7, [agreement7])} sx={{ '& .MuiSvgIcon-root': { fontSize: 35 }, color: "#616161" }} />}
                label={<LabelTitle><span>[필수]</span> TInterview 콘텐츠 이용약관</LabelTitle>} />

              <Box sx={{ display: "flex", flexDirection: "column", textAlign: "left", ml: 3, border: "1px solid #616161", width: "50vw", maxHeight: "20vh", overflowY: "scroll", padding: "2%", color: "#727272", borderRadius: "10px"}}>
                내용.<br />
                - 본 서비스에서 제공되는 모든 면접 질문 및 관련 콘텐츠는 저작권 및 기타 지적 재산권으로 보호받고 있습니다. 이에 동의함으로써, 사용자는 다음과 같은 조건 하에 콘텐츠를 사용하기로 동의합니다.<br /><br />

                동의 사항<br />
                - 1. 본 동의 사항은 추후 법적으로 이용될 수 있습니다.<br />
                - 2. 개인적 용도로만 사용: 사용자는 콘텐츠를 개인적인 면접 준비 목적으로만 사용할 수 있으며, 상업적 이용, 배포, 공유, 또는 복제를 포함하여 어떠한 방식으로도 무단으로 재사용할 수 없습니다.<br />
                - 3. 무단 복제 및 배포 금지: 사용자는 콘텐츠를 무단으로 복제하거나, 인터넷, 소셜 미디어, 기타 플랫폼을 통해 배포하는 것을 금지합니다. 모든 콘텐츠는 저작권법에 의해 보호됩니다.<br />
                - 4. 스크롤링 및 자동화된 수집 금지: 사용자는 자동화된 방법(예: 스크래핑, 스크롤링)을 이용하여 콘텐츠를 수집, 추출하는 행위를 금지합니다.
              </Box>
            </CenteredFormGroup>
          </FormGroup>
          <SubmitBtn disabled={!agreement1 || !agreement7} onClick={handleClickSubmitBtn}>계속하기</SubmitBtn>
        </SubWrapper>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: auto;
  padding: 2% 2% 2% 4%;
  min-height: 100vh;
  background-color: #171717;
  display: flex;
  justify-content: center;
`;
const SubWrapper = styled.div`
  width: 70vw;
  height: 85vh;
  margin-top: 3%;
  border-radius: 6px;
  padding: 2%;
  text-align: center;
  background-color: #242526;
  border: 1px solid #232222;
`;
const Title = styled.div`
  color: #e0e0e0;
  font-size: 22px;
  margin-bottom: 1%;
`;
const LabelTitle = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: #bfbebe;
  & span {
    color: #f08c00;
}
`;
const SubLabel = styled.div`
  font-size: 16px;
  color: #bfbebe;
  & span {
    color: #a30303;
    font-weight: 500;
  }
`;
const CenteredFormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15%;
`;
const SubmitBtn = styled.button`
  width: 12vw;
  margin-top: 5vh;
  border: none;
  border-radius: 5px;
  background-color: #1864ab;
  color: #cbc8c8;
  &:hover {
    color: #cbc8c8;
    background-color: #1864ab;
  }
  &:focus {
    color: #cbc8c8;
    background-color: #1864ab;
  }
  &:disabled {
    background-color: #474e55;
  }
`;
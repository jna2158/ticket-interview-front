import React from "react";
import styled from "styled-components";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';

export default function Agreement() {
  const Label = () => {
    return (
      <>
        <LabelTitle><span>[필수]</span> TInterview 이용약관</LabelTitle>
      </>
    )
  }
  return (
    <Wrapper>
      <SubWrapper>
        <Title>면접 시작하기 전<br/>이용약관에 동의해주세요.</Title>
        <FormGroup style={{textAlign: "center"}}>
          <FormControlLabel
            control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 35 }, color: "#616161" }} />}
            label={Label()} />
            <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
              <FormControlLabel
                label={<SubLabel>면접문제는 <span>무작위</span>로 선별됩니다.</SubLabel>}
                control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 28 }, color: "#616161" }} />}
              />
              <FormControlLabel
                label={<SubLabel>label2</SubLabel>}
                control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 28 }, color: "#616161" }} />}
              />
            </Box>
        </FormGroup>
      </SubWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: auto;
  padding: 2% 2% 2% 4%;
  min-height: 100vh;
  background-color: #171717;
`;
const SubWrapper = styled.div`
  width: 90vw;
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
  font-size: 28px;
  margin-bottom: 2%;
`;
const LabelTitle = styled.div`
  font-size: 20px;
  color: #bfbebe;
  & span {
    color: #f08c00;
  }
`;
const SubLabel = styled.div`
  font-size: 18px;
  color: #bfbebe;
  & span {
    color: #a30303;
    font-weight: 500;
  }
`;
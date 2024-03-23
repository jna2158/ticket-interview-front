import * as React from 'react';
import { styled } from '@mui/material/styles';
import s_styled from "styled-components";
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

export default function Score({ data, idx }: any) {
  return (
    <Wrapper>
      <Accordion>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography style={{fontSize: '18px'}}>{Object.keys(data)[0]}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{fontSize: '15px'}}>{data[Object.keys(data)[0]]}</Typography>
        </AccordionDetails>
      </Accordion>
    </Wrapper>
  );
}

const Wrapper = s_styled.div`
  padding-bottom: 2vh;
`;

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  borderRadius: '8px',
  width: '100%',
  height: 'fit-content',
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  }
}));


const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
  backgroundColor: theme.palette.background.default,
}));

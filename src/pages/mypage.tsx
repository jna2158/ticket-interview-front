import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from 'styled-components';
import Face6Icon from '@mui/icons-material/Face6';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import SettingsIcon from '@mui/icons-material/Settings';
import Userinfo from '../components/mypage/userinfo';
import InterviewResultList from '../components/mypage/interview_result_list';
import Setting from '../components/mypage/setting';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function Mypage() {
  const [value, setValue] = React.useState(2);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Wrapper>
      <ProblemSection>
        <Box
          sx={{ flexGrow: 1, backgroundImage: "linear-gradient(to bottom, #1e1e1e, #000000)", display: 'flex', height: "80vh" }}
        >
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="mypage tab"
            sx={{
              borderRight: 1,
              borderColor: 'divider',
              '& .MuiTabs-indicator': {
                border: "1.5px solid #fd7e14",
              },
              '& .Mui-selected': {
                color: 'white !important'
              },
              width: "15vw"
            }}
          >
            <Tab label={<Profile>User Profile</Profile>} {...a11yProps(0)} disabled />
            <Tab icon={<Face6Icon sx={{fontSize: "35px"}} />} iconPosition="start" label="내 정보" {...a11yProps(1)} sx={{fontSize: "35px", marginRight: "20%", marginBottom: "5.5%", color: "#495057"}} />
            <Tab icon={<NoteAltIcon sx={{fontSize: "35px"}} />} iconPosition="start" label="면접 기록" {...a11yProps(2)} sx={{fontSize: "35px", marginRight: "10%", marginBottom: "5.5%", color: "#495057"}} />
            <Tab icon={<SettingsIcon sx={{fontSize: "38px"}} />} iconPosition="start" label="설정" {...a11yProps(3)} sx={{fontSize: "35px", marginRight: "35%", marginBottom: "5.5%", color: "#495057"}} />
          </Tabs>
          <TabPanel value={value} index={0}>
            <dd></dd>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Userinfo />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <InterviewResultList />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <Setting />
          </TabPanel>
        </Box>
      </ProblemSection>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: auto;
  min-height: 100vh;
  background-image: linear-gradient(to bottom, #1e1e1e, #000000);
`;
const ProblemSection = styled.div`
  width: 100vw;
  padding: 5% 2% 2% 4%;
`;
const Profile = styled.div`
  margin: 10%;
  font-size: 30px;
  font-weight: 600;
  color: #bdc5ce;
`;
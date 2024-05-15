import { createSlice } from '@reduxjs/toolkit';


const subjectArr = [
    {
      id: "DataStructure",
      title: "자료구조",
      subTitle: "데이터를 구조적으로 표현하는 방식과 이를 구현하는 데 필요한 알고리즘에 대해 논하는 기초이론",
      checked: false,
      problems: 0
    },
    {
      id: "Algorithm",
      title: "알고리즘",
      subTitle: "어떠한 문제를 해결하기 위한 일련의 절차나 방법을 공식화한 형태로 표현한 것",
      checked: false,
      problems: 0
    },
    {
      id: "Networking",
      title: "네트워크",
      subTitle: "컴퓨터 네트워크의 프로토콜과 서비스, 어플리케이션들 속에 담긴 법칙을 통해 설계 방식을 다루는 영역",
      checked: false,
      problems: 0
    },
    {
      id: "OperatingSystem",
      title: "운영체제",
      subTitle: "컴퓨터 소프트웨어의 동작원리를 전반적으로 다루는 영역",
      checked: false,
      problems: 0
    },
    {
      id: "Database",
      title: "데이터베이스",
      subTitle: "여러 사람이 공유하여 사용할 목적으로 체계화해 통합, 관리하는 데이터의 집합",
      checked: false,
      problems: 0
    },
    {
      id: "Python",
      title: "Python",
      subTitle: "웹 애플리케이션, 소프트웨어 개발, 데이터 과학, 기계 학습에 널리 사용되는 프로그래밍 언어",
      checked: false,
      problems: 0
    },
    {
      id: "Javascript",
      title: "Javascript",
      subTitle: "동적 상호작용형 웹사이트를 만드는 데 사용되는 프로그래밍 언어",
      checked: false,
      problems: 0
    },
    {
      id: "GeneralProgramming",
      title: "프로그래밍 일반",
      subTitle: "프로그래밍의 주요 이론과 원리",
      checked: false,
      problems: 0
    },
    {
      id: "Personality",
      title: "인성",
      subTitle: "인성, 가치관, 태도, 업무 능력 점검하는 영역",
      checked: false,
      problems: 0
    }
  ]
export const interviewSlice = createSlice({
    name: "interview",
    initialState: {agreementInterview: false, interviewType: "Chatting", selectedCategory: subjectArr},
    reducers: {
        agreementInterview: (state, action) => {
            state.agreementInterview = action.payload;
        },
        interviewType: (state, action) => {
            state.interviewType = action.payload
        },
        selectedCategory: (state, action) => {
            state.selectedCategory = action.payload;
        }
    },
});

export default interviewSlice.reducer;
export const { agreementInterview, interviewType, selectedCategory } = interviewSlice.actions;
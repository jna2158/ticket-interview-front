import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyles";
import theme from "./styles/Theme";
import Navbar from "./components/navbar";
import App from "./App";
import NewInterviewSetting from "./pages/interview_setting";
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import GoogleOauthRedirect from "./components/oauth/redirect/google_oauth_redirect";
import KakaoOauthRedirect from "./components/oauth/redirect/kakao_oauth_redirect";
import NaverOauthRedirect from "./components/oauth/redirect/naver_oauth_redirect";
import ProblemSolve from "./pages/problem_solve";
import InterviewScore from "./pages/interview_score";
import { Provider } from "react-redux";
import store from "./redux/store";
import "../src/assets/css/main.css";
import Agreement from "./pages/agreement";
import SelectCategory from "./pages/select_category";
import DeleteAccount from "./pages/deleteAccount";

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement!);
const queryClient = new QueryClient();

const AppWithNavbar = () => {
  const location = useLocation();
  return (
    <>
      {(location.pathname !== "/deleteAccount" && location.pathname !== "/deleteaccount") && <Navbar />}
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/select-category" element={<SelectCategory />}></Route>
        <Route path="/interview-setting" element={<NewInterviewSetting />}></Route>
        <Route path="/problem-solve" element={<ProblemSolve />}></Route>
        <Route path="/agreement" element={<Agreement />}></Route>
        <Route path="/interview-score" element={<InterviewScore />}></Route>
        <Route path="/accounts/google/login/" element={<GoogleOauthRedirect />}></Route>
        <Route path="/accounts/kakao/login/" element={<KakaoOauthRedirect />}></Route>
        <Route path="/accounts/naver/login/" element={<NaverOauthRedirect />}></Route>
        <Route path="/deleteAccount" element={<DeleteAccount />}></Route>
      </Routes>
    </>
  );
};

root.render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter basename="/">
          <GlobalStyle />
          <AppWithNavbar />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </QueryClientProvider>
);
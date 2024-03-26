import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyles";
import theme from "./styles/Theme";
import Navbar from "./components/navbar";
import App from "./App";
import NewInterviewSetting from "./pages/NewInterviewSetting";
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GoogleOauthRedirect from "./components/oauth/redirect/GoogleOauthRedirect";
import KakaoOauthRedirect from "./components/oauth/redirect/KakaoOauthRefirect";
import NaverOauthRedirect from "./components/oauth/redirect/NaverOauthRedirect";
import ProblemSolve from "./pages/ProblemSolve";
import InterviewScore from "./pages/InterviewScore";
import { Provider } from "react-redux";
import store from "./redux/store";
import "../src/assets/css/main.css";

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement!);
const queryClient = new QueryClient();

root.render(
  <QueryClientProvider client={queryClient}>
      <React.StrictMode>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Navbar />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<App />}></Route>
                <Route path="/interview-setting" element={<NewInterviewSetting />}></Route>
                <Route path="/problem-solve" element={<ProblemSolve />}></Route>
                <Route path="/interview-score" element={<InterviewScore />}></Route>
                <Route path="accounts/google/login/" element={<GoogleOauthRedirect />}></Route>
                <Route path="accounts/kakao/login/" element={<KakaoOauthRedirect />}></Route>
                <Route path="accounts/naver/login/" element={<NaverOauthRedirect />}></Route>
              </Routes>
            </BrowserRouter>
          </ThemeProvider>
        </Provider>
      </React.StrictMode>
  </QueryClientProvider>
);
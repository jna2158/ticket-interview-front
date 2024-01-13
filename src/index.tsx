import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyles";
import theme from "./styles/Theme";
// react-query
import { QueryClient, QueryClientProvider } from 'react-query';
// route
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GoogleOauthRedirect from "./components/oauth/login-redirect/googleOauthRedirect";

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement!);
const queryClient = new QueryClient();

root.render(
  <QueryClientProvider client={queryClient}>
      <React.StrictMode>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <BrowserRouter>
            {/* route */}
            <Routes>
              <Route path="/" element={<App />}></Route>
              <Route path="accounts/google/login/" element={<GoogleOauthRedirect />}></Route>
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </React.StrictMode>
  </QueryClientProvider>
);
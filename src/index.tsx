import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyles";
import theme from "./styles/Theme";
// oauth
import { GoogleOAuthProvider } from "@react-oauth/google";
// react-query
import { QueryClient, QueryClientProvider } from 'react-query';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(rootElement);

const clientId: string = process.env.GOOGLE_OAUTH_CLIENT_ID || '';

const queryClient = new QueryClient();

root.render(
  <QueryClientProvider client={queryClient}>
    <GoogleOAuthProvider clientId={clientId}>
      <React.StrictMode>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </React.StrictMode>
    </GoogleOAuthProvider>
  </QueryClientProvider>
);
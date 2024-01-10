import Navbar from './components/navbar';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from "styled-components";
import GoogleOauthRedirect from './components/oauth/googleOauthRedirect';

const Wrap = styled.div`
  width: 80px;
  height: 50px;
  background-color: gray;
`;

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="accounts/google/login/" element={<GoogleOauthRedirect />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
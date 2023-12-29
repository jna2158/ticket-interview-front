import React from 'react';
import styled from "styled-components";
import GlobalStyle from './styles/GlobalStyles';

const Wrap = styled.div`
  width: 80px;
  height: 50px;
  background-color: gray;
`;

class App extends React.Component {
  render() {
    return (
      <GlobalStyle>
        <div className='App'>
          <Wrap>어서오세요.</Wrap>
        </div>
      </GlobalStyle>
    );
  }
}

export default App;
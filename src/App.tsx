import React from 'react';
import styled from "styled-components";

const Wrap = styled.div`
  width: 80px;
  height: 50px;
  background-color: gray;
`;

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Wrap>어서오세요.</Wrap>
      </div>
    );
  }
}

export default App;
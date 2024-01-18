import React from 'react';
import Navbar from './components/navbar';
import InterviewSetting from './pages/InterviewSetting';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Navbar />
        <InterviewSetting />
      </div>
    );
  }
}

export default App;
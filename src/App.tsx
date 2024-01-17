import Navbar from './components/Navbar';
import React from 'react';
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
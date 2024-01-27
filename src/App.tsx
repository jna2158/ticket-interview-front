import React from 'react';
import Navbar from './components/navbar';
import InterviewSetting from './pages/InterviewSetting';
import IntroCarousel from './components/IntroCarousel';


class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Navbar />
        <IntroCarousel />
        <InterviewSetting />
      </div>
    );
  }
}

export default App;

import React from 'react';
import Navbar from './components/navbar';
import InterviewSetting from './pages/InterviewSetting';
import IntroCarousel from './components/IntroPage';


class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <IntroCarousel />
      </div>
    );
  }
}

export default App;

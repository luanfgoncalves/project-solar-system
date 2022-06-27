import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';
// import MissionCard from './componets/MissionCard';

class App extends React.Component {
  render() {
    return (
      <body>
        <Header />
        <SolarSystem />
        <Missions />
      </body>
    );
  }
}

export default App;

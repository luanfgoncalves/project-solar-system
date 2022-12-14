import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missionsData from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {missionsData.map((element) => (<MissionCard
          key={ element.name }
          name={ element.name }
          year={ element.year }
          country={ element.country }
          destination={ element.destination }
        />))}
      </div>
    );
  }
}

export default Missions;

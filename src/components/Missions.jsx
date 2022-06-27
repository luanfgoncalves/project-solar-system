import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missionsData from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <div testid="missions">
        <Title headline="Missões" />
        <div>
          {missionsData.map((element) => (<MissionCard
            key={ element.name }
            name={ element.name }
            year={ element.year }
            country={ element.country }
            destination={ element.destination }
          />))}
        </div>
      </div>
    );
  }
}

export default Missions;

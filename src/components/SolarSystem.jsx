import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <div>
          {planets.map((element) => (<PlanetCard
            key={ element.name }
            planetImage={ element.image }
            planetName={ element.name }
          />))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;

// Referências: https://pt-br.reactjs.org/docs/lists-and-keys.html#:~:text=As%20chaves%20ajudam%20o%20React,%3Cli%20key%3D%7Bnumber.

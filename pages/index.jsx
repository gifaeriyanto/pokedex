import React from 'react';
import Pokemons from 'Containers/pokemons';
import withData from 'Hocs/apollo';

const Index = () => <Pokemons />;

export default withData(Index);

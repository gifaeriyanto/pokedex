import React from 'react';
import PokemonDetail from 'Containers/pokemonDetail';
import withData from 'Hocs/apollo';

const Index = () => <PokemonDetail />;

export default withData(Index);

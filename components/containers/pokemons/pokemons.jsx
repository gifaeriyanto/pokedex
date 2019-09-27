import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const GET_POKEMONS = gql`
  query pokemons($first: Int!) {
    pokemons(first: $first) {
      id
      number
      name
      image
    }
  }
`;

const Pokemons = () => {
  const perPage = 20;
  const [pokemonList, setPokemonList] = useState([]);
  const [first, setFirst] = useState(perPage);

  const {
    loading, error, data,
  } = useQuery(GET_POKEMONS, {
    variables: { first },
    notifyOnNetworkStatusChange: true,
  });

  const handleScroll = () => {
    const element = document.documentElement;
    if (window.innerHeight + element.scrollTop === element.offsetHeight && !loading) {
      setFirst(first + perPage); // load more data
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  useEffect(() => {
    if (data !== undefined) {
      setPokemonList(data.pokemons);
    }
  }, [data]);

  const items = pokemonList.map((item) => (
    <div key={item.id}>
      { item.number }
      { item.name }
      <img src={item.image} alt={item.name} width="100px" />
    </div>
  ));

  return (
    <>
      <div>Welcome to Pokedex</div>
      { error && 'error...' }
      { items }
      { loading && 'loading...' }
    </>
  );
};

export default Pokemons;

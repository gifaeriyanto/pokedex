import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import PokemonQuickDetail from 'Containers/pokemonQuickDetail';
import { Item, Loading } from './styled';

const GET_POKEMONS = gql`
  query pokemons($first: Int!) {
    pokemons(first: $first) {
      id
      number
      name
      image
      types
      classification
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
    }
  }
`;

const Pokemons = () => {
  const perPage = 20;
  const [pokemonList, setPokemonList] = useState([]);
  const [first, setFirst] = useState(perPage);
  const [pokemonDetail, setPokemonDetail] = useState(null);
  const [showDetail, setShowDetail] = useState(false);

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

  const handleDetail = (detail) => {
    setShowDetail(true);
    setPokemonDetail(detail);
  };

  const handleCloseDetail = () => {
    setShowDetail(false);
  };

  const items = pokemonList.map((item) => (
    <Item key={item.id} onClick={() => handleDetail(item)}>
      <div className="img">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="about">
        <div className="name">{ item.name }</div>
        <div className="number">{ `#${item.number}` }</div>
        <div className="types">
          {
            item.types.map((type, index) => (
              <div key={index}>{ type }</div>
            ))
          }
        </div>
      </div>
    </Item>
  ));

  return (
    <>
      { error && 'error...' }
      { items }
      { loading && <Loading>Loading...</Loading> }
      {
        pokemonDetail && (
          <PokemonQuickDetail
            show={showDetail}
            onHide={handleCloseDetail}
            pokemonDetail={pokemonDetail}
          />
        )
      }
    </>
  );
};

export default Pokemons;

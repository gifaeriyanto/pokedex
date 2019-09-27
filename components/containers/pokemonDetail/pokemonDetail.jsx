import React, { useState, useEffect } from 'react';
import { withRouter } from 'next/router';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import PropTypes from 'prop-types';
import {
  Loading, Empty, Detail,
} from './styled';
import Headline from './partials/headline';
import Content from './partials/content';

const GET_POKEMON = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
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
      maxCP
      maxHP
      weaknesses
      resistant
      evolutions {
        id
        name
        image
        types
        number
      }
      evolutionRequirements {
        name
        amount
      }
    }
  }
`;

const PokemonDetail = ({ router }) => {
  const { name } = router.query;
  const [detail, setDetail] = useState(null);
  const [empty, setEmpty] = useState(false);

  const {
    loading, data,
  } = useQuery(GET_POKEMON, {
    variables: { name },
    notifyOnNetworkStatusChange: true,
  });

  useEffect(() => {
    if (loading) {
      setEmpty(false);
    }
  }, [loading]);

  useEffect(() => {
    if (data) {
      setDetail(data.pokemon);
      if (data.pokemon === null) {
        setEmpty(true);
      } else {
        setEmpty(false);
      }
    }
  }, [data]);

  return (
    <div>
      {
        empty && (
          <Empty>
            <img src="https://img.pokemondb.net/artwork/poliwag.jpg" alt="Empty" />
            <div>Pokemon not found</div>
          </Empty>
        )
      }
      {
        loading ? (
          <Loading>Loading...</Loading>
        ) : detail && (
          <Detail pokemonType={detail.types[0]}>
            <Headline detail={detail} />
            <Content detail={detail} />
          </Detail>
        )
      }
    </div>
  );
};

PokemonDetail.propTypes = {
  router: PropTypes.instanceOf(Object).isRequired,
};

export default withRouter(PokemonDetail);

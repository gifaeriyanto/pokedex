import React from 'react';
import { Link } from 'Routes';
import PropTypes from 'prop-types';
import { Item as Evolution } from 'Containers/pokemons/styled';
import { BadgeTypes } from '../styled';

const Evolutions = ({ evolutions }) => {
  const Items = evolutions.map((item) => (
    <Link route="detail" params={{ name: item.name }} key={item.id}>
      <a>
        <Evolution>
          <div className="img">
            <img src={item.image} alt={item.name} />
          </div>
          <div className="about">
            <div className="name">{ item.name }</div>
            <div className="number">{ `#${item.number}` }</div>
            <div className="types">
              {
                item.types.map((type, index) => (
                  <BadgeTypes key={index} type={type}>{ type }</BadgeTypes>
                ))
              }
            </div>
          </div>
        </Evolution>
      </a>
    </Link>
  ));

  return (
    <>
      <h3>Evolutions</h3>
      { Items }
    </>
  );
};

Evolutions.propTypes = {
  evolutions: PropTypes.instanceOf(Object).isRequired,
};

export default Evolutions;

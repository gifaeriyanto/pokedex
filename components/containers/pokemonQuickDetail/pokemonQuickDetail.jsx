import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'Elements';
import { Link } from 'Routes';
import {
  Overlay, Dialog, Modal, Pokemon, CloseButton,
} from './styled';

const PokemonQuickDetail = ({
  show, onHide, pokemonDetail,
}) => {
  const types = pokemonDetail.types.map((item, index) => (
    <div key={index}>{ item }</div>
  ));

  return (
    <Modal show={show}>
      <Dialog show={show} pokemonType={pokemonDetail.types[0]}>
        <Pokemon show={show}>
          <CloseButton onClick={onHide}>
            <Icon name="close" />
          </CloseButton>

          <div className="name">
            <h2>{ pokemonDetail.name }</h2>
            <div className="types">{ types }</div>
          </div>

          <div className="about">
            <img src={pokemonDetail.image} alt={pokemonDetail.name} />
            <div>
              <div>Species</div>
              <div>{ pokemonDetail.classification }</div>
            </div>
            <div>
              <div>Height</div>
              <div>{ `${pokemonDetail.height.minimum} - ${pokemonDetail.height.maximum}` }</div>
            </div>
            <div>
              <div>Weight</div>
              <div>{ `${pokemonDetail.weight.minimum} - ${pokemonDetail.weight.maximum}` }</div>
            </div>

            <Link route="home">
              <a>See full details</a>
            </Link>
          </div>
        </Pokemon>
      </Dialog>
      <Overlay show={show} onClick={onHide} />
    </Modal>
  );
};

PokemonQuickDetail.propTypes = {
  show: PropTypes.bool,
  onHide: PropTypes.func,
  pokemonDetail: PropTypes.instanceOf(Object).isRequired,
};

PokemonQuickDetail.defaultProps = {
  show: false,
  onHide: null,
};

export default PokemonQuickDetail;

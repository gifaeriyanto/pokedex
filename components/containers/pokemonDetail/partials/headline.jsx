import React from 'react';
import PropTypes from 'prop-types';
import { Image } from '../styled';

const Headline = ({ detail }) => (
  <div className="main">
    <div>
      <h2>
        { detail.name }
        <sup>{`#${detail.number}`}</sup>
      </h2>
      <div className="types">
        {
          detail.types.map((item, index) => (
            <div key={index}>{ item }</div>
          ))
        }
      </div>
      <div className="other">
        <div>
          <div>Species</div>
          <div>{ detail.classification }</div>
        </div>
        <div>
          <div>Height</div>
          <div>{ `${detail.height.minimum} - ${detail.height.maximum}` }</div>
        </div>
        <div>
          <div>Weight</div>
          <div>{ `${detail.weight.minimum} - ${detail.weight.maximum}` }</div>
        </div>
      </div>
    </div>
    <div>
      <Image src={detail.image} />
    </div>
  </div>
);

Headline.propTypes = {
  detail: PropTypes.instanceOf(Object).isRequired,
};

export default Headline;

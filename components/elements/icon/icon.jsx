import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const IconStyled = styled.i`
  vertical-align: middle;
`;

const Icon = ({ name, ...props }) => (
  <IconStyled className="material-icons" {...props}>{ name }</IconStyled>
);

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;

import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'Elements';
import { Title, Wrapper, Search } from './styled';
import './reset.css';
import './style.css';

const Layout = ({ children }) => (
  <Wrapper>
    <Title>Pokedex</Title>
    <Search>
      <Icon name="search" />
      <input type="text" placeholder="Search pokemon by name" />
    </Search>
    { children }
  </Wrapper>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

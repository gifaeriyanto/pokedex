import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'Elements';
import './reset.css';
import './style.css';

const Layout = ({ children, ...props }) => (
  <Container {...props}>
    { children }
  </Container>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

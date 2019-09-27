import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'Elements';
import { Link, Router } from 'Routes';
import { Logo, Wrapper, Search } from './styled';
import './reset.css';
import './style.css';

const Layout = ({ children }) => {
  const [keyword, setKeyword] = useState('');

  const handleChange = (e) => {
    setKeyword(e.currentTarget.value);
  };

  const handleSearch = (e) => {
    if (e.key === 'Enter' && keyword.length) {
      e.currentTarget.blur();
      Router.pushRoute('detail', { name: keyword });
    }
  };

  return (
    <Wrapper>
      <Logo>
        <Link route="home">
          <a>
            Poke
            <span>dex</span>
          </a>
        </Link>
      </Logo>
      <Search>
        <Icon name="search" />
        <input type="text" placeholder="Search pokemon by name" value={keyword} onKeyPress={handleSearch} onChange={handleChange} />
      </Search>
      { children }
    </Wrapper>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

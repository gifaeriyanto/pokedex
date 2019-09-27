import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'Elements';
import Head from 'next/head';
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
    <>
      <Head>
        <title>PokeDex by Gifa Eriyanto</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Pokemon Libraries" />
        <link href="data:image/x-icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQAAAK4AAAD/AAAA/wAAAP8AAAD/AAAA0QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkwAAAP+lpaX//////////////////////6Wlpf8AAAD/AAAA7QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA2QEBAf//////////////////////////////////////29vb/xwcHP8AAAD/AAAAAAAAAAAAAAAAAAAAjgMDA//////////////////////////////////////////////////f39//Jycn/wAAAPAAAAAAAAAACAAAAP//////////////////////////////////////////////////////4ODg/93d3f8AAAD/AAAAAAAAAJyLi4v//////////////////////3Jycv8AAAD/AAAA/4CAgP/////////////////f39//r6+v/wAAANEAAAD//////////////////////3Nzc/8AAAD///////////8AAAD/gICA////////////3t7e/+/v7/8AAAD/AAAA/3Z2dv93d3f/eXl5/3t7e/8AAAD//////wAAAP8AAAD//////wAAAP97e3v/eXl5/2ZmZv9nZ2f/AAAA/wAAAP8gbo//IG6P/yBuj/8gbo//AAAA//////8AAAD/AAAA//////8AAAD/IG6P/yBuj/8gbo//IG6P/wAAAP8AAAD/OMT//zjE//84xP//OMT//yqQxf8AAAD///////////8AAAD/LZ7V/zjE//84xP//OMT//zjE//8AAAD/AAAAuSmMu/84xP//OMT//zjE//84xP//KIu+/wAAAP8AAAD/K5TL/zjE//84xP//OMT//zjE//8slsj/AAAAsgAAAAAAAAD/OMT//zjE//84xP//OMT//zjE//84xP//OMT//zjE//84xP//OMT//zjE//84xP//AAAA/wAAABQAAAAAAAAAsgcXHv84xP//OMT//zjE//84xP//OMT//zjE//84xP//OMT//zjE//84xP//Bxge/wAAAJYAAAAAAAAAAAAAAAAAAAD/Bxce/zjE//84xP//OMT//zjE//84xP//OMT//zjE//84xP//Bxce/wAAANsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALgAAAD/I3OZ/zjE//84xP//OMT//zjE//8oibr/AAAA/wAAAI4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALoAAAD/AAAA/wAAAP8AAAD/AAAAmQAAAAMAAAAAAAAAAAAAAAAAAAAA+B8AAOAHAADAAwAAgAEAAIABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAQAAgAEAAMADAADgBwAA+B8AAA==" rel="icon" type="image/x-icon" />
      </Head>
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
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

import styled from '@emotion/styled';

export const Logo = styled.h1({
  fontSize: 30,
  fontFamily: 'Poppins',
  marginBottom: 50,
  a: {
    textDecoration: 'none',
    color: '#202124',
    span: {
      color: '#FC6B6D',
    },
  },
});

export const Wrapper = styled.div({
  maxWidth: 600,
  padding: '50px 20px',
  margin: 'auto',
});

export const Search = styled.div({
  marginBottom: 20,
  position: 'relative',
  i: {
    position: 'absolute',
    top: 7,
    left: 15,
  },
  input: {
    width: '100%',
    padding: '10px 18px',
    paddingLeft: 50,
    borderRadius: 30,
    border: 'none',
    backgroundColor: '#f5f5f5',
    transition: 'all .2s',
    '&:focus': {
      boxShadow: '0 0 0 2px #202124',
      backgroundColor: '#fff',
    },
  },
});

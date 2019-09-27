import { keyframes } from '@emotion/core';
import styled from '@emotion/styled';
import { PokemonTypeColor, MediaQuery } from 'Utils';

const zIndexValue = 9999;
const animationDuration = '.5s';
const transitionDuration = '.2s';
const transitionDelay = '.3s';

const showEffect = keyframes`
  0% {
    margin-top: 200px;
    height: 0px;
    padding: 0 20px;
  }

  100% {
    margin-top: 0;
    height: 450px;
  }
`;

const hiddenEffect = keyframes`
  0% {
    margin-top: 0;
    height: 450px;
  }

  100% {
    margin-top: 200px;
    padding: 0 20px;
    height: 0;
  }
`;

const showEffectMobile = keyframes`
  0% {
    margin-top: 200px;
    height: 0px;
    padding: 0 20px;
  }

  100% {
    margin-top: 0;
    height: 560px;
  }
`;

const hiddenEffectMobile = keyframes`
  0% {
    margin-top: 0;
    height: 560px;
  }

  100% {
    margin-top: 200px;
    padding: 0 20px;
    height: 0;
  }
`;

export const Modal = styled.div(
  ({ show }) => ({
    width: '100%',
    height: '100vh',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: zIndexValue,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    visibility: show ? 'visible' : 'hidden',
    transition: 'visible 0 ease',
    transitionDelay: show ? '0' : animationDuration,
  }),
);

export const Dialog = styled.div(
  ({ show, pokemonType }) => {
    const theme = PokemonTypeColor(pokemonType);

    return ({
      position: 'relative',
      backgroundColor: theme,
      padding: 40,
      height: 450,
      width: 550,
      maxWidth: 'calc(100% - 40px)',
      borderRadius: 20,
      animation: `${show ? showEffect : hiddenEffect} ${animationDuration} ease`,
      zIndex: zIndexValue + 1,
      overflow: 'hidden',
      transition: `background-color ${transitionDuration}`,
      [MediaQuery.sm]: {
        height: 560,
        animation: `${show ? showEffectMobile : hiddenEffectMobile} ${animationDuration} ease`,
      },
      a: {
        display: 'block',
        position: 'absolute',
        bottom: 20,
        textDecoration: 'none',
        padding: '10px 16px',
        color: '#202124',
        border: `1px solid ${theme}`,
        borderRadius: 30,
        transition: `all ${transitionDuration}`,
        backgroundColor: '#fff',
        '&:hover': {
          boxShadow: `0 0 0 1px ${theme}`,
        },
        [MediaQuery.sm]: {
          left: 20,
          right: 20,
          textAlign: 'center',
          borderRadius: 10,
        },
      },
    });
  },
);

export const Overlay = styled.div(
  ({ show }) => ({
    backgroundColor: 'rgba(255, 255, 255, .8)',
    width: '100%',
    height: '100vh',
    position: 'absolute',
    opacity: show ? 1 : 0,
    transition: `opacity ${transitionDuration} linear`,
    transitionDelay: show ? '0' : transitionDelay,
  }),
);

export const CloseButton = styled.button({
  appearance: 'none',
  backgroundColor: 'rgba(0, 0, 0, .2)',
  border: 'none',
  borderRadius: 20,
  outline: 'none',
  color: '#fff',
  position: 'absolute',
  top: 20,
  right: 20,
  width: 40,
  height: 40,
  lineHeight: '40px',
  textAlign: 'center',
  padding: 0,
});

export const Pokemon = styled.div(
  ({ show }) => ({
    opacity: show ? 1 : 0,
    transition: `opacity ${transitionDuration} linear`,
    '.name': {
      color: '#fff',
      marginBottom: 50,
      h2: {
        fontFamily: 'Poppins',
        fontSize: 24,
      },
      '.types': {
        marginTop: 10,
        div: {
          display: 'inline-block',
          marginBottom: 5,
          fontSize: 12,
          backgroundColor: 'rgba(0, 0, 0, .2)',
          marginRight: 5,
          padding: '4px 12px',
          borderRadius: 10,
        },
      },
    },
    '.about': {
      position: 'absolute',
      bottom: 20,
      left: 20,
      right: 20,
      backgroundColor: '#fff',
      padding: 20,
      borderRadius: 16,
      height: 290,
      [MediaQuery.sm]: {
        height: 420,
      },
      '& > div': {
        display: 'flex',
        borderBottom: '1px solid #eee',
        padding: '20px 0',
        'div:first-of-type': {
          width: 100,
          opacity: 0.7,
        },
      },
      '& > div:first-of-type': {
        paddingTop: 5,
      },
      img: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        maxWidth: 200,
        maxHeight: 200,
        [MediaQuery.sm]: {
          position: 'initial',
          display: 'block',
          margin: 'auto',
          marginBottom: 20,
          maxWidth: 'auto',
          maxHeight: 150,
        },
      },
    },
  }),
);

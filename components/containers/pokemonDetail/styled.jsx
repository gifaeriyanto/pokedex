import styled from '@emotion/styled';
import { PokemonTypeColor, MediaQuery } from 'Utils';

export const Loading = styled.div({
  marginTop: 50,
  textAlign: 'center',
  opacity: 0.5,
});

export const Empty = styled.div({
  marginTop: 50,
  textAlign: 'center',
  img: {
    marginTop: 100,
    marginBottom: 20,
    width: 200,
    filter: 'grayscale(100%)',
  },
  div: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export const Detail = styled.div(
  ({ pokemonType }) => {
    const theme = PokemonTypeColor(pokemonType);

    return ({
      '.main': {
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: theme,
        color: '#fff',
        borderRadius: 20,
        padding: 20,
        [MediaQuery.sm]: {
          flexWrap: 'wrap',
          flexDirection: 'column-reverse',
        },
        h2: {
          fontSize: 36,
          fontFamily: 'Poppins',
          sup: {
            verticalAlign: 'super',
            fontSize: 12,
            marginLeft: 5,
            opacity: 0.7,
          },
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
        '& > div:first-of-type': {
          width: 'calc(100% - 250px)',
          [MediaQuery.sm]: {
            width: '100%',
          },
        },
        '.other': {
          marginTop: 10,
          '& > div': {
            display: 'flex',
            padding: '10px 0',
            [MediaQuery.sm]: {
              flexWrap: 'wrap',
              div: {
                marginBottom: 7,
              },
            },
            'div:first-of-type': {
              width: 100,
              opacity: 0.7,
            },
          },
        },
      },
    });
  },
);

export const ContentSection = styled.div({
  padding: 20,
  h3: {
    fontSize: 18,
    fontFamily: 'Poppins',
    marginTop: 20,
    marginBottom: 15,
  },
  '.list': {
    '& > div': {
      display: 'flex',
      alignItems: 'center',
      padding: '10px 0',
      [MediaQuery.sm]: {
        flexWrap: 'wrap',
        div: {
          marginBottom: 7,
        },
      },
      '& > div:first-of-type': {
        width: 100,
        opacity: 0.7,
      },
    },
  },
  '.evolutionRequirements': {
    backgroundColor: 'ivory',
    border: '1px solid antiquewhite',
    borderRadius: 20,
    padding: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    'div:first-of-type': {
      opacity: 0.7,
      width: '55%',
    },
    'div:last-of-type': {
      fontWeight: 'bold',
      opacity: 0.7,
    },
    i: {
      marginRight: 10,
    },
  },
});

export const BadgeTypes = styled.div(
  ({ type }) => {
    const theme = PokemonTypeColor(type);

    return ({
      display: 'inline-block',
      backgroundColor: theme,
      color: '#fff',
      margin: 2,
      padding: '4px 12px',
      borderRadius: 10,
      fontSize: 12,
    });
  },
);

export const Image = styled.div(
  ({ src }) => ({
    background: `#fff url(${src}) no-repeat center/contain`,
    width: 180,
    height: 180,
    border: '20px solid #fff',
    boxShadow: '0 0 0 5px rgba(0, 0, 0, .1)',
    borderRadius: 20,
    [MediaQuery.sm]: {
      width: '100%',
      marginBottom: 25,
    },
  }),
);

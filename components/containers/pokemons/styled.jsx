import styled from '@emotion/styled';

export const Item = styled.div({
  position: 'relative',
  border: '1px solid #eee',
  padding: 20,
  borderRadius: 20,
  width: '100%',
  marginBottom: 10,
  display: 'flex',
  justifyContent: 'space-between',
  cursor: 'pointer',
  transition: 'all .1s linear',
  '&:hover': {
    border: '1px solid #ddd',
    boxShadow: '0 10px 20px rgba(0, 0, 0, .1)',
    zIndex: 1,
    transform: 'scale(1.01)',
  },
  '.img': {
    width: 100,
    textAlign: 'center',
    img: {
      maxWidth: 100,
      maxHeight: 100,
    },
  },
  '.about': {
    width: 'calc(100% - 150px)',
    position: 'relative',
    '.name': {
      fontFamily: 'Poppins',
      fontSize: 18,
    },
    '.number': {
      position: 'absolute',
      right: 0,
      top: 0,
      fontWeight: 'bold',
      opacity: 0.3,
    },
    '.types': {
      marginTop: 10,
      div: {
        display: 'inline-block',
        fontSize: 12,
        backgroundColor: '#f5f5f5',
        marginRight: 5,
        padding: '4px 12px',
        borderRadius: 10,
      },
    },
  },
});

export const Loading = styled.div({
  marginTop: 50,
  textAlign: 'center',
  opacity: 0.5,
});

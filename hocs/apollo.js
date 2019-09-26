import { withData } from 'next-apollo';
import { HttpLink } from 'apollo-boost';

const config = {
  link: new HttpLink({
    uri: 'https://graphql-pokemon.now.sh/',
  }),
};

export default withData(config);

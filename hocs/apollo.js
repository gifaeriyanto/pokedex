import { withData } from "next-apollo";
import { HttpLink } from "apollo-boost";

const config = {
  link: new HttpLink({
    uri: "https://graphql-pokemon2.vercel.app/",
  }),
};

export default withData(config);

const { gql } = require("@apollo/client");

export const ALL_PRODUCTS = gql`
  query allProducts {
    allProducts {
      id
      name
      price
      category
      img
    }
  }
`
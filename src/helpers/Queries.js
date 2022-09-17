import { gql } from '@apollo/client';

export const GET_PRODUCTS = (name) => (gql`
query {
  category(input: {
    title: "${name}"
  }) {
    name
    products {
      name
      brand
      id
      inStock
      gallery
      prices {
        amount
        currency {
          symbol
          label
        }
      }
      attributes {
        name
        items {
          value
          id
        }
      }
    }
  }
}
`);

export const CATEGORIES_NAMES = gql`
  query {
    categories {
      name
    }   
  }
`;

export const GET_CURRENCIES = gql`
 query {
  currencies {
    label
     symbol
  }
 }
`;

export const SELECTED_PRODUCT = (id) => (
  gql` query {
      product(id: "${id}") {
        id
        name
        description
        brand
        gallery
        inStock
        prices {
          amount
          currency {
            symbol
            label
          }
        }
        attributes {
          name
          items {
            value
            id
          }
        }
      }
    }
  `
);

import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  scalar Date

  enum Ingredient {
    YEAST
    OLIVE_OIL
    TOMATOES
    MOZZARELLA
    BASIL
  }

  enum Quality {
    A
    B
    C
    D
    F
  }

  type IngredientListItem {
    name: String!
  }

  type VendorStat {
    name: String!
    averageQuality: Float
    ingredients: [IngredientListItem]
  }

  type Entry {
    date: Date!
    ingredient: Ingredient!
    vendor: Vendor!
    count: Int!
    quality: Quality!
    verify: Boolean
  }

  type Vendor {
    name: String!
    ingredients: [Ingredient]
    source: Source
  }

  enum API {
    REST
    PHONE
    WEBHOOK
    SMS
    EMAIL
  }

  type Source {
    api: API!
    frequency: String
  }

  type Query {
    entries: [Entry]
    vendorStats: [VendorStat]
  }
`;

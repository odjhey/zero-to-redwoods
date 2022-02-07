export const schema = gql`
  type Ninja {
    id: String!
    name: String!
    age: Int
    aka: String
  }

  type Query {
    ninjas: [Ninja!]! @requireAuth
    ninja(id: String!): Ninja @requireAuth
  }

  input CreateNinjaInput {
    name: String!
    age: Int
    aka: String
  }

  input UpdateNinjaInput {
    name: String
    age: Int
    aka: String
  }

  type Mutation {
    createNinja(input: CreateNinjaInput!): Ninja! @requireAuth
    updateNinja(id: String!, input: UpdateNinjaInput!): Ninja! @requireAuth
    deleteNinja(id: String!): Ninja! @requireAuth
  }
`

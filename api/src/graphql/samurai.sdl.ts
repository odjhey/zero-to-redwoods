export const schema = gql`
  type Samurai {
    id: ID!
    name: String!
    age: Int
  }

  type Query {
    samurais: [Samurai!]! @skipAuth
    samurais32: [Samurai!]! @skipAuth
  }
`

import type { SamuraisQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import Samurai from 'src/components/Samurai'

export const QUERY = gql`
  query SamuraisQuery {
    samurais {
      id
      name
      age
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ samurais }: CellSuccessProps<SamuraisQuery>) => {
  return (
    <ul>
      {samurais.map((item) => {
        return (
          <li key={item.id}>
            <Samurai {...item}></Samurai>
          </li>
        )
      })}
    </ul>
  )
}

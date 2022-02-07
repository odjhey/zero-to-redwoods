import type { FindNinjaById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Ninja from 'src/components/Ninja/Ninja'

export const QUERY = gql`
  query FindNinjaById($id: String!) {
    ninja: ninja(id: $id) {
      id
      name
      age
      aka
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Ninja not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ ninja }: CellSuccessProps<FindNinjaById>) => {
  return <Ninja ninja={ninja} />
}

import type { FindNinjas } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import Ninjas from 'src/components/Ninja/Ninjas'

export const QUERY = gql`
  query FindNinjas {
    ninjas {
      id
      name
      age
      aka
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No ninjas yet. '}
      <Link
        to={routes.newNinja()}
        className="rw-link"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ ninjas }: CellSuccessProps<FindNinjas>) => {
  return <Ninjas ninjas={ninjas} />
}

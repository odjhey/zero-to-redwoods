import type { EditNinjaById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import NinjaForm from 'src/components/Ninja/NinjaForm'

export const QUERY = gql`
  query EditNinjaById($id: String!) {
    ninja: ninja(id: $id) {
      id
      name
      age
      aka
    }
  }
`
const UPDATE_NINJA_MUTATION = gql`
  mutation UpdateNinjaMutation($id: String!, $input: UpdateNinjaInput!) {
    updateNinja(id: $id, input: $input) {
      id
      name
      age
      aka
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ ninja }: CellSuccessProps<EditNinjaById>) => {
  const [updateNinja, { loading, error }] = useMutation(UPDATE_NINJA_MUTATION, {
    onCompleted: () => {
      toast.success('Ninja updated')
      navigate(routes.ninjas())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateNinja({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Ninja {ninja.id}</h2>
      </header>
      <div className="rw-segment-main">
        <NinjaForm ninja={ninja} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}

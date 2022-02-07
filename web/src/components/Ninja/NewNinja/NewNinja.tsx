import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import NinjaForm from 'src/components/Ninja/NinjaForm'

const CREATE_NINJA_MUTATION = gql`
  mutation CreateNinjaMutation($input: CreateNinjaInput!) {
    createNinja(input: $input) {
      id
    }
  }
`

const NewNinja = () => {
  const [createNinja, { loading, error }] = useMutation(CREATE_NINJA_MUTATION, {
    onCompleted: () => {
      toast.success('Ninja created')
      navigate(routes.ninjas())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    createNinja({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Ninja</h2>
      </header>
      <div className="rw-segment-main">
        <NinjaForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewNinja

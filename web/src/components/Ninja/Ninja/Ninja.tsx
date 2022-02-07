import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_NINJA_MUTATION = gql`
  mutation DeleteNinjaMutation($id: String!) {
    deleteNinja(id: $id) {
      id
    }
  }
`

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

const timeTag = (datetime) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toUTCString()}
      </time>
    )
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const Ninja = ({ ninja }) => {
  const [deleteNinja] = useMutation(DELETE_NINJA_MUTATION, {
    onCompleted: () => {
      toast.success('Ninja deleted')
      navigate(routes.ninjas())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete ninja ' + id + '?')) {
      deleteNinja({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">Ninja {ninja.id} Detail</h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{ninja.id}</td>
            </tr><tr>
              <th>Name</th>
              <td>{ninja.name}</td>
            </tr><tr>
              <th>Age</th>
              <td>{ninja.age}</td>
            </tr><tr>
              <th>Aka</th>
              <td>{ninja.aka}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editNinja({ id: ninja.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(ninja.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Ninja

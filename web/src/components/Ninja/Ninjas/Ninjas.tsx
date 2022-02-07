import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/Ninja/NinjasCell'

const DELETE_NINJA_MUTATION = gql`
  mutation DeleteNinjaMutation($id: String!) {
    deleteNinja(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
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

const NinjasList = ({ ninjas }) => {
  const [deleteNinja] = useMutation(DELETE_NINJA_MUTATION, {
    onCompleted: () => {
      toast.success('Ninja deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete ninja ' + id + '?')) {
      deleteNinja({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Aka</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {ninjas.map((ninja) => (
            <tr key={ninja.id}>
              <td>{truncate(ninja.id)}</td>
              <td>{truncate(ninja.name)}</td>
              <td>{truncate(ninja.age)}</td>
              <td>{truncate(ninja.aka)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.ninja({ id: ninja.id })}
                    title={'Show ninja ' + ninja.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editNinja({ id: ninja.id })}
                    title={'Edit ninja ' + ninja.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete ninja ' + ninja.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(ninja.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default NinjasList

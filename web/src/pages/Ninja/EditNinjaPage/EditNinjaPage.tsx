import EditNinjaCell from 'src/components/Ninja/EditNinjaCell'

type NinjaPageProps = {
  id: string
}

const EditNinjaPage = ({ id }: NinjaPageProps) => {
  return <EditNinjaCell id={id} />
}

export default EditNinjaPage

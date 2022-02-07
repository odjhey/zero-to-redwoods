import NinjaCell from 'src/components/Ninja/NinjaCell'

type NinjaPageProps = {
  id: string
}

const NinjaPage = ({ id }: NinjaPageProps) => {
  return <NinjaCell id={id} />
}

export default NinjaPage

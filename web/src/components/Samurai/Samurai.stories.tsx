import Samurai from './Samurai'

const samurai = {
  id: 'asdlkfj',
  name: 'name1',
  age: 1,
}

export const generated = () => {
  return <Samurai {...samurai} />
}

export default { title: 'Components/Samurai' }

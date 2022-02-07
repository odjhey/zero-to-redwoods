const Samurai = ({
  id,
  name,
  age,
}: {
  id: string
  name: string
  age?: number
}) => {
  return (
    <div>
      <p>
        {'Samurai'} {id}
      </p>
      <p>
        My name is {name} and I am {age} year/s old
      </p>
    </div>
  )
}

export default Samurai

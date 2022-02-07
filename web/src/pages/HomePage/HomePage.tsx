import { MetaTags } from '@redwoodjs/web'
import BannerMessage from 'src/components/BannerMessage/BannerMessage'
import SamuraisCell from 'src/components/SamuraisCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1>HomePage</h1>

      <BannerMessage></BannerMessage>
      <SamuraisCell></SamuraisCell>
    </>
  )
}

export default HomePage

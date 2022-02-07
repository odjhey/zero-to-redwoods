import { MetaTags } from '@redwoodjs/web'
import BannerMessage from 'src/components/BannerMessage/BannerMessage'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1>HomePage</h1>

      <BannerMessage></BannerMessage>
    </>
  )
}

export default HomePage

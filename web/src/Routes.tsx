import { Router, Route, Set } from '@redwoodjs/router'
import NavLayout from './layouts/NavLayout/NavLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={NavLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/home" page={HomePage} name="home" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes

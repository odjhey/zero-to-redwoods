import { Router, Route, Set } from '@redwoodjs/router'
import NinjasLayout from 'src/layouts/NinjasLayout'
import NavLayout from './layouts/NavLayout/NavLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={NinjasLayout}>
        <Route path="/ninjas/new" page={NinjaNewNinjaPage} name="newNinja" />
        <Route path="/ninjas/{id}/edit" page={NinjaEditNinjaPage} name="editNinja" />
        <Route path="/ninjas/{id}" page={NinjaNinjaPage} name="ninja" />
        <Route path="/ninjas" page={NinjaNinjasPage} name="ninjas" />
      </Set>
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

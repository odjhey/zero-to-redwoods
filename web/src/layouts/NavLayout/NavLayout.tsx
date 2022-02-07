import { Link, routes } from '@redwoodjs/router'

type NavLayoutProps = {
  children?: React.ReactNode
}

const NavLayout = ({ children }: NavLayoutProps) => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to={routes.home()}>Home</Link>
          </li>
          <li>
            <Link to={routes.about()}>About</Link>
          </li>
        </ul>
      </nav>

      {children}
    </>
  )
}

export default NavLayout

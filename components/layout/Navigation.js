import NavLink from '../link/Link'

const Navigation = () => {
  return (
    <nav className={'navigation'}>
      <ul style={{display: 'flex'}}>
        <li style={{listStyle: 'none'}}>
          <NavLink href={'/about'}>
            <a>About</a>
          </NavLink>
        </li>
        <li style={{listStyle: 'none'}}>
          <NavLink href={'/'}>
            <a>Home</a>
          </NavLink>
        </li>
        <li style={{listStyle: 'none'}}>
          <NavLink href={'/blog'}>
            <a>Blog</a>
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation

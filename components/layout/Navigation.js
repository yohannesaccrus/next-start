import Link from 'next/link'

const Navigation = () => {
  return (
    <nav className={'navigation'}>
      <ul style={{display: 'flex'}}>
        <li style={{listStyle: 'none', marginRight: '.500em'}}>
          <Link href={'/about'}>
            <a>About</a>
          </Link>
        </li>
        <li style={{listStyle: 'none', marginRight: '.500em'}}>
          <Link href={'/'}>
            <a>Home</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation

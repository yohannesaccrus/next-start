import Head       from '../head/Head'
import Navigation from './Navigation'

const Layout = props => {
  const { title } = props

  return (
    <div className={'layout'}>
      <Head title={title} />
      <Navigation />
      {props.children}
    </div>
  )
}

export default Layout

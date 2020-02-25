import React, { Fragment } from 'react'
import Head                from 'next/head'
import '../../assets/style/main.scss'

const Header = props => {
  const { title } = props

  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta
          name={'viewport'}
          content={'initial-scale=1.0, width=device-width'}
          key={'viewport'}
        />
      </Head>
    </Fragment>
  )
}

export default Header

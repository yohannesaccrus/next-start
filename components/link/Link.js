import React, { cloneElement } from 'react'
import Link                    from 'next/link' 
import { useRouter }           from 'next/router'

const NavLink = props => {
    const router             = useRouter()
    const { href, children } = props

    let className = children.props.className || ''
    if (router.pathname === href)
        className = `${className} active`
    return (
        <Link href={href}>
            {cloneElement(children, {className})}
        </Link>
    )
}

export default NavLink
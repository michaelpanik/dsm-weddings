import React from 'react'
import { Link } from 'gatsby'
import { siteMetadata } from '../../gatsby-config'

const Navbar = () => {
    return (
        <header className="bg-white w-100 px-8 py-5 text-center">
            <Link to="/">
                <h1>{siteMetadata.title}</h1>
            </Link>
        </header>
    )
}

export default Navbar
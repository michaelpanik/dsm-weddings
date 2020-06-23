import React from 'react'
import { Link } from 'gatsby'
import { siteMetadata } from '../../gatsby-config'

const Navbar = () => {
    return (
        <header className="bg-white text-gray-700 w-100 py-10 px-8">
            <Link to="/">
                <div className="italic font-serif">{siteMetadata.title}</div>
            </Link>
        </header>
    )
}

export default Navbar
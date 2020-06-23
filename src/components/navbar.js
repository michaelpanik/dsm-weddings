import React, { useState } from 'react'
import { Link } from 'gatsby'
import { siteMetadata } from '../../gatsby-config'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

const Navbar = ({ path }) => {
    const [menuOpen, setMenuOpen] = useState(false)

    const menu = [
        {
            label: 'Blog',
            to: '/',
        },
        {
            label: 'About',
            to: 'https://doublespringsmedia.com',
        },
        {
            label: 'Contact',
            to: '/contact',
        },
    ]

    return (
        <header className="bg-white text-gray-700 w-100 py-10 px-8 flex justify-between align-center">
            <Link to="/">
                <div className="italic font-serif">{siteMetadata.title}</div>
            </Link>
            <button
                className="text-2xl leading-none md:hidden"
                onClick={() => setMenuOpen(true)}
            >
                <FontAwesomeIcon icon={faBars} />
            </button>
            <nav class={`bg-white font-serif transition-all duration-300
                fixed h-full w-10/12 p-10 right-0 top-0 z-10 transform ${menuOpen ? 'shadow-xl' : 'translate-x-full'}
                md:static md:h-auto md:w-auto md:p-0 md:shadow-none md:translate-x-0
            `}>
                <div className="text-right mb-8 md:hidden">
                    <button
                        className="text-2xl leading-none md:hidden"
                        onClick={() => setMenuOpen(false)}
                    >
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                </div>
                {menu.map(({label, to}, i) => {
                    const margin = i < menu.length - 1 ? 'md:mr-10' : ''

                    return (
                        <Link
                            to={to}
                            className={`text-gray-600 hover:text-gray-700 pb-2 block w-auto text-xl md:text-base md:inline mb-8 md:mb-0 ${margin}`}
                            activeClassName='text-gray-700 border-b-2 border-gray-600'
                        >
                            {label}
                        </Link>
                    )
                })}
            </nav>
        </header>
    )
}

export default Navbar
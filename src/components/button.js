import React from 'react'
import { Link } from 'gatsby'

const Button = ({label, to}) => {
    return (
        <Link to={to} className="inline-block border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-5 py-4 tracking-wide uppercase transition-all duration-150">
            {label}
        </Link>
    )
}

export default Button
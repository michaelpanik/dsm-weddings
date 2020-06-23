import React from 'react'
import { useStaticQuery } from 'gatsby'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faVimeo } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    const { site } = useStaticQuery(
        graphql`
          query {
            site {
              siteMetadata {
                social {
                    facebook
                    instagram
                    vimeo
                }
              }
            }
          }
        `
    )

    const socialIcons = {
        facebook: faFacebook,
        instagram: faInstagram,
        vimeo: faVimeo,
    }

    const socialAccounts = Object.entries(site.siteMetadata.social)

    return (
        <footer className="bg-gray-300 text-gray-600 font-serif italic text-center text-sm m-8 px-8 py-10">
            <span className="md:inline block">
                © {new Date().getFullYear()}, <a href="https://www.doublespringsmedia.com" className="hover:text-gray-700">Double Springs Media</a>
            </span>
            <span className="mx-3 text-gray-400 md:inline hidden">|</span>
            <div className="md:inline block">
                {socialAccounts.map(([network, handle], i) => {
                    const marginRight = i < socialAccounts.length - 1 ? "mr-2" : ""

                    return (
                        <a href={`https://${network}.com/${handle}`} className={`inline-block hover:text-gray-700 ${marginRight}`}>
                            <FontAwesomeIcon icon={socialIcons[network]} />
                        </a>
                    )
                })}
            </div>
        </footer>
    )
}

export default Footer
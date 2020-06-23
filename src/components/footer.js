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
        <footer className="text-center text-sm px-8 pb-10">
            © {new Date().getFullYear()}, <a href="https://www.doublespringsmedia.com">Double Springs Media</a>
            <span className="mx-3 text-gray-500">|</span>
            <div className="inline">
                {socialAccounts.map(([network, handle], i) => (
                    <a href={`https://${network}.com/${handle}`} className={i < socialAccounts.length - 1 ? "mr-2" : ""}>
                        <FontAwesomeIcon icon={socialIcons[network]} />
                    </a>
                ))}
            </div>
        </footer>
    )
}

export default Footer
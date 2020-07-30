import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Button from "../components/button"

const AboutPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About DSM" />
      <Hero image={data.hero.childImageSharp.fixed}>
        <h1 className="text-4xl uppercase tracking-widest text-white font-light">
          About DSM
        </h1>
      </Hero>
      <div className="w-full max-w-2xl mx-auto text-center mb-12 text-gray-700 px-8 md:px-0">
      <p className="text-lg mb-5">Founded in 2014, DSM set out to capture one of life’s most valuable moments: the union of souls. Today, we still shoot weddings, but seek to capture so much more – to find the emotion in motion and the art in every frame.</p>
      <p className="mb-12">We love working with visionary, passionate people who share our love of visual connection. Whether it’s your brand, your wedding, your passion, or your story, we want to help tell, sell, and embrace every moment.</p>
      <h2 className="text-2xl uppercase font-serif tracking-wider mb-5">Andrew and Michael</h2>
      <p className="mb-12">We are brothers, 4 years separated. We've been making video magic since we were kids, making movies on dad's VHS camera. Today, the equipment is a little more modern, but we still get that same, childlike wonder every time we look through a lens. We filmed our first wedding for a friend in 2014, and instantly fell in love with the joy that capturing such a special day brings.</p>
      <p>
        <Button
          label="Looking for pricing information?"
          to="/faq"
        />
      </p>
      </div>
    </Layout>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    hero: file(relativePath: { eq: "blog-hero.jpg" }) {
      childImageSharp {
        fixed(width: 1920, height: 1080) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

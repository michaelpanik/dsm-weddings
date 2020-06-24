import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"

const ContactPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Get In Touch" />
      <Hero image={data.hero.childImageSharp.fixed}>
        <h1 className="text-4xl uppercase tracking-widest text-white font-light">
          Get In Touch
        </h1>
      </Hero>
      <div className="w-full max-w-2xl mx-auto text-center mb-12 text-gray-700 px-8 md:px-0">
        <p>Reach out and touch somebody.</p>
      </div>
    </Layout>
  )
}

export default ContactPage

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

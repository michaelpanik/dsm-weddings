import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import FAQList from "../components/faqList"

const FaqPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About DSM" />
      <Hero image={data.hero.childImageSharp.fixed}>
        <h1 className="text-4xl uppercase tracking-widest text-white font-light">
          Frequently Asked Questions
        </h1>
      </Hero>
      <div className="w-full max-w-2xl mx-auto text-center mb-12 text-gray-700 px-8 md:px-0">
        <FAQList
          faqs={[
            {
              q: "How much does it cost?",
              a: "Answer"
            },
            {
              q: "What packages do you offer/what all can you do?",
              a: "Answer"
            },
            {
              q: "What's the process/how long will it take to get my video?",
              a: "Answer"
            },
            {
              q: "Can you do just the [ceremony/reception/other]?",
              a: "Answer"
            },
            {
              q: "What if I need to change my wedding date?",
              a: "Answer"
            },
            {
              q: "What if I need to cancel?",
              a: "Answer"
            },
          ]}
        />
      </div>
    </Layout>
  )
}

export default FaqPage

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

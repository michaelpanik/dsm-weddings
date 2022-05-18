import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Hero from "../../components/hero"
import Button from "../../components/button"

const StreamPage = () => {
  return (
    <Layout>
      <SEO title="About DSM" />
      <Hero>
        <h1 className="text-4xl uppercase tracking-widest text-white font-light">
          Brianna + Preston
        </h1>
      </Hero>
      <div className="text-center">
        <p>June 11, 2022</p>
      </div>
    </Layout>
  )
}

export default StreamPage

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
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/PYPCxd9itYM"
          frameborder="0"
          allowfullscreen
          className="mx-auto my-8"
        ></iframe>
        <p>
          If you encounter any issues, please{" "}
          <a
            href="https://youtu.be/PYPCxd9itYM"
            className="underline hover:text-gray-500"
          >
            visit YouTube directly
          </a>
          .
        </p>
      </div>
    </Layout>
  )
}

export default StreamPage

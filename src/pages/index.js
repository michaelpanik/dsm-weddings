import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <div className="py-32 font-serif text-center mb-12 relative overflow-hidden">
        <Img fixed={data.hero.childImageSharp.fixed} style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          width: "100%",
          height: "100%",
          transform: "translate(-50%,-50%)",
          zIndex: -1
        }} />
        <h1 className="text-4xl uppercase tracking-widest text-white font-light">
          Blog
        </h1>
      </div>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article key={node.fields.slug} className="w-full max-w-2xl mx-auto text-center mb-12 text-gray-700 px-8 md:px-0">
            <header className="mb-6 font-serif">
              <div className="text-gray-600 italic leading-lg mb-2 text-sm md:text-base">
                {node.frontmatter.date}
                <span className="inline-block mx-2">–</span>
                {node.frontmatter.category}
                <span className="inline-block mx-2">–</span>
                {node.frontmatter.author}
              </div>
              <h2 className="text-4xl uppercase tracking-widest text-gray-700 hover:text-gray-600 active:text-gray-600">
                <Link to={node.fields.slug}>
                  {title}
                </Link>
              </h2>
            </header>
            <Link to={node.fields.slug} className="block mb-6 hover:opacity-75">
              <Img fluid={node.frontmatter.featured_image.childImageSharp.fluid} />
            </Link>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
                className="font-light leading-7 mx-auto text-sm tracking-wide mb-5"
              />
              <Link to={node.fields.slug} className="tracking-widest uppercase hover:text-gray-600 active:text-gray-600">
                Read more
              </Link>
            </section>
          </article>
        )
      })}
    </Layout>
  )
}

export default BlogIndex

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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            author
            category
            featured_image {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

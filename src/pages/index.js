import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogPostList from "../components/blogPostList"

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
        return <BlogPostList post={node} />
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

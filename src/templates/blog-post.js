import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import VimeoEmbed from "../components/vimeoEmbed"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons"
import Hero from "../components/hero"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <Hero
        image={post.frontmatter.featured_image.childImageSharp.fluid}
      >
        <div className="text-white italic leading-lg mb-2 text-sm md:text-base">
          {post.frontmatter.date}
          <span className="inline-block mx-2">–</span>
          {post.frontmatter.category}
        </div>
        <h1 className="text-4xl uppercase tracking-widest text-white font-light">
          {post.frontmatter.title}
        </h1>
      </Hero>
      <article className="w-full max-w-2xl mx-auto text-center mb-12 text-gray-700">
        <div className="text-left mb-10 font-serif italic text-gray-500 hover:text-gray-700">
          <Link to="/">&larr; Back to blog</Link>
        </div>
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          className="mb-10"
        />
        <VimeoEmbed id={post.frontmatter.video_id} />
      </article>

      <nav>
        <ul>
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        category
        author
        date(formatString: "MMMM DD, YYYY")
        description
        video_id
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
`

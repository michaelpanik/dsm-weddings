import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import VimeoEmbed from "../components/vimeoEmbed"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons"

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
      <article className="bg-white px-8 py-10">
        <header className="text-center">
          <h1 className="text-5xl">
            {post.frontmatter.title}
          </h1>
          <p className="text-gray-800 italic">
            <FontAwesomeIcon icon={faCalendarAlt} className="text-gray-500 text-xs -mt-2" /> {post.frontmatter.date}
          </p>
        </header>
        <hr className="w-10 mx-auto my-10" />
        <section dangerouslySetInnerHTML={{ __html: post.html }} className="mb-10" />
        <hr />
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
        date(formatString: "MMMM DD, YYYY")
        wedding_date(formatString: "MMMM DD, YYYY")
        description
        video_id
      }
    }
  }
`

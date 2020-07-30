import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import VimeoEmbed from "../components/vimeoEmbed"
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
      <Hero image={post.frontmatter.featured_image.childImageSharp.fluid}>
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
        <p className="text-left mb-10">
          <Link
            to="/"
            className="font-serif italic text-gray-500 hover:text-gray-700"
          >
            &larr; Back to blog
          </Link>
        </p>
        <VimeoEmbed id={post.frontmatter.video_id} className="mb-10" />
        <section dangerouslySetInnerHTML={{ __html: post.html }} className="mb-10 blog-content" />
        <nav>
          <ul className="flex justify-between">
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev" className="font-serif italic text-gray-500 hover:text-gray-700">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next" className="font-serif italic text-gray-500 hover:text-gray-700">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </article>
    </Layout>
  )
}

export default BlogPostTemplate

export const BlogPostTemplatePreview = ({ entry, getAsset, widgetFor }) => {
  const date = new Date(entry.getIn(['data', 'date']))
  const dateTimeFormat = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'long', day: '2-digit' }) 
  const [{ value: month },,{ value: day },,{ value: year }] = dateTimeFormat.formatToParts(date) 

  return (
    <>
      <Hero image={getAsset(entry.getIn(['data', 'featured_image'])).toString()}>
        <img
          src={getAsset(entry.getIn(['data', 'featured_image'])).toString()}
          style={{
            maxWidth: "100%",
            // position: "absolute",
            // left: "50%",
            // top: "50%",
            // width: "100%",
            // height: "100%",
            // transform: "translate(-50%,-50%)",
            // zIndex: -1,
          }}
        />
        <div className="text-white italic leading-lg mb-2 text-sm md:text-base">
          {`${month} ${day}, ${year}`}
          <span className="inline-block mx-2">–</span>
          {entry.getIn(['data', 'category'])}
        </div>
        <h1 className="text-4xl uppercase tracking-widest text-white font-light">
          <h1>{entry.getIn(['data', 'title'])}</h1>
        </h1>
      </Hero>
      <article className="w-full max-w-2xl mx-auto text-center mb-12 text-gray-700">
        <VimeoEmbed id={entry.getIn(['data', 'video_id'])} className="mb-10" />
        <div className="mb-10">
          {widgetFor('body')}
        </div>
      </article>
    </>
  )
}

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

import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const BlogPostList = ({ post }) => {
    const title = post.frontmatter.title || post.fields.slug

  return (
    <article
      key={post.fields.slug}
      className="w-full max-w-2xl mx-auto text-center mb-12 text-gray-700 px-8 md:px-0"
    >
      <header className="mb-6 font-serif">
        <div className="text-gray-600 italic leading-lg mb-2 text-sm md:text-base">
          {post.frontmatter.date}
          <span className="inline-block mx-2">–</span>
          {post.frontmatter.category}
        </div>
        <Link to={post.fields.slug}>
            <h2 className="text-4xl uppercase tracking-widest text-gray-700 hover:text-gray-600 active:text-gray-600 font-light duration-150 transition-all">
                {title}
            </h2>
        </Link>
      </header>
      <Link to={post.fields.slug} className="block mb-6 hover:opacity-75  duration-150 transition-all">
        <Img fluid={post.frontmatter.featured_image.childImageSharp.fluid} />
      </Link>
      <section>
        <p
          dangerouslySetInnerHTML={{
            __html: post.frontmatter.description || post.excerpt,
          }}
          className="font-light leading-7 mx-auto text-sm tracking-wide mb-5"
        />
        <Link
          to={post.fields.slug}
          className="tracking-wider uppercase hover:text-gray-600 active:text-gray-600  duration-150 transition-all"
        >
          Read more
        </Link>
      </section>
    </article>
  )
}

export default BlogPostList

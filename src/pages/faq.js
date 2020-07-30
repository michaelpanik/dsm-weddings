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
              a: "Each wedding is unique, so we approach them all different! To get started, reach out to us and we'll set up a time to talk. Depending on your needs and budget, we'll put together a quote tailored just for you and your day."
            },
            {
              q: "What packages do you offer/what all can you do?",
              a: "Just about anything you can dream up! Generally, we put together custom packages per-wedding including a full day highlight, full ceremony cut, receptions, rehearsal dinners, and anything else you might want filmed. Our most popular options are highlight film only, and highlight + full ceremony."
            },
            {
              q: "What's the process/how long will it take to get my video?",
              a: "First, we do our consultation and get a quote together. Once that's good, we take half payment up front as a deposit, to secure your date. We'll be in communication about the timeline of the wedding day. The day of, we'll arrive on time and go to work, filming all around the action for as long as we've agreed upon. The editing process for highlight films takes four to five weeks, including a 60 second teaser video two weeks after your wedding. The ceremony cut will come later, and usually takes around a week."
            },
            {
              q: "Can you do just the [ceremony/reception/other]?",
              a: "Same as packages, we can tailor our services to fit your needs – just ask!"
            },
            {
              q: "What if I need to change my wedding date?",
              a: "We can't always guarantee that a date is available. Once the downpayment is handled, it secures only the date we've agreed to. If your new date is available, we'll block it for you, no problem. If you need to change the date of your wedding, let us know and we'll work it out together."
            },
            {
              q: "What if I need to cancel?",
              a: "Please contact us immediately and let us know if you have to cancel your wedding. Downpayments are non-refundable."
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

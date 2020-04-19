import React from "react"
import { graphql } from "gatsby"

import { useInView } from 'react-intersection-observer'

import SEO from "../components/seo"

import Header from '../components/Header'
import Footer from '../components/Footer'

import Hero from "../components/Hero"
import Content from "../components/Content"

export default ({ data, pageContext }) => {
  const [headerBreakpointRef, headerBreakpointInView, headerBreakpointEntry] = useInView({ triggerOnce: false })

  return (
    <>
      <Header mutate={headerBreakpointEntry ? !headerBreakpointInView : null} />

      <main className={`c0 main-${pageContext.slug === "/" ? "frontpage" : pageContext.slug}`}>

        <SEO title="Home" description="Description" />
        
        <Hero heroRef={headerBreakpointRef} { ...data } />

        <Content { ...data } />
  
      </main>

      <Footer />
    </>
  )
}

export const query = graphql`
  query($id: String!) {
    wordpressPage( id: { eq: $id } ) {
      id
      title
      slug
      date(formatString: "MM-DD-YYYY")
      author {
        name
      }
      content
      featured_media {
        source_url
      }
      acf {
        hero_page {
          img {
            localFile {
              childImageSharp {
                fluid (
                  maxWidth: 3840,
                  quality: 95,
                  srcSetBreakpoints: [1600,1920,2560,3840]
                ) {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
                }
              }
            }
          }
          content
        }
      }
    }
  }
`
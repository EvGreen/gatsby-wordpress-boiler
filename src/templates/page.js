import React from "react"
import { graphql } from "gatsby"

import { useInView } from 'react-intersection-observer'

import SEO from "../components/seo"

import Header from '../components/Header'
import Footer from '../components/Footer'

import Hero from "../components/Hero"
import Content from "../components/Content"
import Vimeo from "../components/Video/HTML"

export default ({ data, pageContext }) => {
  const [headerBreakpointRef, headerBreakpointInView, headerBreakpointEntry] = useInView({ triggerOnce: false })
  const heroImage = data.wordpressPage.acf.hero_page[0].img.localFile.childImageSharp.fluid
  const heroContent = data.wordpressPage.acf.hero_page[0].content
  
  const footerImage = data.wordpressAcfOptions.options.footer_image.localFile.childImageSharp.fluid

  return (
    <>
      <Header mutate={headerBreakpointEntry ? !headerBreakpointInView : null} />

      <main className={`c0 main-${pageContext.slug === "/" ? "frontpage" : pageContext.slug}`}>

        <SEO title="Home" description="Description" />
        
        <Hero heroRef={headerBreakpointRef} image={heroImage} content={heroContent} />

        <Content { ...data } />

        {/* <Vimeo file="/rain.mp4" /> */}
  
      </main>

      <Footer image={footerImage} />
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
                  maxWidth: 1920,
                  quality: 85,
                  srcSetBreakpoints: [1656,1920,2560,3840]
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
    wordpressAcfOptions {
      options {
        footer_image {
          localFile {
            childImageSharp {
              fluid (
                maxWidth: 1280,
                quality: 60,
                srcSetBreakpoints: [720,1280,1920,2560]
              ) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
      }
    }
  }
`
import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"

import Hero from "../components/Hero/Hero"
import Content from "../components/Content/Content"

export default ({ data, pageContext }) => {
  const page = data.wordpressPage

  return (
    <main className={"c0 main-" + pageContext.slug}>

			<SEO title="Home" description="Description" />
			
      <Hero { ...data } />

      <Content { ...data } />
 
    </main>
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
                  quality: 70,
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
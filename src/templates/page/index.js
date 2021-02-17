import React from "react"
import { graphql } from "gatsby"

import SEO from "../../components/seo"

import Footer from '../../components/Footer'

//import WPDefault from "../components/Content/WP/Default"
import ACF from "../../components/Content"

export default ({ data, pageContext }) => {
  const footerImage = data.wordpressAcfOptions.options.footer_image?.localFile.childImageSharp.fluid

  return (
    <>
      <main className={`c0 main-${pageContext.slug === "/" ? "frontpage" : pageContext.slug}`}>

        <SEO title={data.wordpressPage?.title} description="Description" />
        
        { data.wordpressPage?.acf.sections_page ?
          <ACF { ...data } />
        : null }

        {/* { data.wordpressPage.content ?
          <WPDefault key="WP-default-1" { ...data } />
        : null } */}

        <Footer image={footerImage} />
  
      </main>
    </>
  )
}

export const query = graphql`

  query($id: String!) {
    wpgraphql {
      ...wpNaviPrimary
      ...wpNaviSecondary
    }
    wordpressPage( id: { eq: $id } ) {
      id
      title
      slug
      date(formatString: "MM-DD-YYYY")
      author
      acf {
        sections_page {
          ...acfHero
          ...acfContent
        }
      }
    }
    wordpressAcfOptions {
      options {
        footer_image {
          localFile {
            ...imgStandard
          }
        }
      }
    }
  }
`
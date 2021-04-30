import React from "react"
import { graphql } from "gatsby"

import SEO from "../../components/seo"
import { Helmet } from "react-helmet"
import ReactHtmlParser from 'react-html-parser'

import Footer from '../../components/Footer'

//import WPDefault from "../components/Content/WP/Default"
import ACF from "../../components/Content"

const Page = ({ data, pageContext }) => {
  const footerImage = data.wordpressAcfOptions.options.footer_image?.localFile.childImageSharp.gatsbyImageData

  return (
    <>
      <main className={`c0 main-${pageContext.slug === "/" ? "frontpage" : pageContext.slug}`}>

        {data.wordpressPage?.yoast_head ?
          <Helmet>{ ReactHtmlParser(data.wordpressPage?.yoast_head) }</Helmet>
        :
          <SEO title={data.wordpressPage?.name} description={data.wordpressPage?.description} />
        }

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

export default Page

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
      date
      author
      acf {
        sections_page {
          ...acfContent
        }
      }
      yoast_head
    }
    wordpressAcfOptions {
      options {
        footer_image {
          localFile {
            ...imgFull
          }
        }
      }
    }
  }
`
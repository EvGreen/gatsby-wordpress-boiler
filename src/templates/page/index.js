import React from "react"
import { graphql } from "gatsby"

import SEO from "../../components/seo"
import { Helmet } from "react-helmet"
import ReactHtmlParser from 'react-html-parser'

import Footer from '../../components/Footer'

//import WPDefault from "../components/Content/WP/Default"
import ACF from "../../components/Content"

const Page = ({ data, pageContext }) => {
  const footerImage = data.wordpressAcfOptions?.options.footer_image?.localFile.childImageSharp.gatsbyImageData

  return (
    <>
      <main className={`c0 main-${pageContext.slug === "/" ? "frontpage" : pageContext.slug}`}>

        {data.wpPage?.yoast_head ?
          <Helmet>{ ReactHtmlParser(data.wpPage?.yoast_head) }</Helmet>
        :
          <SEO title={data.wpPage?.name} description={data.wpPage?.description} />
        }

        { data.wpPage?.pageBuilder?.sections ?
          <ACF { ...data } />
        : null }

        {/* { data.wpPage.content ?
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
    wpPage( id: { eq: $id } ) {
      id
      title
      slug
      date
      author {
        node {
          name
          slug
          uri
        }
      }
      pageBuilder {
        sections {
          ...acfContent
        }
      }
    }
  }
`
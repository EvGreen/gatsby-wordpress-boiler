import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"

export default ({ data, pageContext }) => {
  console.log(data)
  const page = data.wordpressPage

  return (
    <main className={"main-" + pageContext.slug}>
			<SEO title="Home" description="Description" />
			
			<h3>
        Title: {page.title}<br/>
        ID: {page.id}<br/>
        Slug: {page.slug}<br/>
        Date: {page.date}<br/>
        Author: {page.author.name}
      </h3>
      <div  dangerouslySetInnerHTML={{__html: page.content}}></div>
 
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
    }
  }
`
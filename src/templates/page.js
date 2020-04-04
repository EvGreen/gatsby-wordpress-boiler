import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"

export default ({ data, pageContext }) => {
  const page = data.wordpressPage

  return (
    <main className={"main-" + pageContext.slug}>
			<SEO title="Home" description="Description" />
			
			<h2>{page.title}</h2>
			<h2>{page.id}</h2>
			<h2>{page.slug}</h2>
			<h2>{page.date}</h2>
			<h2>{page.author.name}</h2>
      <p>Hello World!</p>
	  
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
		}
  }
`
import React from "react"
import { graphql } from "gatsby"

export default ({ data }) => {
  const page = data.wordpressPage

  return (
    <div>
	  <h2>{page.title}</h2>
	  <h2>{page.id}</h2>
	  <h2>{page.slug}</h2>
      <p>Hello World!</p>
	  <div className="glitchframe">
		  <div className="glitch cmyk-c">
			<h1>|</h1>
		  </div>
		  <div className="glitch cmyk-m">
			<h1>|</h1>
		  </div>
		  <div className="glitch cmyk-y">
			<h1>|</h1>
		  </div>
	  </div>
    </div>
  )
}

export const query = graphql`
  query($slug: String!) {
    wordpressPage( slug: { eq: $slug } ) {
	  id
      title
	  slug
	}
  }
`
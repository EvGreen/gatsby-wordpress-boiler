import React from "react"
import { graphql } from "gatsby"

export default ({ data }) => {

  return (
    <div>
      <p>Hello World!</p>
    </div>
  )
}
// export const query = graphql`
//   query($slug: String!) {
//     sitePage( slug: { eq: $slug } ) {
//       id
//     }
//   }
// `
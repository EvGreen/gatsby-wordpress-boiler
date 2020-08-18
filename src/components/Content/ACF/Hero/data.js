import { graphql } from 'gatsby'

export const acfHero = graphql`
	fragment acfHero on WordPressAcf_hero {
    id
    anchor
    classes
    min_height
    slides {
      classes
      type
      parallax
      bg_overlay
      wysiwyg
      theme
      img {
        localFile {
          childImageSharp {
            fluid (
              maxWidth: 1280,
              quality: 85,
              srcSetBreakpoints: [960,1280,1920,2560]
            ) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
      img2 {
        localFile {
          childImageSharp {
            fluid (
              maxWidth: 1280,
              quality: 70,
              srcSetBreakpoints: [960,1280,1920,2560]
            ) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
      img3 {
        localFile {
          childImageSharp {
            fluid (
              maxWidth: 1280,
              quality: 70,
              srcSetBreakpoints: [960,1280,1920,2560]
            ) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    }
  }
`
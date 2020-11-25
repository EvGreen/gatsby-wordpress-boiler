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
				  ...imgStandard
        }
      }
      img2 {
        localFile {
				  ...imgStandard
        }
      }
      img3 {
        localFile {
				  ...imgStandard
        }
      }
    }
  }
`
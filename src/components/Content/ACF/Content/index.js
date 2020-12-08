import React from 'react'
import './style.scss'

import Img from 'gatsby-image'

function Content(props) {
	const content = props.wysiwyg
	const anchor = props.anchor
	const image = props.img?.localFile.childImageSharp.fluid

  return (
		<>
			{ content ? 
			<section id={anchor ? anchor : null} className='content is-inview c1 grid-12'>

				{ image ?
					<Img fluid={image}
						imgStyle={{objectFit: 'cover'}}
						objectPosition='50% 50%'
					/>
				: null }

				<div className='content-box c0'>
					<div className='content-holder animated' dangerouslySetInnerHTML={{__html: content}} />
				</div>

			</section>
			: null }
		</>
  )
}

export default Content
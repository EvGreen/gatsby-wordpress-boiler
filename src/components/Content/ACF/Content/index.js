import React from 'react'
import './style.scss'

import Img from 'gatsby-image'

function Content(props) {
	const content = props.wysiwyg
	const anchor = props.anchor
	const classes = props.classes
	const image = props.img?.localFile.childImageSharp.fluid

  return (
		<>
			{ anchor ? 
				<section id={`section-${anchor}`} className={`content grid-12 is-inview ${classes}`}>
					
					{anchor ?
						<div id={anchor} className="anchor"></div>
					: null}

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
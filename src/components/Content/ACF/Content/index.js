import React from 'react'
import './style.scss'

import Img from 'gatsby-image'

function Content(props) {
	const content = props.wysiwyg
	const anchor = props.anchor
	const classes = props.classes
	const blocks = props.block
	
	const blockMap = blocks.map((node,i) => {
		const classes = node.classes
		const wysiwyg = node.wysiwyg
		const image = node.img?.localFile.childImageSharp.fluid
		console.log(node)

		return (
			<>

				{ wysiwyg ?
					<div className={`block-content ${classes}`}>
						<div className='content-holder animated' dangerouslySetInnerHTML={{__html: wysiwyg}} />
					</div>
				: null }

				{ image ?
					<div className={`block-image ${classes}`}>
						<Img fluid={image}
							imgStyle={{objectFit: 'cover'}}
							objectPosition='50% 50%'
						/>
					</div>
				: null }

			</>
		)
	})

  return (
		<section id={`section-${anchor ? anchor : 'whatevs'}`} className={`content grid-12 is-inview ${classes}`}>
			
			{anchor ?
				<div id={anchor} className="anchor"></div>
			: null}

			{blockMap}

		</section>
  )
}

export default Content
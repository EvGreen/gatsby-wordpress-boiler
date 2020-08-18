import React from 'react'
import './style.scss'
import { acfContent } from './data'

import Img from 'gatsby-image'

import { useInView } from 'react-intersection-observer'

function Content(props) {
  const [ref, refInView] = useInView({ triggerOnce: true })

	const content = props.wysiwyg
	const image = props.img?.localFile.childImageSharp.fluid

  return (
		<>
			{ content ? 
			<section className='content c1 grid-12'>

				{ image ?
					<Img fluid={image}
						imgStyle={{objectFit: 'cover'}}
						objectPosition='50% 50%'
					/>
				: null }

				<div ref={ref} className='content-box c0'>
					<div className='content-holder animated' style={{opacity: refInView ? 1 : 0}} dangerouslySetInnerHTML={{__html: content}} />
				</div>

			</section>
			: null }
		</>
  )
}

export default Content
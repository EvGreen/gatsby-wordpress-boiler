import React, { useEffect } from 'react'
import Img from 'gatsby-image'
import anime from 'animejs'

import './style.scss'

function Details(props) {
	return (
		<div as="section" className="hero-details" style={{minHeight: '10.1vh'}}>
			<div className="news fs-85 c5" data-splitting="lines">
				<div className="v-center">
					<div className="aside">
						<h6><b>news:</b></h6>
					</div>
					<div className="content">
						<p>v0.4.1 of gatsby-wordpress-boiler released on github (not rdy for primetime).</p>
					</div>
				</div>
			</div>
			{/* <div className="info fs-85 x1 clead">
				<div className="content">
					<h4 className="coming" style={{textAlign: 'center'}}><a href="#" className="hint--rounded hint--top" data-hint="Coming soon!">case studies</a></h4>
				</div>
			</div> */}
		</div>
	)
}

export default Details
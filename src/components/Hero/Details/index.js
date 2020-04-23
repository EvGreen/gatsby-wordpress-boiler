import React, { useEffect } from 'react'
import Img from 'gatsby-image'
import anime from 'animejs'
import Div100vh from 'react-div-100vh'

import './style.scss'

function Details(props) {
	return (
		<Div100vh as="section" className="hero-details c5" style={{minHeight: '10.1rvh'}}>
			<div className="news">
				<div className="aside">
					<h6><b>news:</b></h6>
				</div>
				<div className="content">
					<p>v0.2.8 of gatsby-wordpress-boiler released on github (not rdy for primetime).</p>
				</div>
			</div>
			<div className="info x1 clead">
				<div className="content">
					<h4 className="coming" style={{textAlign: 'center'}}><a href="#" className="hint--rounded hint--top" data-hint="Coming soon!">case studies</a></h4>
				</div>
			</div>
		</Div100vh>
	)
}

export default Details
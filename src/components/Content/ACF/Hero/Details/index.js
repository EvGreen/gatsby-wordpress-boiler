import React from 'react'

import './style.scss'

function Details(props) {
	return (
		<div as="section" className="hero-details grid-12" style={{minHeight: '10.1vh'}}>
			<div className="news fs-85 x1 c5">
				<div className="v-center splittext-lines">
					<div className="aside">
						<h6><b>news:</b></h6>
					</div>
					<div className="content">
						<p>{process.env.GATSBY_BOILER_VERSION} of gatsby-wordpress-boiler released on github (not rdy for primetime).</p>
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
import React from "react"

import SEO from "../components/seo"

import Hero from "../components/Hero/Hero"

function Home({data}) {
  
	return (
		<main id="home">

			<SEO title="Home" description="Description" />

			<Hero />
			
			<h1>Hello there</h1>
	
		</main>
	)
}
  
export default Home
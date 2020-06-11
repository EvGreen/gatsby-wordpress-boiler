import React, {useEffect, useState} from 'react'
import './style.scss'

import axios from 'axios'

function Weather(props) {
	const [weather,setWeather] = useState('---')

	const weatherAPIkey = 'YOUR API KEY'
	const cityID = '4164138'

	const d = new Date()

	const url = `https://api.openweathermap.org/data/2.5/weather?id=${cityID}&appid=${weatherAPIkey}&units=imperial`
	const config = { headers: { 'Content-Type': 'application/json' } }

	useEffect(() => {
		axios.post(url)
			.then(response => {
				const current = response.data
				let description = Math.round(current.main.temp) + '° ' + current.weather[0].description 
				setWeather(description)
				}
			)
			.catch(errors => {
					console.log(errors)
				}
			)
	}, [])

  return (
		<div id="master-weather" className='weather c4 fs-85'>
			<p><strong>How's Miami?</strong></p>
			<p><strong>{d.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})} <span className="capitalize">{weather}</span></strong></p>
		</div>
  )
}

export default Weather
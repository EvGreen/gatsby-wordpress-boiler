import React from 'react'
import './style.scss'

import { navigate } from 'gatsby-link'
import { useForm } from 'react-hook-form'

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

function NetlifyBasic(props) {
	const { register, handleSubmit, errors } = useForm()
	
	const onSubmit = (data, e) => { 
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...data,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
	}

  return (
		<form
			name="contact"
			method="post"
			action="/thanks/"
			data-netlify="true"
			data-netlify-honeypot="bot-field"
			onSubmit={handleSubmit(onSubmit)}
		>
			<h4>tell me you love me:</h4>
			<p style={{marginTop: '-1rem'}}>but please, be gentle</p>
			<label hidden className="hidden">
				don’t fill this out: <input name="bot-field" ref={register({required: false, maxLength: 80})} />
			</label>

			<label>
				<input type="text" placeholder="name" name="Name" ref={register({required: true, maxLength: 80, message: "error message"})} />
				{errors.Name && <p className="small margin-off">your name is required.</p>}
			</label>
			<label>
				<input type="text" placeholder="e-mail" name="Email" ref={register({required: true, pattern: /^\S+@\S+$/i})} />
				{errors.Email && <p className="small margin-off">a correct email is required.</p>}
			</label>
			<label>
				<textarea placeholder="message" name="Message" ref={register} />
			</label>

			<input type="submit" value="send away!" />

		</form>
  )
}

export default NetlifyBasic
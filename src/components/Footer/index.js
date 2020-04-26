import React from 'react'
import './style.scss'
import Img from 'gatsby-image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
import { navigate } from 'gatsby-link'
import { useForm } from 'react-hook-form'

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

function Footer(props) {
	const image = props.image
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
		<footer id='master-footer' className='c0'>

			{ image ?
				<Img fluid={image}
					imgStyle={{objectFit: 'cover'}}
					objectPosition='50% 50%'
					fadeIn={true}
				/>
			: null }

			<div className="to-top c0 x0">
				<a href="#top"><FontAwesomeIcon icon={faArrowUp} /></a>
			</div>

			<div className="intro-box fs-85 clead x1">
				<h4>contact</h4>
			</div>

			<div className="master-footer-container">

				<div className='x1 footer-icons'>
					<a href='https://twitter.com/designsentry' className='hint--rounded hint--left' data-hint='@designsentry' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faTwitter} /></a>
					<a href='https://instagram.com/the242' className='hint--rounded hint--left' data-hint='@the242' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faInstagram} /></a>
					<a href='https://github.com/EvGreen?tab=repositories' className='hint--rounded hint--left' data-hint='@EvGreen' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faGithub} /></a>
				</div>

				<div className="g50vw padd2 c4 fs-85 text-left">
					<div className="content-box">
						<h6>what?</h6>
						<p>A crack commando unit from Poland that was sent to prison in 2011 for a crime they did not commit.</p><p>After promptly escaping from a maximum security stocade, they now survive as soldiers of fortune, still on the run from the military police.</p><p>They work for anyone who is in need of help and are innocent, hard-working people trying to make a living.</p>
						<h6>where?</h6>
						<p>al. Księcia Józefa Poniatowskiego 1, 03-901 Warszawa</p>
					</div>
				</div>

				<div id="contact" className="g33vw padd2 c5 fs-85">
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

				</div>

				<div className='copy c0'>
					<p>Copyright &copy; 2020. Made with <FontAwesomeIcon icon={faHeart} /> by <span className='hint--rounded hint--top' data-hint='Much love!'>EvG</span>.</p>
				</div>

			</div>

		</footer>
  )
}

export default Footer
<h3>Effort to produce good starting point for headless WP based, gatsby driven websites.</h3>
<h4>What is it for?</h4>
<ul><li>For starting <strong>new projects</strong> with a bunch of reusable components and styling. </li><li>For <strong>quickly mocking up websites</strong> for people on too tight of a budget for custom solutions.</li></ul>
<h4>What do I need?</h4>
<ul><li><strong>WordPress</strong> install on some server with https + <strong>ACF Pro</strong> and couple other plugins + preferably <strong>Netlify</strong> account for convenience.</li></ul>
<h4>How to?</h4>
<p>1. Prepare WordPress install for the backend, then add these plugins:</p>
<ul><li>For<strong> backend management:</strong> <a rel="noreferrer noopener" href="https://www.advancedcustomfields.com/" target="_blank">ACF Pro</a>,</li><li>To be able to use those extra <strong>ACF fields:</strong> <a rel="noreferrer noopener" href="https://wordpress.org/plugins/acf-to-rest-api/" target="_blank">ACF to REST API</a>,</li><li>To be able to use <strong>WP native menus:</strong> <a rel="noreferrer noopener" href="https://wordpress.org/plugins/wp-api-menus/" target="_blank">WP REST API Menus</a>,</li></ul>
<p>2. Clone the repo<strong>. </strong>Doesn’t have to be in wp-content/themes.</p>
<p>3. Modify <strong>gatsby-config.js</strong> file, namely <strong>baseUrl</strong> parameter and <strong>sourceUrl</strong>. Choose <strong>protocol</strong> according to your WP install. You will need to create a WP menu, and create ACF <strong>flexible content</strong> block (<strong>hero</strong>) with <strong>image block</strong> (<strong>image</strong>) that contains an <strong>image field</strong> (<strong>img</strong>) and <strong>WYSIWYG field</strong> (<strong>content</strong>), or just remove this part from <strong>templates/page.js</strong> query (otherwise it’ll break the build). I’ll provide ready-to-go ACF fields import file once I decide on content model. Skip this step if you want to see the default demo.</p>
<p>4. Run:</p>
<p><code>npm install</code></p>
<p>and:</p>
<p><code>gatsby develop</code></p>
<p>or:</p>
<p><code>gatsby build</code></p>
<p><code>gatsby serve</code></p>
<p>5. Edit away!</p>
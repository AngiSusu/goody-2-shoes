<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">
	<h1>about goody 2 shoes</h1>

	<p>
		<strong>goody 2 shoes</strong> is an app made for 2 reasons: 1, for interview purposes, and 2, to be my first svelte 
		project! I have been hearing and reading a lot about svelte recently - did you know it's become the 
		most beloved frontend framework now? - and had to give it a spin for myself.
	</p>
	<h2>
		<strong>What is the tech stack and why did you choose these options?</strong>
	</h2>
	<p>
		The frontend is written with sveltekit using javascript, and the backend is built with 
		<a href="https://vercel.com/storage/kv" target="_blank" rel="noopener noreferrer"> vercel kv</a>.
		I specifically chose vercel for this project because it's small-scale and easy to set up for a lightweight project 
		compared to more robust datastores, though I did originally consider using AWS/amazon dynamodb. vercel's deployment
		process is instantaneous and requires minimal configuration, which I appreciate.
	</p>
	<p>
		I already slightly gave myself away earlier as to why I wanted to use svelte for this project. svelte has some great
		advantages, which has made it wildly popular in just the last few years. first, svelte <strong>doesn't use a virtual
		DOM</strong>, which makes projects fast, light, and user-friendly. it's also just easy to learn (as I discovered 
		while creating this small app) and has nice and straightforward documentation.

	</p>
	<p>
		Plus, svelte was recently "purchased" by vercel (surprise!), and to no one's shock they work very well together.
	</p>

</div>

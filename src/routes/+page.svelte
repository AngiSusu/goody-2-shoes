<script>
	import InputForm from './InputForm.svelte';
	import shoes from '$lib/images/shoes.png';


</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Goody 2 Shoes" />
</svelte:head>

<section>
	<span class="welcome">
		<img src={shoes} alt="SHOES!!!"  />
	</span>
	<h1>
		goody 2 shoes
	</h1>
	<h2>
		it's called <strong>goody 2 shoes</strong> because all the calculations are factors of 2. (haha.)
	</h2>
	<h2>
		how many <strong>shoes</strong> do you want to enter?
	</h2>

	<InputForm />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: flex;
		justify-content: center; 
		align-items: center; 
		height: 40vh; 
	}

	.welcome img {
		width: 60%;
		height: auto;
		margin: 0;
		padding: 0;
	}


</style>

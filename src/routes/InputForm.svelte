<script lang="ts">
	let inputValue: number | null = null;
	let resultx2: number;
	let resultx2squared: number;
	let error: string;
	let show: boolean = false;

	async function post() {
		show = false;
		if (inputValue === null) {
			error = 'You need to put in some shoes!';
			return false;
		}else{
            error = ""
        }
		await fetch('/api/calculate', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ inputValue })
		});
		const storedResultResponse = await fetch('/api/calculate');
		const storedResultData = await storedResultResponse.json();
		if (storedResultData.error) {
			error = storedResultData.error;
		} else {
			resultx2 = storedResultData.resultx2;
			resultx2squared = storedResultData.resultx2squared;
			show = true;
		}
	}
</script>

<div>
	<input name="numberInput" type="number" id="numberInput" bind:value={inputValue} />
	<button
		on:click={() => {   
			post(); 
		}}>magical shoe button</button
	>

	{#if show}
		<p>Shoes x 2: {resultx2} shoes</p>
		<p>(Shoes x 2)^2: {resultx2squared} shoes</p>
		<p>good lord, that's a lot of shoes!</p>
	{/if}
	{#if error}
		<p>{error}</p>
	{/if}
</div>

<style>
	/* Add styles here */
</style>

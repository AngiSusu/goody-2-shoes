<script>
	let inputValue = '';
	let resultx2 = '';
    let resultx2squared = '';

    // this is the function that multiplies our shoes!
	async function calculate() {
		const response = await fetch('/api/calculate', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ inputValue })
		});

		const data = await response.json();
		resultx2 = data.resultx2;
        resultx2squared = data.resultx2squared;

		// Fetch the result again to display the stored value
		const storedResultResponse = await fetch('/api/calculate');
		const storedResultData = await storedResultResponse.json();
		resultx2 = storedResultData.resultx2;
        resultx2squared = storedResultData.resultx2squared;
	}
</script>

<div>
	<input name="numberInput" type="number" id="numberInput" bind:value={inputValue} />
    <button on:click={()=> {
        calculate();
    }}>calculate</button>

	{#if resultx2}
		<p>Shoes x 2: {resultx2}</p>
        <p>(Shoes x 2)^2: {resultx2squared}</p>
	{/if}
</div>

<style>
	/* Add your styles here */
</style>

import { kv } from '@vercel/kv';
import { json } from '@sveltejs/kit';



/** @type {import('./$types').RequestHandler} */
export async function GET({ request }) {
  try {
    // Retrieve nTimes2 and nTimes2Squared from Vercel KV
    const nTimes2 = await kv.get('n') * 2; // calculation is performed here because nTimes2 is not stored in Vercel
    const nTimes2Squared = await kv.get('nTimes2Squared');
    console.log(nTimes2)
    console.log(nTimes2Squared)

    if (nTimes2 === null || nTimes2Squared === null) {
      return json({ error: 'Value not found.' });
    }

    // Return the stored result
    return json({
      resultx2: nTimes2,
      resultx2squared: nTimes2Squared})
  } catch (error) {
    return json({ error: 'An error occurred.' });
  }

}

/** @type {import('./$types').RequestHandler} */
export async function POST(event) {
  const inputNumber = await event.request.json()
  console.log(inputNumber.inputValue)
  if (!inputNumber) {
    return json({ error: 'Input value is required.' });
  }
  const n = inputNumber.inputValue
  const nTimes2 = n*2
  const nTimes2Squared = Math.pow(nTimes2, 2)
  await Promise.all([
    kv.set('n', n),
    kv.set('nTimes2Squared', nTimes2Squared),
  ]);
  return json({ nTimes2, nTimes2Squared })





  // await kv.set('n', n.toString());
  // const nTimes2Squared = Math.pow(inputNumber.inputValue * 2, 2)
  // await kv.set('nTimes2Squared', nTimes2Squared.toString())
  //return json({ result: nTimes2Squared })
}
import {kv} from '@vercel/kv';

export async function load() {
	await kv.set('session', {admin: true});
	const session = await kv.get('session'); // {admin: true}
	return {
		session: session
	};
}

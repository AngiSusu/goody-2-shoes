# goody2shoes

A very simple assessment app made for Transcendent Endeavors.
Created with Sveltekit and hosted on Vercel.

# prompt

Create a web app that…
a. Allows you to input a number n into a client input field
b. Stores n in a database
c. Returns n * 2 to the client so that the user can see their number input multiplied
by 2
d. Stores (n * 2)^2 in the database
e. Returns (n * 2)^2 to the client so that the user can see their number input
multiplied by 2 and that result raised to the 2 power.

## running in dev mode

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
vercel dev
```
Please don't use `npm run dev`, there are some known issues with it that Vercel is working on. (see here: https://github.com/orgs/vercel/discussions/2301#discussioncomment-5806629)
Unfortunately that means you can't visit the beautiful link or do a production-level deployment because the `npm run build` and `npm run preview` commands have a similar problem. 




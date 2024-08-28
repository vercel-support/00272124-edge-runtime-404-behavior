This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

This repository is a minimal reproduction of a weird behavior we are observing when sending a POST request to one of our external endpoints: when running on Node.js, everything is fine; when running on the Edge Runtime, we get a 404 response status.

As this API endpoint requires an API key, this reproduction is using a wrong bearer token on purpose which is supposed to get a 401 response. This is the case on Node.js but on the Edge runtime, we still get a 404.

Note that the issue only occures when deploying to Vercel. Both Node and Edge runtime handlers work when running locally.

- ❌ https://edge-runtime-404-behavior.vercel.app/api/edge outputs a 404 status
- ✅ https://edge-runtime-404-behavior.vercel.app/api/node outputs a 401 status

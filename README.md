# deno-rollup-react-example

An example of how you can use [Rollup](https://github.com/cmorten/deno-rollup/) with [Opine](https://github.com/asos-craigmorten/opine/) and [React](https://reactjs.org/) in [Deno](https://deno.land/).

This example uses [ejs](https://github.com/syumai/dejs) templates to create the HTML markup, serves static assets for styles, and performs server-side rendering of the React application. The application itself makes use of experimental Suspense for data-fetching which demonstrates "render-as-you-fetch", retrieving data from an API the server hosts.

The client and server assets are bundled using Rollup.

## Usage

Install the Rollup CLI with:

```console
deno install -f -q --allow-read --allow-write --allow-net --allow-env --unstable https://deno.land/x/drollup@2.38.0+0.7.3/rollup.ts
```

And follow any suggestions to update your `PATH` environment variable.

The client bundle can then be generated using:

```console
rollup -c rollup.client.config.ts
```

And the server bundle can be generated using:

```console
rollup -c rollup.server.config.ts
```

Finally the bundled application can be run using:

```console
deno run --allow-net="0.0.0.0:3000" --allow-read="./" ./bin/mod.js
```

Check out the running application on <http://localhost:3000>! :tada:

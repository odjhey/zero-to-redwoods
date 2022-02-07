## topics

1. redwood
1. frontend (web)
1. backend (api)
1. dev wf
   1. data model
   1. sdl
   1. service
   1. frontend (cells)

1. forms (read on your own time) (https://learn.redwoodjs.com/docs/tutorial/building-a-form)

## Best Resource
https://learn.redwoodjs.com/docs/tutorial/welcome-to-redwood/

## Getting Started

- [Tutorial](https://redwoodjs.com/tutorial/welcome-to-redwood): getting started and complete overview guide.
- [Docs](https://redwoodjs.com/docs/introduction): using the Redwood Router, handling assets and files, list of command-line tools, and more.
- [Redwood Community](https://community.redwoodjs.com): get help, share tips and tricks, and collaborate on everything about RedwoodJS.

### Setup

We use Yarn as our package manager. To get the dependencies installed, just do this in the root directory:

```terminal
yarn install
```

### Fire it up

```terminal
yarn redwood dev
```

Your browser should open automatically to `http://localhost:8910` to see the web app. Lambda functions run on `http://localhost:8911` and are also proxied to `http://localhost:8910/.redwood/functions/*`.

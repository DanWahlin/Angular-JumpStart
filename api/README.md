## Install dependencies

```bash
https://github.com/Azure/azure-functions-core-tools
```

and the VS Code extension called `Azure Functions`

## Run

Run either with `Run/Start Debugging`

or `npm start` or `func host start` from the command line

## Interesting parts

A Function app normally runs on URL `http://localhost:7071/api/<function-endpoint>`

- `host.json`, this sets the `routePrefix` to empty string which means that the base URL is now `http://localhost:7071/`

Every function is built up of a directory looking like so:

```bash
--| <function-endpoint>
----| function.json
----| index.js
```

- `function.json`, this the configuration that set's up the function
  - `authLevel`, this decided whether the user needs an API key or not, possible values `anonymous`, `function`, `admin`
  - `type`, how the function is triggered, can be many things like a queue message a DB row etc, in this case it's a `httpTrigger`
  - `direction`, this says whether this is incoming data or outgoing. We can for example have an incoming HTTP message but an outgoing DB row (we write to a DB). Read more about this on bindings
  - `name`, name of the request/response object depending on
  - `methods`, this is an array of supported methods
  - `route`, this sets up what routing pattern we respond on
# on-up

[![NPM](https://nodei.co/npm/on-up.png?mini=true)](https://www.npmjs.org/package/on-up)

Calls back on up or after time is up.

## Why

When doing Continuous Integration, for example with [Travis](https://travis-ci.org/),
one has to guess how long a server will take to start,
sleep more than necessary and hope it's enough.

No longer necessary.

## How

Waits for a server to come up with a rsponse to a request.
A callback is invoked with the response and / or metadata.
There is a timeout and various other configuration settings.

## Use

See [wait-up](https://github.com/orlin/wait-up) for simple command-line use.
The [`bin.js`](https://github.com/orlin/wait-up/blob/active/bin.js) example
of how I use the library.  Usually, it provides everything necessary.

## License

[MIT](http://orlin.mit-license.org)

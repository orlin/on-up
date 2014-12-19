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

### Options

In case you want more, here are the defaults to override:

```coffee
req:
  uri: "/" #localhost port 80 prepended if / is the first char
  timeout: 1000 # how long request will wait before timing-out / repeat
spacings: 240 # time in-between retries
patience: 42000 # the ultimate patience (i.e. max duration wait)
dots: false # true allows side-effects (i.e. write dots to stdout)
```

See [request options](https://github.com/request/request#requestoptions-callback).
for what `req` takes.  Of-course, the numbers are in milliseconds.

## License

[MIT](http://orlin.mit-license.org)

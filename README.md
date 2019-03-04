# ksp-express

[![npm version](https://img.shields.io/npm/v/ksp-express.svg)](https://www.npmjs.com/package/ksp-express)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/ksp-express.svg)](https://www.npmjs.com/package/ksp-express)
[![license](https://img.shields.io/npm/l/ksp-express.svg)](https://github.com/dotjov/ksp-express/blob/master/LICENSE)

Create a express web site with ksp framework

**This package need ksp framework. You can find him by clicking [here](https://www.npmjs.com/package/ksp)**

## Install

```
$ npm install ksp ksp-express
```

## Usage

```js
const ksp = require('ksp')
const kspExpress = require('ksp-express')

ksp.use(kspExpress())
ksp.runKsp('express init')

ksp.runKsp('express route get', '/', (req, res) => {
    ksp.runKsp('express send', 'Hello world!', res) // or res.send('Hello world!')
})

ksp.runKsp('express listen', 3000, (port) => console.log('Server listen on ' + port))
```

More example can be found [here](https://github.com/dotjov/ksp-express/blob/master/examples/) (eg. router/middleware/404)

## Ksp Methods

##### `express init` (?callback: () => void)
Init the express app

```js
ksp.runKsp('express init')
```

##### `express use` (fn: function)
Allow you to use middleware or 404 page

```js
ksp.runKsp('express use', bodyParser.json())
```

##### `express set` (key: any, value: any)
Allow you to set your key to express

```js
ksp.runKsp('express set', 'view engine', 'pug')
```

##### `express core get` (): express.App
Get the express app

```js
var app = ksp.runKsp('express core get')
```

##### `express core set` (app: express.App)
Set the express app

```js
var app = ...
ksp.runKsp('express core set', app)
```

##### `express route (get/post/put)` (url: string, run: function)
Create a get/post/put route

```js
ksp.runKsp('express route get', '/', (req, res) => {
    res.send('Hello world!')
})
```

##### `express router create` (url: string)
Create a router

```js
ksp.runKsp('express router create', '/user', (router) => {
    // todo
})
```

##### `express router (get/post/put)` (url: string, run: function, router: express.Router)
Create a get/post/put route to the router

```js
ksp.runKsp('express router get', '/login', (req, res) => {
    res.render('login', {})
}, router)
```

##### `express send` (response: any, res: express.Response)
Send a response to a route

```js
ksp.runKsp('express send', 'Hello world!', res)
```

##### `express send with status` (response: any, status: number, res: express.Response)
Send a response with a status to a route

```js
ksp.runKsp('express send with status', '404 not found', 404, res)
```

##### `express render` (view: string, data: any, res: express.Response)
Render a view to a route

```js
ksp.runKsp('express render', 'setting', {
    user: userData
}, res)
```

##### `express redirect` (url: string, res: express.Response)
Redirect to an url

```js
ksp.runKsp('express redirect', '/user/login', res)
```

##### `express listen` (port: number, ?callback: (?port: numbre) => void)
Listen the express app

```js
ksp.runKsp('express listen', 3000, (port) => console.log('Server listen on ' + port))
```

## Contribution

You can fork the repository, improve or fix it and then send the pull requests back if you want to see them here. I really appreciate that. ❤

## License

MIT License

Copyright (c) 2019 dotjov

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
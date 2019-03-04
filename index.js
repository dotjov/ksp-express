const ksp = require('ksp')
const express = require('express')
var app

module.exports = function () {
    ksp.createKsp('express init', (callback) => {
        app = express()
        if (typeof callback === 'function') callback()
    })

    ksp.createKsp('express use', (fn) => {
        app.use(fn)
    })

    ksp.createKsp('express set', (key, value) => {
        app.set(key, value)
    })

    ksp.createKsp('express core get', (callback) => {
        if (typeof callback === 'function') callback(app)
    })

    ksp.createKsp('express core set', (napp) => {
        app = napp
    })

    ksp.createKsp('express route get', (url, run) => {
        if (typeof url !== 'string') throw new TypeError('The ksp `express route get` need a string to the 1st parameter!')
        if (typeof run !== 'function') throw new TypeError('The ksp `express route get` need a function to the 2nd parameter!')

        app.get(url, run)
    })

    ksp.createKsp('express route post', (url, run) => {
        if (typeof url !== 'string') throw new TypeError('The ksp `express route post` need a string to the 1st parameter!')
        if (typeof run !== 'function') throw new TypeError('The ksp `express route post` need a function to the 2nd parameter!')

        app.post(url, run)
    })

    ksp.createKsp('express route put', (url, run) => {
        if (typeof url !== 'string') throw new TypeError('The ksp `express route put` need a string to the 1st parameter!')
        if (typeof run !== 'function') throw new TypeError('The ksp `express route put` need a function to the 2nd parameter!')

        app.put(url, run)
    })

    ksp.createKsp('express router create', async (url, callback) => {
        if (typeof url !== 'string') throw new TypeError('The ksp `express router create` need a string to the 1st parameter!')
        if (typeof callback !== 'function') throw new TypeError('The ksp `express router create` need a function to the 2nd parameter!')

        let router = express.Router()
        await callback(router)
        app.use(url, router)
    })

    ksp.createKsp('express router get', (url, run, router) => {
        if (typeof url !== 'string') throw new TypeError('The ksp `express router get` need a string to the 1st parameter!')
        if (typeof run !== 'function') throw new TypeError('The ksp `express router get` need a function to the 2nd parameter!')

        router.get(url, run)
    })

    ksp.createKsp('express router post', (url, run, router) => {
        if (typeof url !== 'string') throw new TypeError('The ksp `express router post` need a string to the 1st parameter!')
        if (typeof run !== 'function') throw new TypeError('The ksp `express router post` need a function to the 2nd parameter!')

        router.post(url, run)
    })

    ksp.createKsp('express router put', (url, run, router) => {
        if (typeof url !== 'string') throw new TypeError('The ksp `express router put` need a string to the 1st parameter!')
        if (typeof run !== 'function') throw new TypeError('The ksp `express router put` need a function to the 2nd parameter!')

        router.put(url, run)
    })

    ksp.createKsp('express send', (response, res) => {
        res.send(response)
    })

    ksp.createKsp('express send with status', (response, status, res) => {
        if (typeof status !== 'number') throw new TypeError('The ksp `express send with status` need a number to the 2nd parameter!')

        res.status(status).send(response)
    })

    ksp.createKsp('express render', (view, data, res) => {
        if (typeof view !== 'string') throw new TypeError('The ksp `express render` need a number to the 1st parameter!')

        res.render(view, data)
    })

    ksp.createKsp('express redirect', (url, res) => {
        if (typeof url !== 'string') throw new TypeError('The ksp `express redirect` need a string to the 1st parameter!')

        res.redirect(url)
    })

    ksp.createKsp('express listen', (port, callback) => {
        if (typeof port !== 'number') throw new TypeError('The ksp `express listen` need a number to the 1st parameter!')

        app.listen(port, () => {
            if (typeof callback === 'function') callback(port)
        })
    })
}
const ksp = require('ksp')
const express = require('express')
var app = express()

module.exports = function () {
    ksp.createKsp('express init', (callback) => {
        app = express()
        if (typeof callback === 'function') callback()
    })

    ksp.createKsp('express get', (url, run) => {
        if (typeof url !== 'string') {
            throw new Error('The function `express get` need a string to the 1st parameter!')
        }
        if (typeof run !== 'function') {
            throw new Error('The function `express get` need a function to the 2nd parameter!')
        }

        app.get(url, run)
    })

    ksp.createKsp('express post', (url, run) => {
        if (typeof url !== 'string') {
            throw new Error('The function `express post` need a string to the 1st parameter!')
        }
        if (typeof run !== 'function') {
            throw new Error('The function `express post` need a function to the 2nd parameter!')
        }

        app.post(url, run)
    })

    ksp.createKsp('express put', (url, run) => {
        if (typeof url !== 'string') {
            throw new Error('The function `express put` need a string to the 1st parameter!')
        }
        if (typeof run !== 'function') {
            throw new Error('The function `express put` need a function to the 2nd parameter!')
        }

        app.put(url, run)
    })

    ksp.createKsp('express send with status', (response, status, res) => {
        res.status(status).send(response)
    })

    ksp.createKsp('express listen', (port, callback) => {
        if (typeof port !== 'number') {
            throw new Error('The function `express listen` need a number to the 1st parameter!')
        }

        app.listen(port)
        if (typeof callback === 'function') callback(port)
    })
}
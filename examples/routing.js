const ksp = require('ksp')
const kspExpress = require('ksp-express')

ksp.use(kspExpress())
ksp.runKsp('express init')

ksp.runKsp('express route get', '/', (req, res) => {
    ksp.runKsp('express redirect', '/user/login', res)
    //ksp.runKsp('express send', 'Hello world!', res) // or res.send('Hello world!')
})

ksp.runKsp('express router create', '/user', (router) => {

    ksp.runKsp('express router get', '/login', (req, res) => {
        ksp.runKsp('express render', 'login', {}, res) // or res.render('login', {})
    }, router)

    ksp.runKsp('express router get', '/setting', (req, res) => {
        if (req.isUnauthenticated()) return ksp.runKsp('express redirect', '/user/login', res)

        // eg. get user data
        ksp.runKsp('express render', 'setting', {
            user: userData
        }, res) // or res.render('setting', { data: userData })
    }, router)

})

ksp.runKsp('express listen', 3000, (port) => console.log('Server listen on ' + port))
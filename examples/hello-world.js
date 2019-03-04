const ksp = require('ksp')
const kspExpress = require('ksp-express')

ksp.use(kspExpress())
ksp.runKsp('express init')

ksp.runKsp('express route get', '/', (req, res) => {
    ksp.runKsp('express send', 'Hello world!', res) // or res.send('Hello world!')
})

ksp.runKsp('express listen', 3000, (port) => console.log('Server listen on ' + port))
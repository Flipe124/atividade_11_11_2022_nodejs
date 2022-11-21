const express = require('express')

const app = express()
const bodyParser = require('body-parser')
const port = 2000

app.get(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

const product = require('./produto.controller')
app.route('/product').get(product.listAll)
app.route('/product/:id').get(product.getId)

app.route('/produto/delete/:id').delete(product.deletar)
app.route('/product').post(product.save)
app.route('/product/update/:id').put(product.update)

app.listen(port);
console.log('API na porta: ' + port)

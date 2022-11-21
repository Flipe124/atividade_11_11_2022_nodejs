const express = require('express')// requerendo um plugin
//npm i express - no cmd para baixar o plugin e instalar os arquivos na pasta raiz
//gerou o pacote node_modules
//Ctr+c encerra a aplicação no terminal

//node_modules é onde fica todas as depencias da sua aplicação
//package.json onde fica os plugins que instalei

//////POSTMAN

const app = express()
const bodyParser = require('body-parser')
const port = 2000

app.get(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended : true
}))

const product = require('./produto.controller')
app.route('/product').get(product.listAll)
app.route('/product/:id').get(product.getId)

app.route('/produto/delete/:id').delete(product.deletar)
app.route('/product').post(product.save)
app.route('/product/update/:id').put(product.update)


// const db = require('./db')
// app.get('ola', (req, res) => {
//     db.query("select * from products", (err, rows, fields) => {
//         if(!err)
    //             res.send(rows)
    //         else    
//             console.log(err)
//     })
// })


app.listen(port);
console.log('API na porta: ' + port)

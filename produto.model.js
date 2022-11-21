const db = require('./db')

const product = function(prod){
    this.title = prod.title
    this.description = prod.description
    this.status = prod.status
}

product.getAll = function(result){
    db.query("SELECT * FROM products", function(err, res) {
        if(err){
            console.log('Erro : ' + err)
        } else {
            console.log('Produtos : ' + res)
            result(null, res)
        }
    })
}

product.get = function(id, result){
    db.query("SELECT * FROM products WHERE id = ?", id, function(err, res) {
        if(err){
            console.log('Erro : ' + err)
        } else {
            console.log('Produtos : ' + res)
            result(null, res)
        }
    })
}

product.delete = function(id, result){
    db.query("DELETE FROM products WHERE id = ?", id, function(err, res) {
        if(err){
            console.log('Erro : ' + err)
        } else {
            console.log('Produtos : ' + res)
            result(null, res)
        }
    })
}


product.post = function(dados, result){
    console.log(dados)
    const { title, description, status } = dados
    db.query("INSERT INTO products(title, description, status) values(?, ?, ?)", [title, description, status], function(err, res) {
        if(err){
            console.log('Erro : ' + err)
        } else {
            console.log('Produtos : ' + res)
            result(null, res)
        }
    })
}


product.update = function(id, dados, result){
    console.log(dados)
    const { title, description, status } = dados
    db.query("UPDATE products SET title = ?, description = ?, status = ? WHERE id = ?", [title, description, status, id], function(err, res) {
        if(err){
            console.log('Erro : ' + err)
        } else {
            console.log('Produtos : ' + res)
            result(null, res)
        }
    })
}


module.exports = product
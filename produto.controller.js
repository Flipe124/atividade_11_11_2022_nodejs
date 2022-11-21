const model = require('./produto.model')


exports.listAll = function(req, res){
    model.getAll(function(err, prod){
        if(err)
            res.send(err)
        
        res.send(prod)
    })
}

exports.getId = function(req, res){
    model.get(req.params.id, function(err, prod){
        if(err)
            res.send(err)
        
        res.json(prod)
    })
}

exports.deletar = function(req, res){
    model.delete(req.params.id, function(err, prod){
        if(err)
            res.send(err)
        
        res.send(prod)
    })
}

exports.save = function(req, res){
    model.post(req.body, function(err, prod){
        if(err)
            res.send(err)
        
        res.send(prod)
    })
}

exports.update = function(req, res){
    model.update(req.params.id, req.body, function(err, prod){
        if(err)
            res.send(err)
        
        res.send(prod)
    })
}
const express = require('express');
const response = require('../../network/response');
const controller = require('./controller')
const router = express.Router();

router.post('/',function( req, res ){
    controller.addStore(req.body.nit,req.body.storeName,req.body.storeTypeId,req.body.creationUser)
        .then((data)=>{
            console.log('respondi bien');
            response.success(req, res , data, 201);
        })
        .catch(e=>{
            console.log('respondi por el error');
            response.error(req,res, 'Internar error' ,500, e);
        })
});

router.get('/',function(req,res){
    controller.getAll()
        .then((storeList)=>{
            response.success(req,res, storeList,200);
        })
        .catch(e =>{
            response.error(req, res, 'Unexpect error',500,e);
        })
});

router.get('/:nit',function(req,res){
    controller.getStoresByNit(req.params.nit)
        .then((stores)=>{
            response.success(req,res, stores,200);
        })
        .catch(e =>{
            response.error(req, res, 'Unexpect error',500,e);
        })
});


router.patch('/:nit',function(req,res){
    controller.updateStore(req.params.nit, req.body.storeName,req.body.storeTypeId,req.body.updateUser)
        .then((data)=>{
            response.success(req,res,data,200);
        })
        .catch(e=>{
            response.error(req, res, 'Error interno',500,e);
        });
});

router.delete('/:nit',function(req,res){
    controller.deleteStore(req.params.nit)
        .then((data)=>{
            response.success(req,res, data,200);
        })
        .catch(e =>{
            response.error(req, res, 'Unexpect error',500,e);
        })
});


module.exports = router;
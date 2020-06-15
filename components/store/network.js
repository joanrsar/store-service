const express = require('express');
const multer = require('multer');
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


module.exports = router;
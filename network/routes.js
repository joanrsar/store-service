const express = require('express');
const myStore = require('../components/store/network');


const routes = function( server ){
    server.use('/store', myStore);
}

module.exports = routes;
const store = require('./store');

function  addStore(nit,storeName,storeTypeId, creationUser){
    console.log('nit '+nit);
    console.log('name '+storeName);
    console.log('storeTypeId '+storeTypeId);
    console.log('creationUser '+creationUser);

    if(!nit){
        return Promise.reject('Invalid nit');
    }

    if(!storeName){
        return Promise.reject('Invalid name');
    }

    if(!storeTypeId){
        return Promise.reject('Invalid type ');
    }

    if(!creationUser){
        return Promise.reject('Invalid creationUser ');
    }
    const  creationDate = new Date();
    const myStore = {
        nit,
        storeName,
        storeTypeId,
        creationDate,
        creationUser,
    };
   
    return  store.createStore(myStore);
}

function getAll() {
    return new Promise((resolve,reject) => {
        resolve(store.getAll())
    })
}


function getStoresByNit(nit) {
    return new Promise((resolve,reject) => {
        resolve(store.getStoresByNit(nit))
    })
}

module.exports = {
    addStore,
    getAll,
    getStoresByNit,

}
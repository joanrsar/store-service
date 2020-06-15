const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'store-21.c9vc2lcfn2qx.us-east-2.rds.amazonaws.com',
  database: 'postgres',
  password: 'postgres',
  port: 5432,
});


function createStore (myStore) 
{
    return new Promise((resolve, reject) => {
        pool.query('insert into store.store(nit,store_name,store_type_id,creation_date,creation_user) VALUES ($1, $2,$3,$4,$5)',
        [myStore.nit, myStore.storeName, myStore.storeTypeId,myStore.creationDate,myStore.creationUser],(error, results) => {
        if(error) {
          return reject(new Error('An error occured save u: ' + error));
        }
        return resolve('Store saved!')
        
      });

    });
  }


async function getAll(){
    const response = await pool.query('SELECT * FROM store.store where store_state=$1 ORDER BY store_id ASC',['A']);
    return response.rows;
}

async function getStoresByNit(nit){
    const response = await pool.query('SELECT * FROM store.store where nit = $1 and store_state=$2',[nit,'A']);
    return response.rows;
}

function updateStore (myStore) 
{
    return new Promise((resolve, reject) => {
        pool.query('update store.store set store_name=$1, store_type_id=$2, update_date=$3, update_user=$4 where nit=$5',
        [ myStore.storeName, 
          myStore.storeTypeId,
          myStore.updateDate,
          myStore.updateUser,
          myStore.nit],(error, results) => {
        if(error) {
          return reject(new Error('An error occured save u: ' + error));
        }
        return resolve('Store updated!')
        
      });

    });
  }

  function deleteStore (nit) 
{
    return new Promise((resolve, reject) => {
        pool.query('update store.store set store_state=$1 where nit=$2',
        [ 'I',
          nit],(error, results) => {
        if(error) {
          return reject(new Error('An error occured save u: ' + error));
        }
        return resolve('Store deleted!')
        
      });

    });
  }


module.exports = {
   createStore,
   getAll,
   getStoresByNit,
   updateStore,
   deleteStore,
};
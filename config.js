const config ={
    dbUrl : process.env.DB_URL || 'mongodb+srv://db_user:db_user@cluster0-gddiv.mongodb.net/telegrom',
    port : process.env.PORT || 3000,
    host : process.env.HOST || 'http://localhost',
    publicRoute : process.env.PUBLIC_ROUTE || '/app',
}

module.exports = config;
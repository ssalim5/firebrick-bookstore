const Sequelize = require('sequelize')
const pkg = require('../../package.json')

const databaseName = pkg.name + (process.env.NODE_ENV === 'test' ? '-test' : '')

const config = {
  logging: false
};

if(process.env.LOGGING === 'true'){
  delete config.logging
}

//https://stackoverflow.com/questions/61254851/heroku-postgres-sequelize-no-pg-hba-conf-entry-for-host
if(process.env.DATABASE_URL){
  config.dialectOptions = {
    ssl: {
      rejectUnauthorized: false
    }
  };
}

const db = new Sequelize(
  // process.env.DATABASE_URL || `postgres://localhost:5432/${databaseName}`, config)
  process.env.DATABASE_URL || `postgres://gbxpasuyvthyah:dfac88fbae11460c026af5ac4e2b322c15ea0f894edcdf6ab6df9defd9209466@ec2-3-223-213-207.compute-1.amazonaws.com:5432/d279nf9p804tj1`, config)


module.exports = db

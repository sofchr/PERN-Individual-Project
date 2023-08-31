const { Client } = require('pg')
const gardenwall = 'gardenwall'
const client = new Client(`postgres://localhost:5432/${gardenwall}`)



module.exports = client
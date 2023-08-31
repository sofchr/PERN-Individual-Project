const { Client } = require('pg')
const garden = 'garden'
const client = new Client(`postgres://localhost:5432/${garden}`)



module.exports = client
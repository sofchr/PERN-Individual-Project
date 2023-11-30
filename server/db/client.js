const { Client } = require('pg')
const gardenwall = 'gardenwall';
// const client = new Client(`postgres://localhost:5432/${gardenwall}`)
const client = new Client('postgres://gardenwall_wegj_user:jwOBVN3abukssHVmKcjBf7pgaGSHB0Ph@dpg-cljvdg6g1b2c739ekgkg-a/gardenwall_wegj')


module.exports = client
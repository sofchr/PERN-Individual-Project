const { Client } = require('pg')
const gardenwall = 'gardenwall';
// const client = new Client(`postgres://localhost:5432/${gardenwall}`)
const client = new Client('postgres://gardenwall_a5bp_user:tH0orIZcDM18jKyogX9Kh5UzxGSVctt3@dpg-cljt1gdae00c73frhjtg-a/gardenwall_a5bp')


module.exports = client
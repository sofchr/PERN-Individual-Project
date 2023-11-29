const { Client } = require('pg')
const gardenwall = 'gardenwall';
// const client = new Client(`postgres://localhost:5432/${gardenwall}`)
const client = new Client('postgres://gardenwall_rwhz_user:RHfyPALJ6VRQzrk1Ntp3q69nTtFQG5hF@dpg-cljre2hll56s73bonlf0-a/gardenwall_rwhz')


module.exports = client
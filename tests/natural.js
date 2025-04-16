// Import the package
const config = require('../dist')

// Register your .conf file
config.puntconf.init('./tests/.conf')

// Get your config value
console.log(process.env.APP_VERSION);

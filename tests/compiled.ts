import { puntconf } from "./../dist";

puntconf.init('./tests/.conf')

console.log(process.env.APP_VERSION);
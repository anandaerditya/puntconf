import { puntconf } from "../sources";

puntconf.init('./tests/.conf')
console.log(process.env.APP_VERSION);

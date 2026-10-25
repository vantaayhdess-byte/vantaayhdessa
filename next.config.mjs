import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = dirname(fileURLToPath(import.meta.url));

const config = { turbopack: { root: projectRoot }, outputFileTracingRoot: projectRoot, async redirects(){return [{source:'/contact.html',destination:'/yhteystiedot',permanent:true},{source:'/tietoa-meist.html',destination:'/tietoa-meista',permanent:true},{source:'/toiminta.html',destination:'/toiminta',permanent:true},{source:'/tapahtumat-2.html',destination:'/toimintakalenteri',permanent:true},{source:'/index.html',destination:'/',permanent:true}]}};
export default config;


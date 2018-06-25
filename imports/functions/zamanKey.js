import fs from 'fs';
import path from 'path';

const rootPath = __meteor_bootstrap__.serverDir.split( path.sep + '.meteor' )[0];
const keyPath = rootPath + "/private/keys/zaman/";

export const privateKey = fs.readFileSync( keyPath + "zaman" );
export const publicKey = fs.readFileSync( keyPath + "zaman.pub" );

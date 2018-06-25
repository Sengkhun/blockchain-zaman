import rsaKeygen from 'rsa-keygen';
import fs from 'fs';
import path from 'path';

const rootPath = __meteor_bootstrap__.serverDir.split(path.sep + '.meteor')[0];
const location = rootPath + "/private/keys/zaman/";

if ( !fs.existsSync( location + "zaman" ) ) {

    const keys = rsaKeygen.generate();

    fs.appendFile( location + "zaman", keys.private_key, function( err ) {
        if( err ) console.log( err );
    });

    fs.appendFile( location + "zaman.pub", keys.public_key, function( err ) {
        if( err ) console.log( err );
    });

}

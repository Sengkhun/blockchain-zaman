import keypair from 'keypair';
import fs from 'fs';
import path from 'path';

const rootPath = path.resolve('.').split(path.sep + '.meteor')[0];
const location = rootPath + "/private/keys/zaman/";

if ( !fs.existsSync( location + "zaman" ) ) {

    const pair = keypair();

    fs.appendFile( location + "zaman", pair.private , function( err ) {
        if( err ) console.log( err );
    });

    fs.appendFile( location + "zaman.pub", pair.public , function( err ) {
        if( err ) console.log( err );
    });

}

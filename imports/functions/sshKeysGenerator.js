import keypair from 'keypair';
import fs from 'fs';
import path from 'path';

const rootPath = path.resolve('.').split(path.sep + '.meteor')[0];
const destinationPath = rootPath + "/private/keys/students/";

export default generateKey = ( id ) => {

    if ( !fs.existsSync( location + "zaman" ) ) {

        const pair = keypair();

        fs.appendFile( location + "privateKey", pair.private , function( err ) {
            if( err ) console.log( err );
        });

        fs.appendFile( location + "publicKey.pub", pair.public , function( err ) {
            if( err ) console.log( err );
        });

    }


}

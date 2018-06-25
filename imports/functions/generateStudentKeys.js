import rsaKeygen from 'rsa-keygen';
import fs from 'fs';
import path from 'path';

export const generateKey = ( id ) => {

    const rootPath = __meteor_bootstrap__.serverDir.split(path.sep + '.meteor')[0];
    const location = rootPath + "/private/keys/students/" + id;

    if ( !fs.existsSync( location ) ){

        // Make Folder
        fs.mkdirSync( location );

        return createKey( location );

    } else {

        // Folder already exist
        if ( !fs.existsSync( location + "/key" ) ) {

            return createKey( location );

        } else {

            const private_key = fs.readFileSync( location + "/key" );
            const public_key = fs.readFileSync( location + "/key.pub" );

            return { private_key, public_key };

        }

    }

};

const createKey = ( location ) => {

    const keys = rsaKeygen.generate();
    console.log(keys);
    fs.appendFile( location + "/key", keys.private_key, function( err ) {
        if( err ) console.log( err );
    });

    fs.appendFile( location + "/key.pub", keys.public_key, function( err ) {
        if( err ) console.log( err );
    });

    return keys;

}

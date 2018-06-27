import rsaKeygen from 'rsa-keygen';
import fs from 'fs';
import path from 'path';

const rootPath = __meteor_bootstrap__.serverDir.split(path.sep + '.meteor')[0];
const keyLocation = rootPath + "/private/keys/students/";

export const generateKey = ( id ) => {

    const location = keyLocation + id;

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

    fs.writeFileSync( location + "/key", keys.private_key );
    fs.writeFileSync( location + "/key.pub", keys.public_key );

    return keys;

};

export const getKey = ( id ) => {

    const location = keyLocation + id;
    const private_key = fs.readFileSync( location + "/key" );
    const public_key = fs.readFileSync( location + "/key.pub" );

    return { private_key, public_key };

}

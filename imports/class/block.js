import { calculateHash, encryptHash } from '../functions/hash';
import { privateKey } from '../functions/zamanKey';

export default class Block {

    constructor( _id, data, previousHash = "" ) {

        this._id = _id;
        this.data = data;
        this.previousHash = previousHash;
        this.timestamp = Date.now();
        this.signedHash = encryptHash( privateKey, calculateHash( _id, data, previousHash, this.timestamp ) );

    }

}

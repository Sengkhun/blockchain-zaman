import SHA256 from 'crypto-js/sha256';

export default class Block {

    constructor( data, previousHash = "" ) {

        this.data = data;
        this.previousHash = previousHash;
        this.timestamp = Date.now();
        this.hash = this.calculateHash();
        this.nonce = 0;

    }

    calculateHash() {

        return SHA256( JSON.stringify( this.data ) + this.previousHash + this.timestamp + this.nonce ).toString();

    }

    encryptData() {

    }

    mineBlock( difficulty ) {

        while ( this.hash.substring( 0, difficulty ) !== Array( difficulty + 1 ).join( "0" ) ) {

            this.nonce++;
            this.hash = this.calculateHash();

        }

        console.log( "Block mined: " + this.hash );

    }

}

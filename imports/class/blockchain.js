import SHA256 from 'crypto-js/sha256';

import { Block, Student }  from './index.js';
import { Blocks } from '/imports/collection';

export default class Blockchain {

    static createGenesisBlock( _id, data ) {

        if ( Blocks.find().count() === 0 ) {

            const { ...rest } = new Block( _id, data, "0" );
            Blocks.insert( rest );

        }

    }

    static getEntireBlocks() {

        return Blocks.find().fetch();

    }

    static getLastestBlock() {

        return Blocks.findOne({}, { sort: { timestamp: -1, limit: 1 } });

    }

    static addBlock( newBlock ) {

        if ( Blocks.find().count() !== 0 ) {

            newBlock.previousHash = this.getLastestBlock().signedHash;

            const { ...rest } = newBlock;
            Blocks.insert( rest );

        }

    } // End of addBlock()

    static calculateHash({ _id, data, previousHash, timestamp }) {

        return SHA256(
            _id +
            JSON.stringify( data ) +
            previousHash +
            timestamp
        ).toString();

    }

    static signHash() {

    }

    static isChainValid() {

        const Blockchain = this.getEntireBlocks();

        for ( var i = 1; i < Blockchain.length; i++ ) {

            const currentBlock = Blockchain[i];
            const previousBlock = Blockchain[i - 1];

            if ( currentBlock.signedHash !== this.calculateHash( currentBlock ) )
                return false;

            if ( currentBlock.previousHash !== previousBlock.hash )
                return false;

        }

        // Finishing Loop
        return true;

    } // End of isChainValid()

}

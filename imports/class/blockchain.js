import SHA256 from 'crypto-js/sha256';

import { Block, Student }  from './index.js';
import { Blocks } from '/imports/collection';

export default class Blockchain {

    static createGenesisBlock( data ) {

        if ( Blocks.find().count() === 0 ) {

            const { ...rest } = new Block( data, "0" );
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

            const difficulty = 2;

            newBlock.previousHash = this.getLastestBlock().hash;
            newBlock.mineBlock( difficulty );

            const { ...rest } = newBlock;
            Blocks.insert( rest );

        }

    } // End of addBlock()

    static calculateHash({ data, previousHash, timestamp, nonce }) {

        return SHA256( JSON.stringify( data ) + previousHash + timestamp + nonce ).toString();

    }

    static isChainValid() {

        const Blockchain = this.getEntireBlocks();

        for ( var i = 1; i < Blockchain.length; i++ ) {

            const currentBlock = Blockchain[i];
            const previousBlock = Blockchain[i - 1];

            if ( currentBlock.hash !== this.calculateHash( currentBlock ) )
                return false;

            if ( currentBlock.previousHash !== previousBlock.hash )
                return false;

        }

        // Finishing Loop
        return true;

    } // End of isChainValid()

}

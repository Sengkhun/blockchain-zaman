import SHA256 from 'crypto-js/sha256';

import { Block, Student }  from './index.js';
import { Blocks } from '/imports/collection';

import { generateKey } from '/imports/functions/generateStudentKeys';

export default class Blockchain {

    static getEntireBlocks() {
        return Blocks.find().fetch();
    }

    static getLastestBlock() {
        return Blocks.findOne({}, { sort: { timestamp: -1, limit: 1 } });
    }

    static async addBlock( _id, student ) {

        // Get the key
        const keys = await generateKey( _id );

        // Encrypt the student data
        student.encrypt( keys.private_key );

        // create new block
        const newBlock = new Block( _id, student );

        // Check if the block is not genesis block
        if ( Blocks.find().count() !== 0 ) {
            newBlock.previousHash = this.getLastestBlock().signedHash;
        }

        // insert to database
        const { ...rest } = newBlock;
        Blocks.insert( rest );

    } // End of addBlock()

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

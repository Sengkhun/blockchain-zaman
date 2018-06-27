import SHA256 from 'crypto-js/sha256';

import { Block, Student }  from './index.js';
import { Blocks } from '/imports/collection';

import {
    calculateHash,
    encryptByPrivateKey,
    decryptByPublicKey
} from '/imports/functions/hash';

import { generateKey, getKey } from '/imports/functions/generateStudentKeys';

import { publicKey } from '../functions/zamanKey';

export default class Blockchain {

    static getEntireBlocks() {
        return Blocks.find().fetch();
    }

    static getLastestBlock() {
        return Blocks.findOne({}, { sort: { timestamp: -1, limit: 1 } });
    }

    static addBlock( _id, student ) {

        if ( Blocks.findOne( _id ) ) {
            console.log("This student with id " + _id + " already added");
            return;
        }

        // Get the key
        const keys = generateKey( _id );

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

    static findBlock( _id, publicKey ) {

        try {

            const block = Blocks.findOne( _id );

            if ( block === 'undefined' || !block )
                throw "Not id is matched!";

            // const key = getKey( _id );

            const { imageProfile, firstName, lastName, dateOfBirth, gender, graduatedYear } = block.data;
            const student = new Student( imageProfile, firstName, lastName, dateOfBirth, gender, graduatedYear );

            // Decrypt the student data
            student.decrypt( publicKey );

            return { ok: true, student };

        } catch (e) {

            return { ok:false, error: e };

        }

    }

    static isChainValid() {

        const Blockchain = this.getEntireBlocks();

        for ( var i = 1; i < Blockchain.length; i++ ) {

            const currentBlock = Blockchain[i];
            const previousBlock = Blockchain[i - 1];

            const { _id, data, previousHash, timestamp } = currentBlock;
            const hash = decryptByPublicKey( publicKey, currentBlock.signedHash );
            const newHash = calculateHash( _id, data, previousHash, timestamp );

            if ( hash !== newHash ) return false;

            if ( currentBlock.previousHash !== previousBlock.signedHash ) return false;

        }

        // Finishing Loop
        return true;

    } // End of isChainValid()

}

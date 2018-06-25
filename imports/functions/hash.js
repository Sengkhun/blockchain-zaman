import fs from 'fs';
import path from 'path';
import ursa from 'ursa';
import SHA256 from 'crypto-js/sha256';

export const calculateHash = ( block ) => {

    const { _id, data, previousHash, timestamp } = block;

    return SHA256(
        _id +
        JSON.stringify( data ) +
        previousHash +
        timestamp
    ).toString();

};

export const encryptHash = ( privateKey, hash ) => {

    const key = ursa.createPrivateKey( privateKey );

    const encrypted = key.privateEncrypt( hash, 'utf8', 'base64' );

    return encrypted;

};

export const decryptHash = ( publicKey, encryptedHash ) => {

    const pub = ursa.createPublicKey( publicKey );

    const decrypted = pub.publicDecrypt( encryptedHash, 'base64', 'utf8' );

    return decrypted;

};

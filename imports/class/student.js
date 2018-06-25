import ursa from 'ursa';
import { encryptByPrivateKey, decryptByPublicKey } from '../functions/hash';

export default class Student {

    constructor( imageProfile, firstName, lastName, dateOfBirth, gender, graduatedYear ) {

        this.imageProfile = imageProfile.toString();
        this.firstName = firstName.toString();
        this.lastName = lastName.toString();
        this.dateOfBirth = dateOfBirth.toString();
        this.gender = gender.toString();
        this.graduatedYear = graduatedYear.toString();

    }

    encrypt( privateKey ) {

        this.imageProfile = encryptByPrivateKey( privateKey, this.imageProfile );
        this.firstName = encryptByPrivateKey( privateKey, this.firstName );
        this.lastName = encryptByPrivateKey( privateKey, this.lastName );
        this.dateOfBirth = encryptByPrivateKey( privateKey, this.dateOfBirth );
        this.gender = encryptByPrivateKey( privateKey, this.gender );
        this.graduatedYear = encryptByPrivateKey( privateKey, this.graduatedYear );

    }

    decrypt( publicKey ) {

        this.imageProfile = decryptByPublicKey( publicKey, this.imageProfile );
        this.firstName = decryptByPublicKey( publicKey, this.firstName );
        this.lastName = decryptByPublicKey( publicKey, this.lastName );
        this.dateOfBirth = decryptByPublicKey( publicKey, this.dateOfBirth );
        this.gender = decryptByPublicKey( publicKey, this.gender );
        this.graduatedYear = decryptByPublicKey( publicKey, this.graduatedYear );

    }

}

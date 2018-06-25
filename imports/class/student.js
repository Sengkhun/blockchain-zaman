import ursa from 'ursa';
import { encryptByPrivateKey } from '../functions/hash';

export default class Student {

    constructor( imageProfile, firstName, lastName, dateOfBirth, gender, graduatedYear ) {

        this.imageProfile = imageProfile;
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.gender = gender;
        this.graduatedYear = graduatedYear;

    }

    encrypt( privateKey ) {

        this.imageProfile = encryptByPrivateKey( privateKey, this.imageProfile );
        this.firstName = encryptByPrivateKey( privateKey, this.firstName );
        this.lastName = encryptByPrivateKey( privateKey, this.lastName );
        this.dateOfBirth = encryptByPrivateKey( privateKey, this.dateOfBirth.toString() );
        this.gender = encryptByPrivateKey( privateKey, this.gender );
        this.graduatedYear = encryptByPrivateKey( privateKey, this.graduatedYear.toString() );

    }

}

import SimpleSchema from "simpl-schema";
import base64Img from 'base64-img';

export default Blocks = new Mongo.Collection( 'blocks' );

StudentSchema = new SimpleSchema({

    imageProfile: {
        type: String,
        optional: true
    },

    firstName: {
        type: String,
        trim: true
    },

    lastName: {
        type: String,
        trim: true
    },

    dateOfBirth: {
        type: Date
    },

    gender: {
        type: String,
        allowedValues: ["Male", "Female"]
    },

    graduatedYear: {
        type: Number
    }

});

BlockSchema = new SimpleSchema({

    _id: {
        type: String
    },

    data: {
        type: StudentSchema
    },

    previousHash: {
        type: String,
        trim: true
    },

    signedHash: {
        type: String,
        trim: true
    },

    timestamp: {
        type: Number
    }

});

Blocks.attachSchema( BlockSchema );

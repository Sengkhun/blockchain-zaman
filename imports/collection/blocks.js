import SimpleSchema from "simpl-schema";
import base64Img from 'base64-img';
import { Blockchain } from '/imports/class';

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
        type: String
    },

    gender: {
        type: String
    },

    graduatedYear: {
        type: String
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

if ( Meteor.isServer ) {
    Meteor.publish( 'allBlocks', function () {
        return Blocks.find();
    });
}

Meteor.methods({

    'block.find' ( blockId, publicKey ) {
        return Blockchain.findBlock( blockId, publicKey );
    }

});

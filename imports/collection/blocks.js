import SimpleSchema from "simpl-schema";

export default Blocks = new Mongo.Collection( 'blocks' );

StudentSchema = new SimpleSchema({

    firstName: {
        type: String,
        trim: true
    },

    lastName: {
        type: String,
        trim: true
    },

    age: {
        type: Number,
        min: 0
    },

    gender: {
        type: String,
        allowedValues: ["Male", "Female"]
    },

    startYear: {
        type: Number
    },

    endYear: {
        type: Number
    }

});

BlockSchema = new SimpleSchema({

    data: {
        type: StudentSchema
    },

    previousHash: {
        type: String,
        trim: true
    },

    hash: {
        type: String,
        trim: true
    },

    timestamp: {
        type: Number
    },

    nonce: {
        type: Number
    }

});

Blocks.attachSchema( BlockSchema );

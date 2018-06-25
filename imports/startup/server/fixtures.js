import { Meteor } from 'meteor/meteor';
import NodeRSA from 'node-rsa';

import { Block, Blockchain, Student }  from '/imports/class';
import { Blocks } from '/imports/collection';

Meteor.startup(() => {

    // let student1 = new Student( "Sengkhun", "Lim", 23, "Male", 2015, 2019 );
    // let student2 = new Student( "Socret", "Lee", 21, "Male", 2015, 2019 );
    // let student3 = new Student( "Lyhour", "Sovann", 20, "Male", 2015, 2019 );

    // console.log( "Block 1: ");
    // Blockchain.createGenesisBlock( student1 );
    //
    // console.log( "Block 2: ");
    // Blockchain.addBlock( new Block( student2 ) );
    //
    // console.log( "Block 3: ");
    // Blockchain.addBlock( new Block( student3 ) );
    //
    // console.log("is valid: " + Blockchain.isChainValid() );

});

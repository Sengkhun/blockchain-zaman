import { Block, Blockchain, Student }  from '/imports/class';
import { Blocks } from '/imports/collection';

import { generateKey } from '/imports/functions/generateStudentKeys';

Meteor.startup(() => {

    let student1 = new Student( "", "Sengkhun", "Lim", new Date('1995-08-12'), "Male", 2019 );
    let student2 = new Student( "", "Vitou", "Phy", new Date('1996-06-02'), "Male", 2018 );
    let student3 = new Student( "", "Keanghok", "Lay", new Date('1996-08-12'), "Male", 2018 );

    // Blockchain.findBlock( "1263748" );

    // Blockchain.addBlock( "1673648", student1 );
    // Blockchain.addBlock( "1263748", student2 );

    // console.log( "Block 3: ");
    // Blockchain.addBlock( new Block( "47268934", student3 ) );
    //
    console.log("is valid: " + Blockchain.isChainValid() );

});

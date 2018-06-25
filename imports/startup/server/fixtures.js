import { Block, Blockchain, Student }  from '/imports/class';
import { Blocks } from '/imports/collection';

import { generateKey } from '/imports/functions/generateStudentKeys';

Meteor.startup(() => {

    let student1 = new Student( "", "Sengkhun", "Lim", new Date('1995-08-12'), "Male", 2019 );
    let student2 = new Student( "", "Vitou", "Phy", new Date('1996-06-02'), "Male", 2018 );
    let student3 = new Student( "", "Keanghok", "Lay", new Date('1996-08-12'), "Male", 2018 );

    // Blockchain.addBlock( "1673648", student1 );
    // Blockchain.addBlock( "1263748", student2 );
    // Blockchain.addBlock( "1092748", student3 );

    // console.log(Blockchain.findBlock( "1673648" ));
    // console.log(Blockchain.findBlock( "1263748" ));
    // console.log(Blockchain.findBlock( "1092748" ));

    console.log("is valid: " + Blockchain.isChainValid() );

});

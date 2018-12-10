const util = require('./util');

it("should add teo numbers", ()=> {
    var res = util.add(10, 10);
    if (res !== 15) {
        
        throw new Error(`expected 15 but got ${res}`);
        
    };


});


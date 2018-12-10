const util = require('./util');

it("should add two numbers", ()=> {
    var res = util.add(10, 5);
    if (res !== 15) {
        
        throw new Error(`expected 15 but got ${res}`);
        
    };
});


it("should add multi numbers", ()=> {
    var res = util.multi(10, 10);
    if (res !== 100) {
        
        throw new Error(`expected 100 but got ${res}`);
        
    };
});

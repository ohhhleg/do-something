const {
    find,
    change,
    remove,
    plus,
    ObjectId
} = require('./db');
!(async () => {
    //查
    // let data = await find('ohhhleg', {
    //     _id: ObjectId('5d31b2e4afeee708b4964d44'),
    //     name:'hmbb'
    //     // iq:'-250'
    // });
    // console.log(data);
    // //删
    // let data2 = await remove('ohhhleg', {
    //     _id: ObjectId('5d31b3791c631c08b437e690'),
    // });
    //改
    // let data3 = await change('ohhhleg', {
    //     name:'zyg'
    // },{
    //     iq:'250'
    // });
    // console.log(data3);
    //增
    let data4 = await plus('ohhhleg', [{
        name:'Plankton',
        iq:'2*250'
    }]);
    console.log(data4);
})();

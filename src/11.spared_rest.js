'use strict';
const log = (m) => {
    console.log(m)
};
const clr = () => {
    console.clear()
};


// 1. spread 문법 {}
{
    const data = { name : "lkh", age : 39}
    const data_a ={...data, height:176};
    log(data_a);
}
// 2. spread 문법 []
{
    const data = [1, 2, 3, 4, 5]
    const data_a = [...data, 6];
    log(data_a);
}

// 3. rest 문법 {}
{
    const data = { name : "lkh", age : 39,height:176}
    const {name,age,...rest} =data;
    log(name);
    log(age);
    log(rest);
}
// 4. rest 문법 []
{
    const data = [{
        name: "lkh",
        age: 39,
        height: 176
    }, {
        name: "cjs",
        age: 38,
        height: 160
    }]
    const [one, two] = data;
    log(one);
    log(two);
}
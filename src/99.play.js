'use strict';
const log = (m) => {
    console.log(m)
};
const clr = () => {
    console.clear()
};
// 연습장
{
    log('스타트 연습장');
    const data = [{
        id: 1,
        name: "이경훈"
    }, {
        id: 2,
        name: "최지선"
    },
    {
        id: 2,
        name: "이은서"
    }]

    const arr =[10,20,30,40];
    //slice , splice 
    const sliced = arr.slice(0,3);
    log(sliced);
    log(arr);
    
    const spliced = arr.splice(0,2,1000);
    log(spliced);
    log(arr);










    








}
'use strict';
const log = (m) => {
    console.log(m)
};
const clr = () => {
    console.clear()
};
// 연습장
{
    log('start spread and rest');
    function max(...a){
       return a.reduce((prev,curr)=> prev>curr?curr:prev,0)
    }
    function average(...a){
        const sum= a.reduce((prev,curr)=> prev+curr,0)
        const aver = sum/a.length;
        return aver;
    }
    
    const number = [5,5,5]
    const result = max(...number);
    const result2 = average(...number);
    log(result2);






}
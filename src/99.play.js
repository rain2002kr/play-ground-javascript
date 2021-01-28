'use strict';
const log = (m) => {
    console.log(m)
};
const clr = () => {
    console.clear()
};
// 연습장
{
    log('START 콜백')

    function promises(m) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(m + 1);
                log(m)
            }, 1000);

        })
    }
    promises(1).then(promises).then(promises)

    function delayfunc(ms) {
        return new Promise((resolve, reject) => setTimeout(resolve, ms))
    }
    async function promise(m) {
        await delayfunc(1000)
        log(m)
        return (m + 1);
    }


    promise(1).then(promise).then(promise)

















}
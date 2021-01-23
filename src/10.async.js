'use strict';
const log = (m) => {
    console.log(m)
};
const clr = () => {
    console.clear()
};
// 1. Async 문법 
{
    function login(id) {
        return new Promise((resolve, reject) => {
            log('START Promise without async')
            setTimeout(() => {
                if (id === "khlee") {
                    resolve(id)
                } else {
                    reject(new Error("not found user"))
                }
            }, 2000);

        })
    }
    function delay(ms){
        return new Promise((resolve,reject)=>{setTimeout(resolve, ms)})
    }
    async function asyncLogin(id) {
        try{
            if(false){
            log('START Promise with async')
            await delay(3000); 
            return id;
            } else {
                throw new Error('error message')
            }

        }catch(err){
            log(err)
        }
    }
    // call async 
    // login('khlee').then(log);
    // asyncLogin('khlee').then(log);
}

// 2. Promise 내장 함수 async and await
{
    clr();

    function delayfunc(ms) {
        return new Promise((resolve, reject) => setTimeout(resolve, ms))
    }

    async function Getbanana() {
        log('START getbanana')
        await delayfunc(2000);
        return 'banana'
    }
    async function Getapple() {
        log('START Getapple')
        await delayfunc(1000);
        return 'apple'
    }

    async function pickFruits() {
        try {
            const bananaPromise = Getbanana();
            const applePromise = Getapple();
            const banana = await bananaPromise;
            const apple = await applePromise;
            return `${apple}+${banana}`;
        } catch (err) {
            console.error(err)
        }

    }
    // call 
    //pickFruits().then(log);

    function pickfruitAll(){
        return Promise.all([Getapple(),Getbanana()]);
    }
     
    pickfruitAll().then((m)=>{
        log(m);
        log(m.join('+'));
        const joins = m.join('+');
        log(joins);
        return joins;
    }).then(log);
    
    function pickfruitRace(){
        log('pick Fruit Race ')
        return Promise.race([Getbanana(),Getapple()])
    }
    pickfruitRace().then((winner)=>{
        log(`pick fruit race `);
        log(winner);
    }).finally(()=>log(`finally pick fruit race`));


}
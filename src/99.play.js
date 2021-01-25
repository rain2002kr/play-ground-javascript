'use strict';
const log = (m) => {
    console.log(m)
};
const clr = () => {
    console.clear()
};
// 연습장
{
    class Food {
        constructor(name){
            this.name = name;
            this.brands = [];
        }
        addBrand(brand){
            this.brands.push(brand);
        }
        print(){
            log(`${this.name} 을 하는 음식점들`)
            log(this.brands.join(', '));
        }
    }

    const pizza = new Food('피자');
    pizza.addBrand('피자헛');
    pizza.addBrand('도미너 피자');

    const chicken = new Food('치킨');
    chicken.addBrand('굽네치킨');
    chicken.addBrand('네네치킨');

    pizza.print();
    chicken.print();
    log(pizza);
    log(chicken);




  


}
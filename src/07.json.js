'use stric';
'use strict'
const log = (m)=>{console.log(m)};
const clr = ()=>{console.clear()};

function Person(name, age){
  const birthDate = new Date()
  const introduce = ()=>{log(`안녕하세요. ${name} 입니다.`)}
  return {name, age, birthDate, introduce}
}

// 1. OBJ TO JSON stringfy 
{
log('START : 1. OBJ TO JSON ');
  const lee = {name:"jake", age:"38"};
  log(lee);
  const leekh = Person('khlee', 39);
  const cjs = Person('cjs', 38);
  log(leekh);
  log(cjs);
  leekh.introduce();


log('START : 1.1 OBJ TO JSON.stringfy ');
  const json_leekh = JSON.stringify(leekh,['name']);
  log('COMMENT : replacer [ ]')
  log(json_leekh);
  const json_leekh_replacer = JSON.stringify(leekh,(leekh,value)=> leekh === "name" ? "leekh":value);
  log('COMMENT : replacer callback')
  log(json_leekh_replacer);
}

// 2. JSON TO OBJ parse 
{
log('START : 2. JSON TO OBJ parse ');
  const cjs = Person('cjs', 38);
  const json_cjs = JSON.stringify(cjs);
  log(json_cjs);
  const gson_cjs = JSON.parse(json_cjs);
  log(gson_cjs);

  log('COMMENT : reviver callback')
  const reviver_cjs = JSON.parse(json_cjs,(key,value)=>key==="name"?"변경값":value);
  log(reviver_cjs);

}




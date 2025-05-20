const census = ((listArr) =>{
//    let listArr = [ 
//     { age: 12, name: 'Bob', gender: 'Male' },
//     { age: 37, name: 'Liza', gender: 'Female' },
//     { age: 40, name: 'Foo', gender: 'Male' }
    
//    ]
 if ( !listArr || listArr === 0) {
    return undefined
 }
   let malePersonOfMaxAge = listArr[0];  //???????????????????

   for(let i = 0; i < listArr.length; i++) {
    if (malePersonOfMaxAge.age < listArr[i].age && listArr[i].gender === "Male") {
        malePersonOfMaxAge = listArr[i];
    } 
  } 

   if (malePersonOfMaxAge) {
    return malePersonOfMaxAge.name 
} else {
     return undefined

}}); 

console.log(census([
  { age: 12, name: 'Bob', gender: 'Male' },
  { age: 37, name: 'Liza', gender: 'Female' },
  { age: 40, name: 'Foo', gender: 'Male' }
])); // 'Foo'
console.log(census([{ age: 40, name: 'Liza', gender: 'Female' }])); // 'undefined'

census()
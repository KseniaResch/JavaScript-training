const cesnsus = ((list) =>{
   let listArr = [ 
    { age: 12, name: 'Bob', gender: 'Male' },
    { age: 37, name: 'Liza', gender: 'Female' },
    { age: 40, name: 'Foo', gender: 'Male' }
    
   ]
   
   let maxAge = listArr[0].age;
   for(let i = 0; i < listArr.length; i++) {
    if (maxAge < listArr[i].age) {
        maxAge = listArr[i].age;
    }
   }
})
console.log(census([
  { age: 12, name: 'Bob', gender: 'Male' },
  { age: 37, name: 'Liza', gender: 'Female' },
  { age: 40, name: 'Foo', gender: 'Male' }
])); // 'Foo'
console.log(census([{ age: 40, name: 'Liza', gender: 'Female' }])); // 'undefined'

cesnsus()
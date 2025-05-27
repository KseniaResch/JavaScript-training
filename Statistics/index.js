const census = (listArr) =>{

 if ( !listArr || listArr.length === 0) {
    return undefined
 }
   let oldestMale = null;  
  
   for(let i = 0; i < listArr.length; i++) {
     person = listArr[i] 
     if( person.gender == "Male") {   
    if( oldestMale === null || oldestMale.age < person.age ){
      oldestMale = person    
    } 
  }
} if (oldestMale) {
  return oldestMale.name;

}
}

const findPerson= (listArr) =>{
  if (!listArr || listArr.length === 0){
    return undefined
  }

  let oldestMale = { age: null, name: "default"};

  for (let i = 0; i < listArr.length; i++) {
    let person = listArr[i]
    
    if (person.gender === "Female") {
      continue
  }
   if  (oldestMale.age === 0 || oldestMale.age < person.age ){
    oldestMale = person;
  }
}
 
  return oldestMale.name? oldestMale.name : undefined
   
}


   
console.log(census([
  { age: 100, name: 'Jack', gender: 'Female' },
  { age: 80, name: 'Liza', gender: 'Female' },
  { age: 12, name: 'Bob', gender: 'Male' },
  { age: 40, name: 'Foo', gender: 'Male' }
])); // 'Foo'
console.log(census([{ age: 40, name: 'Liza', gender: 'Female' }])); // 'undefined'

census()


console.log(findPerson([
  { age: 100, name: 'Jack', gender: 'Female' },
  { age: 80, name: 'Liza', gender: 'Female' },
  { age: 12, name: 'Bob', gender: 'Male' },
  { age: 40, name: 'Foo', gender: 'Male' }

]))

console.log(findPerson([{ age: 40, name: 'Liza', gender: 'Female' }
]));



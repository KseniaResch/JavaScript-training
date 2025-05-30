const list = [

 {

  name: 'John',

  age: 30,

  children: [],

 },

 {

  name: 'Jane',

  age: 25,

  children: [

   {

    name: 'Bob1',

    age: 5,

    children: [

     {

      name: 'Bob2',

      age: 5,

      children: [],

     },

     {

      name: 'Mike3',

      age: 10,

      children: [

       {

        name: 'Bob4',

        age: 5,

        children: [],

       },

       {

        name: 'Mike5',

        age: 10,

        children: [],

       }

      ],

     }

    ],

   },

   {

    name: 'Mike7',

    age: 10,

    children: [

     {

      name: 'Bob77',

      age: 5,

      children: [],

     },

     {

      name: 'Mike78',

      age: 10,

      children: [

       {

        name: 'Bob90',

        age: 5,

        children: [],

       },

       {

        name: 'Mike99',

        age: 9999,

        children: [],

       }

      ],

     }

    ],

   }

  ],

 },

 {

  name: 'Tom',

  age: 18,

  children: [],

 }

];


const findUser = (users, userName) => {
    for (const user of users) {
     if( userName === user.name) {
        return user
     } 
     if (user.children.length > 0) {
        const searchedUser = findUser(user.children, userName)
        if(searchedUser) {
        return  searchedUser; 
    } 
   }
 }  
}


console.log(findUser(list, 'Bob4'))
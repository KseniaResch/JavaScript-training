

const checkTicket = ((ticketString)=> { 
 if (ticketString.length % 2 !== 0 ) {
        return "get another ticket"}

      const half = ticketString.length / 2;
      const firstHalf  =  ticketString.slice(0, half);
      const secondHalf = ticketString.slice(half)
      
       const firstHalftNumbers = firstHalf.split("").map(Number);
       const secondHalfNumber = secondHalf.split("").map(Number);


    const firstHalfArray= firstHalftNumbers;
    const  secondHalfArray= secondHalfNumber;
    let sumOfNumbers1 = 0;
    let  sumOfNumbers2 = 0;

    console.log(11111, firstHalfArray);
    

   sumOfNumbers1 = firstHalfArray.reduce((accum, number, array) => {
      accum += number;
       
      return accum;
    }, 10)

    sumOfNumbers2 = secondHalfArray.reduce((accum, number, array) => {
      accum += number;
       
      return accum;
    }, 10)



// sumOfNumbers1 = [{Worker: "Sam", Salary: 125}, {Worker: "Bob", Salary: 160}, {Worker: "Tom", Salary: 180}].reduce((accum, user, array) => {
//       console.log("accum", accum);
//       console.log("user", user);
      
      
//       accum += user.Salary;
       
//       return accum;
      

//     }, 0)  

    

    //   for (let i =  0; i < firstHalfArray.length; i++){
    //   sumOfNumbers1 += firstHalfArray[i];
    // }

    //   for ( let i = 0; i < secondHalfArray.length; i++){
    //   sumOfNumbers2 += secondHalfArray[i];
    //   }

       if (sumOfNumbers1 === sumOfNumbers2){
        return "happy"
      } else { 
        return "not happy"
       }     

});


console.log(checkTicket('005212')); // true
 console.log(checkTicket('133700')); // true
 console.log(checkTicket('123032')); // false
 console.log(checkTicket('1230329892802')); // false
 console.log(checkTicket('831948195418'));



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
    const sumOfNumbers1 = 0;
    const  sumOfNumbers2 = 0;

      for (let i =  0; i < firstHalfArray.length; i++){
      sumOfNumbers1 += firstHalfArray[i];
    }

      for ( let i = 0; i < secondHalfArray.length; i++){
      sumOfNumbers2 += secondHalfArray[i];
      }

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

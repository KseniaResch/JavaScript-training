

const checkTicket = ((ticketString)=> { 
  if (ticketString.length != 6 ) {
        return " get another ticket"
      }
      
      const ticketNumbers = ticketString.split("").map(Number);
     sum1 = ticketNumbers[0] + ticketNumbers[1] + ticketNumbers [2];
     sum2 = ticketNumbers[3] + ticketNumbers[4] + ticketNumbers [5];
       if (sum1 === sum2){
        return "happy"
      } else { 
        return "not happy"
       }     

});


console.log(checkTicket('005212')); // true
console.log(checkTicket('133700')); // true
console.log(checkTicket('123032')); // false
console.log(checkTicket('1230329892802')); // false

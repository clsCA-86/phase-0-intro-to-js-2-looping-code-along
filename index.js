function writeCards(namesArray, event) {
    const messagesArray = [];
    for (let i = 0; i < namesArray.length; i++) {
      messagesArray.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`);
    }
    return messagesArray;
  }
  
  
function countDown(num) {
    while (num >= 0) {
      console.log(num);
      num--;
    }
  }
  

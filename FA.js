function factorial(x){
  if(typeof x !== 'number'){
    throw new Error('you need to give me a number mate')
  }
  if(x <= 0){
    return 0;
  }

  var total = 1;

  var iterate = function(x){
    if(x===1){
      return;
      }
    total *= x;
    x--;
   iterate(x);
  };

  iterate(x);
  return total;
};

module.exports = {
  factorial : factorial
}
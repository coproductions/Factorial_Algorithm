function factorial(x){
  if(typeof x !== 'number'){
    throw new Error('you need to give me a number mate')
  }
  if(x <= 0){
    return 0;
  }

    if(x===1){
      return x;
      }

    return x * factorial(x-1);
};

module.exports = {
  factorial : factorial
}
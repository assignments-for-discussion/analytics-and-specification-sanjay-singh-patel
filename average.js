function av(p,c){
  if (isNaN(c)){
    n-=1
    return p;
  }
  return p+c;
}
function average(numbers) {
  n=numbers.length
  return numbers.reduce(av, 0) / n;
}
module.exports = {average};

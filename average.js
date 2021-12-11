
function average(numbers) {
  if (numbers.length ==0){return NaN}
  return numbers.reduce((p,c)=>{

    if (isNaN(c))
    {
      numbers.length-=1
      return p;
    }
    return p+c;
  }, 0) / numbers.length;
}
module.exports = {average};

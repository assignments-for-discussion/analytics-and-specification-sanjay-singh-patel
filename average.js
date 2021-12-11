
function average(numbers) {
<<<<<<< HEAD
  return numbers.reduce((p,c)=>{if (isNaN(c))
=======
  return numbers.reduce((p,c)=>{if (isNaN(c))
>>>>>>> 74adac7aadd380e86fed4b378505dad827ba2398
    {
      numbers.length-=1
      return p;
    }
    return p+c;
  }, 0) / numbers.length;
}
module.exports = {average};

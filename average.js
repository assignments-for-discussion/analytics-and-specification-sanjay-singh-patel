function average(numbers) {
  n = numbers.length
  return numbers.reduce((p,c)=>{
    if (isNaN(c))
    {
      n-=1
      return p;
    }
    return p+c;
  }, 0) / n;
}

module.exports = {average};
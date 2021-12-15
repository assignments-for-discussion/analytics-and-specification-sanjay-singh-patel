function average(numbers) {
  var n = numbers.length
  // counting the number of NaNs and outlier values
  for(var i=0;i<numbers.length;i++)
  {
    if(isNaN(numbers[i]))
    {
      n-=1
    }
    if (numbers[i]>=150 || numbers[i]<0){
      n-=1
    }
  }
  // returning the average
  return numbers.reduce((p,c)=>
  {
    // ignoring a value if it is NaN
    if (isNaN(c)){
      return p;
    }
    // Assuming any value grater tha 150 or negative is an outlier value
    if(c>=150||c<0){
      return p;
    }
    return p+c;
  }, 0) / n;
}
console.log(average([51, 1000, 38, 71, 80, 1500, -15]))
module.exports = {average};
function palindrome(str) {
  //[\W_] will match any non-word chars so anything that is not a-zA-Z0-9_
  let oldStr = str.toLowerCase().replace(/[\W_]/g,'');
  let reverseStr = oldStr.split('').reverse().join('');
  if(oldStr === reverseStr){
    return true;
  }else
  {
    return false;
  }
  console.log(oldStr);
  console.log(reverseStr);
}



palindrome("1 eye for of 1 eye.");

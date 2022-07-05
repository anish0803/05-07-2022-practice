// ----Write a javascript program to check whether the given string is palindrome or not using recursion.------

function palin(x, sum, y) {
    if (x > 0) {
      let r = x % 10;
      sum = sum * 10 + r;
      x = Math.floor(x / 10);
      return palin(x, sum, y);
    }
    console.log(sum);
    if (y == sum) {
      return "NO. IS palindrome";
    } else {
      return " NO. Is not palindrome";
    }
  }
  
  console.log(palin(161, 0, 161));
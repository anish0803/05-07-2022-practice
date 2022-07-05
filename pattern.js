// display following pattern:

// 12345
// 23451
// 34512
// 45123
// 51234

// ans-------

function pattern(n){
    // let n = 5;
    
    for(let i=1; i<=n; i++) {
      let stars = '';
      for(let j=i; j<=n; j++) {
        stars += j;
      }
      for(let k=1; k<i; k++) {
        stars += k;
      }
      console.log(stars);
    }
  }
  pattern(5);
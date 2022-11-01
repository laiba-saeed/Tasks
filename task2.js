var isPalindrome = function (x) {
    var last_x, reverse_x = 0;
    
    while(x > 0)
    {
      last_x = x % 10;
      reverse_x = (reverse_x * 10) + last_x;
      x = parseInt(x / 10);
    }
    
    if(x === reverse_x){
       return true
    } else {
       return false
    }
    }
    
    isPalindrome(121);
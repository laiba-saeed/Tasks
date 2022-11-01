let stack = ['(','('];

var isValid = function(s) {
    let openBracket = [];
    for(let i = 0; i < s.length; i++){
    if(s[i] === '(' || s[i] ==='{' || s[i] ==='['){
        openBracket.push(s[i]);
    } else {
        if(s[i] === ')' && openBracket[openBracket.length-1] === '('){
            openBracket.pop(s[i]);
           console.log(true);
        } 
        else if(s[i] === "}" && openBracket[openBracket.length-1] === '{'){
            openBracket.pop(s[i]);
            console.log(true);
        }
        else if(s[i] === "]" && openBracket[openBracket.length-1] === '['){
            openBracket.pop(s[i]);
            console.log(true);
        }
        else {
            console.log(false);
        }
    }
}
};

isValid(stack);
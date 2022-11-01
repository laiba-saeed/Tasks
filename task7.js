s = "Let's take LeetCode contest";
var reverseWords = function(s) {
    let split_string = s.split(" "); 
    let reverse = split_string.map((string) => {
        return string .split("").reverse().join("");
    })

    console.log(reverse.join(" "))
};

reverseWords(s);
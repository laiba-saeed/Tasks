var nums = [12, 345, 2, 6, 7869];

const length = nums.map(num => {
    for(let i = 0; i < nums.length; i++){
        var num_count = 0;
        if(num >= 1){
            num_count++;
        }
        while(num/10 >= 1){
            num /= 10;
            num_count++;
        }
        return num_count;
    }
});

const even_num = length.filter(even => {
    return even % 2 == 0;
});

let totalnum = even_num.length;

console.log(`${totalnum} integer(s) of he given array contain even number of digits.`);

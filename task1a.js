var nums = [12, 345, 2, 6, 7869];
const length = nums.map(num => {
    return num.toString().length;
});

const even_num = length.filter(even => {
    return even % 2 == 0;
});

let totalnum = even_num.length;

console.log(`${totalnum} integer(s) of he given array contain even number of digits.`);
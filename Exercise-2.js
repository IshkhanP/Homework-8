const arr = [];
let max;
let count = 0;
function fill(array, index) {
    array[index] = Math.floor(100 * Math.random());
    count++;
    max = max >= array[index] ? max : array[index];
    if (index < 5) {
        fill(array, ++index)
    }
};
fill(arr, 0);

console.log(`${arr} Maximum: ${max}`);

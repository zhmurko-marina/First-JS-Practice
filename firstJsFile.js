/**
 * Created by Marina on 22.10.2016.
 */

var array = [1, NaN, 3, 5, -3];
/*
    [3, 0, -5, 1, 44, -12, 3, 0, 0, 1, 2, -3, -3, 2, 1, 4, -2 - 3 - 1]
    [-1, -8, -2]
    [1, 7, 3]
    [1, undefined, 3, 5, -3]
    [1, NaN, 3, 5, -3]
*/
var sum = 0,
    min = array[0],
    max = array[0],
    n = array.length,
    i;

for (i = 0; i < n; i++) {
    if (array[i] == undefined || isNaN(array[i]) == true) {
        sum += 0;
    }
    else {
        sum += array[i];
    }
}

for (i = 1; i < n; i++) {
    if (array[i] < min) {
        min = array[i]
    }
}

for (i = 1; i < n; i++) {
    if (array[i] > max) {
        max = array[i];
    }
}

console.log('sum: ' + sum + '\n');
console.log('min: ' + min + '\n');
console.log('max: ' + max + '\n');
/**
 * Created by Marina on 22.10.2016.
 */

var array = [5, 4, 1, -8, 33, 55, 1, 3, 2, 88, 4, -3, -16, 5, -17, 1];

var sum = 0,
    min = array[0],
    max = array[0],
    n = array.length,
    i;

for (i = 0; i < n; i++) {
    sum += array[i];
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
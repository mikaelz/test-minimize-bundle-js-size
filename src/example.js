import { concat, sortBy, map, sample } from 'lodash';

const users = [
    { 'user': 'tom', 'age': 28 },
    { 'user': 'fred', 'age': 48 },
    { 'user': 'barney', 'age': 32 },
    { 'user': 'mike', 'age': 31 }
];

const exampleSortBy = sortBy(users, function(order) {
    return order.user;
});
console.log('Example sortBy():');
console.log(exampleSortBy);

const exampleMap = map(users, 'user');
console.log("\nExample map():");
console.log(exampleMap);

const array = [1];
const exampleConcat = concat(array, 2, [3], [[4]]);
console.log("\nExample concat():");
console.log(exampleConcat);

const exampleSample = sample([1, 2, 3, 4]);
console.log("\nExample sample:");
console.log(exampleSample);

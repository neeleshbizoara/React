/**
 @param {integer} init
 @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
    return {
        increment: () => {
            return init + 1;
        },
        decrement: () => {
            return init - 1;
        },
        reset: () => {
            return init;
        }
    }
};
 
const counter = createCounter(5)
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4
/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function(fn, t) {

    let timeoutId;

    return function(...args) {

        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
            fn(...args);
        }, t);

    }
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 *//*
LeetCode Problem:
Problem Number: 2627
Difficulty:
Approach:
Time Complexity:
Space Complexity:
*/

// Implement solution here

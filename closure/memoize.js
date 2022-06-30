const fetch = require("node-fetch");

const baseUrl = "https://pokeapi.co/api/v2";

//args: pokemon, ditto
//args: berry, cheri

async function fetchData(type, name) {
    const res = await fetch(`${baseUrl}/${type}/${name}`);
    return res;
}

function memoize(fn, timer) {
    const cash = {};
    return async function (...args) {
        if (!(args in cash) || (Date.now() - cash[args][1]) > timer) {
            const res = await fn(...args);
            cash[args] = [res, Date.now()];
        } 
        return cash[args][0];
    }
}

const memoizedFetch = memoize(fetchData, 1000);

memoizedFetch('pokemon', 'ditto')
memoizedFetch('berry', 'cheri')


setTimeout(() => {
    memoizedFetch('pokemon', 'ditto')
}, 500)

setTimeout(() => {
    memoizedFetch('berry', 'cheri')
}, 1500)

setTimeout(() => {
    memoizedFetch('pokemon', 'ditto')
}, 2000)

setTimeout(() => {
    memoizedFetch('pokemon', 'ditto')
}, 5000)
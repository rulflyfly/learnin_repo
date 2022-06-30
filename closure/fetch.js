const fetch = require("node-fetch");

const fetchRetry = async (url, retries) => {
	let countDown = retries;

    async function fetcher (url) {
        if (!countDown) throw new Error('out of tries')
        const res = await fetch(url)
        if (res.statusText === 'OK') return res.body;
        else {
            countDown--;
            return await fetcher(url);
        }
    }

   return await fetcher(url);
}

fetchRetry('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits', 5)
.then(res => console.log(res))
.catch(err => console.log(err))
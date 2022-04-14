const fetch = require('node-fetch')

async function getCompanyData(ticker) {
    const res = await fetch(`https://yfapi.net/v6/finance/quote?symbols=${ticker}`, {
        method: 'get',
        headers: {
            'x-api-key': ''
        }
    })
    const data = await res.json()
    const results = data?.quoteResponse?.result
    if(results.length === 1) {
        return {
            name: results[0].longName,
            ticker: results[0].symbol,
        }
    }
}

module.exports = {
    getCompanyData
}

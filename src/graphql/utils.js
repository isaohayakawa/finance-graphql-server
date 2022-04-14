const fetch = require('node-fetch')

async function getCompanyData(ticker) {
    const res = await fetch(`https://yfapi.net/v6/finance/quote?symbols=${ticker}`, {
        method: 'get',
        headers: {
            'x-api-key': '0BWqCoY9mr33pys0d7T2lopgAsf23V2nO1iSGgb0'
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
import gm from '../gm'

const response = await gm.getExchangeInfo({
    minAmount: 1000.5,
    maxAmount: 2000.5,
    from: 'RUB',
    to: 'USD',
    livetime: 60
})

console.log(response)

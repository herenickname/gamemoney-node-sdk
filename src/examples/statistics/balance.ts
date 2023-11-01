import gm from '../gm'

const response = await gm.getBalanceStatistics({
    currency: 'RUB'
})

console.log(response)

import gm from '../gm'

const response = await gm.convertExchange({
    id: 1_183_988,
    amount: 1000.5
})

console.log(response)

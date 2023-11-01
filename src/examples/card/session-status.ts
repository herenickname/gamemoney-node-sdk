import gm from '../gm'

const response = await gm.getCardSessionStatus({
    invoice: '1'
})

console.log(response)

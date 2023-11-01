import gm from '../gm'

const response = await gm.getCardFullList({
    user: '1'
})

console.log(response)

import gm from '../gm'

const response = await gm.deleteCard({
    user: '1',
    pan: '111111******2222'
})

console.log(response)

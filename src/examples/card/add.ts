import gm from '../gm'

const response = await gm.addCard({
    user: '1',
    redirect: 'https://project/return'
})

console.log(response)

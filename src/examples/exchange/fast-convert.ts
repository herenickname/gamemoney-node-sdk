import { v4 as uuidv4 } from 'uuid'
import gm from '../gm'

const projectExchangeId = uuidv4()

const response = await gm.fastConvertExchange({
    externalId: projectExchangeId,
    amount: 1000,
    from: 'RUB',
    to: 'USD'
})

console.log({ projectExchangeId, response })

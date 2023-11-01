import express from 'express'
import bodyParser from 'body-parser'
import gm from '../gm'
import { type InvoiceNotification } from '../../index'

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

app.post('/webhooks/handle_invoices', (request, response) => {
    const notification = request.body as InvoiceNotification
    console.log(notification)

    if (!gm.verifyRsaSignature(notification)) {
        return response.send({
            success: false,
            error: 'signature mismatch'
        })
    }

    console.log(notification)
    response.send({ success: true })
})

app.listen(3000)

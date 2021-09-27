/**
 * Rapyd Integrations: Request Signature.
 *
 * This app implements the Rapyd's API request signature. The crypto-js library
 * is required (https://www.npmjs.com/package/crypto-js). To install it, run:
 * 
 * npm install crypto-js
 *
 * @link   https://docs.rapyd.net/
 * @file   This files defines the main node.js application.
 * @author Isaac Benitez.
 * @version 0.0.1
 * 
 * @requires express
 * @requires https
 * @requires crypto-js
 */

const express = require('express');

const makeRequest = require('./utilities').makeRequest;

const app = express();

app.set('json spaces', 4);

app.listen(3000);

app.get('/countries', async (req, res) => {

    try {
        const result = await makeRequest('GET', '/v1/data/countries');
        res.json(result);
    } catch (error) {
        res.json(error);
    }

})

app.get('/payment', async (req, res) => {

    try {
        const body = {
            amount: 100,
            currency: 'HNL',
            payment_method: {
                type: 'hn_tengo_cash'
            }
        };
        const result = await makeRequest('POST', '/v1/payments', body);
        res.json(result);
    } catch (error) {
        res.json(error);
    }

})
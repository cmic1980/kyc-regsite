/**
 * Mocking client-server processing
 */

import {fetch as fetchPolyfill} from 'whatwg-fetch'

export default {
    getProducts (cb) {
        fetchPolyfill('/api/product/list')
            .then(function (response) {
                return response.json()
            })
            .then(function (data) {
                console.log('parsed json', data)
                let productList = data
                setTimeout(() => cb(productList), 100)
            })
            .catch(function (ex) {
                console.log('parsing failed', ex)
            })
    },

    buyProducts (products, cb, errorCb) {
        setTimeout(() => {
            // simulate random checkout failure.
            (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1)
                ? cb()
                : errorCb()
        }, 100)
    }
}

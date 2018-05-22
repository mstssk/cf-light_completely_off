/**
 * This script to turn off CL8DL-ALE(IRIS OHYAMA Inc.)
 * https://www.irisohyama.co.jp/led/ceiling/cl8dl_ale.html
 */

const co = require('co');
const axios = require('axios');
const runtimeConfig = require('cloud-functions-runtime-config');

exports.light_completely_off = (req, res) => {
    if (req.method !== 'POST') {
        res.status(400).send('Error');
        return;
    }
    co(function* () {
        // IFTTT Webhook urls
        const urlLightOn = yield config('urlLightOn');
        const urlLightToggle = yield config('urlLightToggle');

        /**
         * 1. Turn on light.
         * 2. Toggle into nightlight mode.
         * 3. Toggle into off mode.
         */
        yield axios.get(urlLightOn);
        yield sleep(500);
        yield axios.get(urlLightToggle);
        yield sleep(500);
        yield axios.get(urlLightToggle);
    })
        .then(() => res.status(200).send('Success'))
        .catch(err => {
            console.error(err);
            res.status(500).send('Error');
        });
};

function config(name) {
    // return Promise.resolve(require('./config')[name]) // testing
    return runtimeConfig.getVariable('light_completely_off', name);
}

function sleep(millisec) {
    return new Promise((resolve, reject) => setTimeout(() => resolve(), millisec));
}

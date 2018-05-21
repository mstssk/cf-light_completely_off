/**
 * This script to turn off CL8DL-ALE(IRIS OHYAMA Inc.)
 * https://www.irisohyama.co.jp/led/ceiling/cl8dl_ale.html
 */

const axios = require('axios');

// FIXME Use functions:config
const config = require('./config.js');

exports.light_completely_off = (req, res) => {
    if (req.method !== 'POST') {
        res.status(400).send('Error');
        return;
    }
    // IFTTT Webhook urls
    const urlLightOn = config.urlLightOn;
    const urlLightToggle = config.urlLightToggle;
    /**
     * 1. Turn on light.
     * 2. Toggle into nightlight mode.
     * 3. Toggle into off mode.
     */
    axios.get(urlLightOn)
        .then(sleep(3000))
        .then(axios.get(urlLightToggle))
        .then(sleep(3000))
        .then(axios.get(urlLightToggle))
        .then(() => res.status(200).send('Success'))
        .catch(err => {
            console.error(err);
            res.status(500).send('Error');
        });
};

function sleep(millisec) {
    return new Promise((resolve, reject) => setTimeout(() => resolve(), millisec));
}

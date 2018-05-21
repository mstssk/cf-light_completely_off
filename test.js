// testing script
const dummyReq = {
    method: 'POST',
};
const dummyRes = {
    status: () => { return { send: () => { } }; }
};

const light = require('./index');
light.light_completely_off(dummyReq, dummyRes);

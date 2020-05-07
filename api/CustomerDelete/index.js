const customers = require('../data/customers.json');

module.exports = async function (context, req) {
    const { id } = context.bindingData;

    let customerId = +id;
    for (let i = 0, len = customers.length; i < len; i++) {
        if (customers[i].id === customerId) {
            customers.splice(i, 1);
            break;
        }
    }
    

    context.res = {
        headers: {
            'Content-Type': 'application/json'
        },
        // status: 200, /* Defaults to 200 */
        body: {
            status: true
        }
    };
}
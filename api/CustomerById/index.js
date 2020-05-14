const customers = require('../data/customers.json');

module.exports = async function (context, req) {
    const { id } = context.bindingData;
    let customerId = +id;
    let selectedCustomer = customers.find(customer => customer.id === customerId);
    let response = selectedCustomer ? selectedCustomer : null;
    
    context.res = {
        // status: 200, /* Defaults to 200 */
        headers: {
          'Content-Type': 'application/json'    
        },
        body: response
    };
}
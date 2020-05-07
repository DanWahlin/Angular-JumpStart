const customers = require('../data/customers.json');

module.exports = async function (context, req) {
    const { id } = context.bindingData;
    let customerId = +id;

    const foundCustomer = customers.find(customer => customer.id === id);
    
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: foundCustomer ? foundCustomer: [] 
    };
}
import { Router } from 'https://deno.land/x/oak/mod.ts';
import loadFile from './loadfile.ts';

const   customers   = JSON.parse(loadFile('../data/customers.json')),
        states      = JSON.parse(loadFile('../data/states.json')),
        router = new Router();

router.get<{skip: string, top: string}>('/api/customers/page/:skip/:top', (ctx) => {
    const topVal = +ctx.params.top,
          skipVal = +ctx.params.skip,
          skip = (isNaN(skipVal)) ? 0 : skipVal;  
    let top = (isNaN(topVal)) ? 10 : skip + (topVal);

    if (top > customers.length) {
        top = skip + (customers.length - skip);
    }

    console.log(`Skip: ${skip} Top: ${top}`);

    var pagedCustomers = customers.slice(skip, top);
    ctx.response.headers.set('X-InlineCount', customers.length);
    ctx.response.body = pagedCustomers;
});

router.get('/api/customers', (ctx) => {
    ctx.response.body = customers;
});

router.get<{id: string}>('/api/customers/:id', (ctx) => {
    let customerId = +ctx.params.id;
    let selectedCustomer = null;
    for (let customer of customers) {
        if (customer.id === customerId) {
           // found customer to create one to send
           selectedCustomer = {};
           selectedCustomer = customer;
           break;
        }
    }  
    ctx.response.body = selectedCustomer;
});

router.post('/api/customers', async (ctx) => {
    let postedCustomer = (await ctx.request.body()).value;
    let maxId = Math.max.apply(Math,customers.map((cust: any) => cust.id));
    postedCustomer.id = ++maxId;
    postedCustomer.gender = (postedCustomer.id % 2 === 0) ? 'female' : 'male';
    customers.push(postedCustomer);
    ctx.response.body = postedCustomer;
});

router.put<{id: string}>('/api/customers/:id', async (ctx) => {
    let putCustomer = (await ctx.request.body()).value;
    console.log(putCustomer);
    let id = +ctx.params.id;
    let status = false;

    //Ensure state name is in sync with state abbreviation 
    const filteredStates = states.filter((state: any) => state.abbreviation === putCustomer.state.abbreviation);
    if (filteredStates && filteredStates.length) {
        putCustomer.state.name = filteredStates[0].name;
        console.log('Updated putCustomer state to ' + putCustomer.state.name);
    }

    for (let i=0,len=customers.length;i<len;i++) {
        if (customers[i].id === id) {
            customers[i] = putCustomer;
            status = true;
            break;
        }
    }
    ctx.response.body = { status: status };
});

router.delete<{id: string}>('/api/customers/:id', (ctx) => {
    let customerId = +ctx.params.id;
    for (let i=0,len=customers.length;i<len;i++) {
        if (customers[i].id === customerId) {
           customers.splice(i,1);
           break;
        }
    }  
    ctx.response.body = { status: true };
});

router.get<{id: string}>('/api/orders/:id', (ctx) => {
    let customerId = +ctx.params.id;
    for (let cust of customers) {
        if (cust.customerId === customerId) {
            return ctx.response.body = cust;
        }
    }
    ctx.response.body = [];
});

router.get('/api/states', (ctx) => {
    ctx.response.body = states;
});

router.post('/api/auth/login', async (ctx) => {
    var userLogin = (await ctx.request.body()).value;
    //Add "real" auth here. Simulating it by returning a simple boolean.
    ctx.response.body = true;
});

router.post('/api/auth/logout', (ctx) => {
    ctx.response.body = true;
});

export default router;
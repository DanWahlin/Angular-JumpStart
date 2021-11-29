import { Router } from 'https://deno.land/x/oak/mod.ts';
import loadFile from './loadfile.ts';

const   customers   = JSON.parse(loadFile('../data/customers.json')),
        states      = JSON.parse(loadFile('../data/states.json')),
        router = new Router();

router.get('/api/customers/page/:skip/:top', (ctx: any) => {
    const topVal = +ctx.request.top,
          skipVal = +ctx.params.skip,
          skip = (isNaN(skipVal)) ? 0 : skipVal;  
    let top = (isNaN(topVal)) ? 10 : skip + (topVal);

    if (top > customers.length) {
        top = skip + (customers.length - skip);
    }

    console.log(`Skip: ${skip} Top: ${top}`);

    const pagedCustomers = customers.slice(skip, top);
    ctx.response.headers.set('X-InlineCount', customers.length);
    ctx.response.body = pagedCustomers;
});

router.get('/api/customers', (ctx: any) => {
    ctx.response.body = customers;
});

router.get('/api/customers/:id', (ctx: any) => {
    const customerId = +ctx.params.id;
    let selectedCustomer = null;
    for (const customer of customers) {
        if (customer.id === customerId) {
           // found customer to create one to send
           selectedCustomer = {};
           selectedCustomer = customer;
           break;
        }
    }  
    ctx.response.body = selectedCustomer;
});

router.post('/api/customers', async (ctx: any) => {
    const postedCustomer = (await ctx.request.body()).value;
    let maxId = Math.max.apply(Math,customers.map((cust: any) => cust.id));
    postedCustomer.id = ++maxId;
    postedCustomer.gender = (postedCustomer.id % 2 === 0) ? 'female' : 'male';
    customers.push(postedCustomer);
    ctx.response.body = postedCustomer;
});

router.put('/api/customers/:id', async (ctx: any) => {
    const putCustomer = (await ctx.request.body()).value;
    console.log(putCustomer);
    const id = +ctx.params.id;
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

router.delete('/api/customers/:id', (ctx: any) => {
    const customerId = +ctx.params.id;
    for (let i=0,len=customers.length;i<len;i++) {
        if (customers[i].id === customerId) {
           customers.splice(i,1);
           break;
        }
    }  
    ctx.response.body = { status: true };
});

router.get('/api/orders/:id', (ctx: any) => {
    const customerId = +ctx.params.id;
    for (const cust of customers) {
        if (cust.customerId === customerId) {
            return ctx.response.body = cust;
        }
    }
    ctx.response.body = [];
});

router.get('/api/states', (ctx: any) => {
    ctx.response.body = states;
});

router.post('/api/auth/login', async (ctx: any) => {
    const userLogin = (await ctx.request.body()).value;
    //Add "real" auth here. Simulating it by returning a simple boolean.
    ctx.response.body = true;
});

router.post('/api/auth/logout', (ctx: any) => {
    ctx.response.body = true;
});

export default router;
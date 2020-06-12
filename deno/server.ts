import { Application, send } from 'https://deno.land/x/oak/mod.ts'; 
import * as path from 'https://deno.land/std/path/mod.ts';
import { oakCors } from 'https://deno.land/x/cors/mod.ts';
import router from './routes.ts'; 

const port = 8080,
      app = new Application();

// Logger
// app.use(async (ctx, next) => {
//     const start = Date.now();
//     await next();
//     const ms = Date.now() - start;
//     console.log(`${ctx.request.method} ${ctx.request.url} - ${ms}ms`);
// });

app.use(router.routes());
app.use(router.allowedMethods());
app.use(oakCors({ origin: 'http://localhost:4200' }));
app.use(async (ctx) => {
    await ctx.send({
        root: path.join(`${Deno.cwd()}`, '../dist'),
        index: 'index.html'
    });
});
app.use(async (ctx, next) => {
    try {
        await next();
    } catch (err) {
        console.error(err)
    }
});

app.addEventListener("listen", ({ hostname, port }) => {
    console.log(`Listening on port: ${port}`);
});

await app.listen({ port });
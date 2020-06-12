import { Application, send } from 'https://deno.land/x/oak/mod.ts'; 
import { join } from 'https://deno.land/std/path/mod.ts';
import { exists } from 'https://deno.land/std/fs/mod.ts';
import { oakCors } from 'https://deno.land/x/cors/mod.ts';
import router from './routes.ts'; 

const port = 8080,
      distFolder = join(`${Deno.cwd()}`, '../dist'),
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
    const pathExists = await exists(distFolder + ctx.request.url.pathname); 
    const options = {
        root: distFolder,
        path: pathExists ? ctx.request.url.pathname : 'index.html', // Handle fallback
        index: 'index.html'
    }
    await ctx.send(options);
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
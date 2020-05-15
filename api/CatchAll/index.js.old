const path = require('path');
const fs = require('fs');

function getFile(route, contentType) {
  const fullPath = path.join(process.cwd(), 'static', route);

  return new Promise((resolve, reject) => {
      fs.readFile(fullPath, (err, data) => {
        let res = { status: 200, body: undefined }

        if (err) {
            res.status = 401;
            res.body = `There was an error reading resource ${route}`;
            reject(res);
        } else {
            res.body = data;
            res.headers = { 'Content-Type': contentType };
            resolve(res);
        }
      })
  })  
}

module.exports = async function (context, req) {
    context.log('Catches everything');
    const {route} = context.bindingData;

    console.log('route', route);

    const mimeTypes = {
        html : 'text/html',
        css: 'text/css',
        other: 'text/plain',
        png: 'image/png',
        jpeg: 'image/jpeg'
    };

    const { groups: { extension } } = route.match(/\.(?<extension>\w+)$/)

    const contentType = mimeTypes[extension] ? mimeTypes[extension] : mimeTypes['other']; 
    
    context.res = await getFile(route, contentType);
}
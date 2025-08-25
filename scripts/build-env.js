import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function loadEnv() {
  const envPath = path.join(__dirname, '..', '.env');
  const env = {};
  
  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf8');
    envContent.split('\n').forEach(line => {
      const [key, ...valueParts] = line.split('=');
      if (key && valueParts.length) {
        env[key.trim()] = valueParts.join('=').trim();
      }
    });
  }
  
  return env;
}

function updateEnvironment(isProd = false) {
  const env = loadEnv();
  const apiUrl = env.NG_APP_API_URL || '';
  
  const envFile = isProd ? 'environment.prod.ts' : 'environment.ts';
  const envPath = path.join(__dirname, '..', 'src', 'environments', envFile);
  
  const content = `export const environment = {
  production: ${isProd},
  apiUrl: '${apiUrl}'
};`;
  
  fs.writeFileSync(envPath, content);
  console.log(`Updated ${envFile} with API URL: ${apiUrl}`);
}

// Run for both environments
updateEnvironment(false); // development
updateEnvironment(true);  // production
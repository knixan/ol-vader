const fs = require('fs');
const path = require('path');

const key = process.env.WEATHER_API_KEY || '';

const content = `export const environment = {
  production: true,
  weatherApiKey: '${key}',
};
`;

const dir = path.join(__dirname, '..', 'src', 'environments');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
fs.writeFileSync(path.join(dir, 'environment.ts'), content);

console.log('environment.ts generated');

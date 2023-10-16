require('dotenv').config();
const { execSync } = require('child_process');

execSync('./packages/router/router --config ./packages/router/config.yaml', { stdio: 'inherit' });

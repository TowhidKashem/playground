const { execSync } = require('child_process');
const dotenv = require('dotenv');

dotenv.config({ path: '.env' });

execSync(
  `./node_modules/i18nexus-cli/bin/index.js pull -k ${process.env.I18NEXUS_API_KEY}`
);
